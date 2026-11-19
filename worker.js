const WISH_KEY = "all";
const MAX_WISHES = 200;
const CACHE_URL = "https://wedding.local/api/wishes-store";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Content-Type": "application/json; charset=utf-8"
  };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: corsHeaders()
  });
}

function cleanText(value, max) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

async function readWishes(env) {
  if (env.WISHES) {
    const stored = await env.WISHES.get(WISH_KEY, { type: "json" });
    return Array.isArray(stored) ? stored : [];
  }
  const cached = await caches.default.match(CACHE_URL);
  if (!cached) return [];
  try {
    const data = await cached.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeWishes(env, list) {
  if (env.WISHES) {
    await env.WISHES.put(WISH_KEY, JSON.stringify(list));
    return;
  }
  await caches.default.put(
    CACHE_URL,
    new Response(JSON.stringify(list), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "max-age=31536000"
      }
    })
  );
}

async function handleWishes(request, env) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (request.method === "GET") {
    return json(await readWishes(env));
  }

  if (request.method === "POST") {
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }
    const name = cleanText(body.name, 60);
    const text = cleanText(body.text, 300);
    if (!name || !text) return json({ error: "Name and blessing required" }, 400);

    const list = await readWishes(env);
    list.push({
      name,
      text,
      at: new Date().toISOString()
    });
    const trimmed = list.slice(-MAX_WISHES);
    await writeWishes(env, trimmed);
    return json(trimmed);
  }

  return json({ error: "Method not allowed" }, 405);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/wishes") {
      return handleWishes(request, env);
    }
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response("Not found", { status: 404 });
  }
};
