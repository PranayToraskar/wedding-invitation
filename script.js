const VIVAH = new Date("2026-12-13T17:55:00+05:30");
const LANG_KEY = "ps-lang";
const WISH_API = (() => {
  const host = location.hostname;
  if (host === "127.0.0.1" || host === "localhost") {
    return "https://wedding-invitation.toraskar-pranay.workers.dev/api/wishes";
  }
  return "/api/wishes";
})();

const copy = {
  en: {
    groomName: "Pranay",
    brideName: "Supriya",
    weds: "weds",
    navHome: "Home",
    navInvite: "Invitation",
    navEvents: "Events",
    navCount: "Countdown",
    navBless: "Blessings",
    ganesha: "✦   With the blessings of Lord Ganesha   ✦",
    ganeshaPlain: "With the blessings of Lord Ganesha",
    together: "Together with their families",
    openLetter: "Open the letter",
    seeEvents: "See the celebrations",
    scroll: "Scroll",
    scratchHint: "Scratch to reveal the date",
    dateHidden: "Scratch the letter for the date",
    muhuratLabel: "Wedding muhurat",
    muhuratTime: "5:55 PM",
    closeDateHidden: "Mumbai",
    letterHint: "Tap the seal to open",
    inviteScript: "Shubh Vivah",
    inviteTitle: "You Are Invited",
    inviteLede: "With joy in our hearts, we request the honour of your presence",
    cardKicker: "request the pleasure of your company<br>at the wedding celebrations of",
    sonOf: "Son of",
    daughterOf: "Daughter of",
    groomParents: "Smt. Jagruti & Shri Jaiwant Vasudev Toraskar",
    brideParents: "Smt. Sujata & Shri Suresh Dhondhu Phanse",
    cardWhere: "Country Club Holidays · Andheri West",
    cardNote: "We humbly request you and your family to join us and bless the couple.",
    joinScript: "Join us",
    eventsTitle: "Event details",
    eventsLede: "A little turmeric, a lifetime of togetherness, and an evening filled with blessings.",
    preWedding: "Pre-wedding",
    haldiTitle: "Haldi Ceremony",
    haldiSub: "The pre-wedding celebration",
    haldiDate: "Friday, 11 December 2026",
    haldiTime: "7:00 PM – 10:00 PM",
    haldiVenue: "Sachinam Heights<br>Javji Dadaji Road, Grant Road (W)<br>Opp. Bhatia Hospital<br>Mumbai 400007",
    haldiQuote: "“A golden beginning to our forever.”",
    addCal: "Add to calendar",
    mumbai: "Mumbai",
    weddingTitle: "Wedding Ceremony",
    weddingSub: "The wedding muhurat",
    weddingDate: "Sunday, 13 December 2026",
    venueFull: "Country Club Holidays Pvt. Ltd.<br>Veera Desai Road<br>Opposite Kiya Park Building<br>Prathamesh Complex, Andheri West 400053",
    weddingQuote: "“Seven steps, seven promises, one beautiful journey.”",
    directions: "Get directions",
    dinnerTitle: "Welcome Dinner",
    dinnerSub: "Dinner and welcome",
    dinnerTime: "7:00 PM – 10:00 PM",
    venueShort: "Country Club Holidays Pvt. Ltd., Andheri West 400053",
    dinnerQuote: "“Your presence will make our celebration complete.”",
    countScript: "Counting down",
    countTitle: "Until we say forever",
    countLede: "To the wedding day.",
    countLabel: "Countdown to the wedding",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    blessScript: "Blessings",
    blessTitle: "Best wishes",
    blessLede: "Leave a warm wish for Pranay and Supriya.",
    yourName: "Your name",
    yourBlessing: "Your blessing",
    namePh: "Your name",
    wishPh: "Write your blessing…",
    sendWish: "Send blessing",
    wishNote: "Blessings are shared with everyone on the live invitation.",
    wishSending: "Sending your blessing…",
    wishError: "Could not save right now. Please try again.",
    emptyWish: "Be the first to bless Pranay & Supriya.",
    closeBless: "Shubhamangal Savadhan",
    closeLead: "Your presence and blessings are the most precious gifts.",
    withLove: "With love from",
    families: "The Toraskar Family · The Phanse Family",
    closeDate: "13 December 2026 · Mumbai",
    footer: "Made with love for Pranay & Supriya · 2026",
    backTop: "Back to top",
    menuOpen: "Open menu",
    menuClose: "Close menu"
  },
  mr: {
    groomName: "प्रणय",
    brideName: "सुप्रिया",
    weds: "विवाह",
    navHome: "मुख्य",
    navInvite: "निमंत्रण",
    navEvents: "कार्यक्रम",
    navCount: "वेळ",
    navBless: "आशीर्वाद",
    ganesha: "✦   ॥ श्री गणेशाय नमः ॥   ✦",
    ganeshaPlain: "॥ श्री गणेशाय नमः ॥",
    together: "कुटुंबियांसमवेत",
    openLetter: "पत्र उघडा",
    seeEvents: "सोहळे पहा",
    scroll: "खाली पहा",
    scratchHint: "तारीख उघडण्यासाठी खरडवा",
    dateHidden: "पत्रावरील तारीख खरडवा",
    muhuratLabel: "विवाह मुहूर्त",
    muhuratTime: "सायं. ५:५५",
    closeDateHidden: "मुंबई",
    letterHint: "सीलवर टॅप करा",
    inviteScript: "शुभविवाह",
    inviteTitle: "आपण आमंत्रित आहात",
    inviteLede: "मनापासून आनंदाने, आम्ही आपल्या उपस्थितीची विनंती करतो",
    cardKicker: "विवाह सोहळ्यात<br>सहकुटुंब उपस्थित राहण्याची विनंती",
    sonOf: "सुपुत्र",
    daughterOf: "सुकन्या",
    groomParents: "सौ. जागृती आणि श्री. जयवंत वासुदेव तोरस्कर",
    brideParents: "सौ. सुजाता आणि श्री. सुरेश धोंडू फणसे",
    cardWhere: "कंट्री क्लब हॉलिडेझ · अंधेरी पश्चिम",
    cardNote: "आपण सहकुटुंब, सहपरिवार उपस्थित राहून वधू-वरांस शुभाशीर्वाद द्यावेत, ही नम्र विनंती.",
    joinScript: "आमंत्रण",
    eventsTitle: "कार्यक्रम तपशील",
    eventsLede: "थोडी हळद, आयुष्यभर साथ, आणि आशीर्वादांनी नटलेली संध्याकाळ.",
    preWedding: "विवाहपूर्व",
    haldiTitle: "हळदी समारंभ",
    haldiSub: "विवाहपूर्व सोहळा",
    haldiDate: "शुक्रवार, ११ डिसेंबर २०२६",
    haldiTime: "सायं. ७:०० ते १०:००",
    haldiVenue: "सचिनाम हाइट्स<br>जवजी दादाजी रोड, ग्रँट रोड (पश्चिम)<br>भाटिया हॉस्पिटल समोर<br>मुंबई ४००००७",
    haldiQuote: "“आमच्या कायमच्या प्रवासाला सुवर्ण सुरुवात.”",
    addCal: "कॅलेंडरमध्ये जोडा",
    mumbai: "मुंबई",
    weddingTitle: "शुभविवाह",
    weddingSub: "विवाह मुहूर्त",
    weddingDate: "रविवार, १३ डिसेंबर २०२६",
    venueFull: "कंट्री क्लब हॉलिडेझ प्रा. लि.<br>वीरा देसाई रोड<br>किया पार्क बिल्डिंगच्या समोर<br>प्रथमेश कॉम्प्लेक्स, अंधेरी पश्चिम ४०००५३",
    weddingQuote: "“सात फेरे, सात वचने, एक सुंदर प्रवास.”",
    directions: "मार्ग पहा",
    dinnerTitle: "स्नेहभोजन",
    dinnerSub: "स्वागत समारंभ",
    dinnerTime: "सायं. ७:०० ते १०:००",
    venueShort: "कंट्री क्लब हॉलिडेझ प्रा. लि., अंधेरी पश्चिम ४०००५३",
    dinnerQuote: "“तुमच्या उपस्थितीने आमचा सोहळा परिपूर्ण होईल.”",
    countScript: "प्रतीक्षा",
    countTitle: "कायमचे एकत्र होईपर्यंत",
    countLede: "शुभविवाहाच्या दिवसापर्यंत.",
    countLabel: "विवाहापर्यंतची उलटी गिनती",
    days: "दिवस",
    hours: "तास",
    minutes: "मिनिटे",
    seconds: "सेकंद",
    blessScript: "आशीर्वाद",
    blessTitle: "शुभेच्छा",
    blessLede: "प्रणय आणि सुप्रिया यांच्यासाठी मनःपूर्वक शुभेच्छा लिहा.",
    yourName: "तुमचे नाव",
    yourBlessing: "तुमचा आशीर्वाद",
    namePh: "तुमचे नाव",
    wishPh: "आशीर्वाद लिहा…",
    sendWish: "आशीर्वाद पाठवा",
    wishNote: "आशीर्वाद सर्व पाहुण्यांना दिसतात.",
    wishSending: "आशीर्वाद पाठवत आहोत…",
    wishError: "सध्या जतन करता आले नाही. पुन्हा प्रयत्न करा.",
    emptyWish: "प्रणय आणि सुप्रिया यांना आशीर्वाद देणारे पहिले व्हा.",
    closeBless: "॥ शुभमंगल सावधान ॥",
    closeLead: "तुमची उपस्थिती आणि आशीर्वाद हीच सर्वात मौल्यवान भेट आहे.",
    withLove: "प्रेमपूर्वक",
    families: "तोरस्कर परिवार · फणसे परिवार",
    closeDate: "१३ डिसेंबर २०२६ · मुंबई",
    footer: "प्रणय आणि सुप्रिया यांच्यासाठी प्रेमाने · २०२६",
    backTop: "वर जा",
    menuOpen: "मेनू उघडा",
    menuClose: "मेनू बंद करा"
  }
};

let lang = "en";
function t(key) {
  return (copy[lang] && copy[lang][key]) || copy.en[key] || "";
}

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function parts(target) {
  let diff = target.getTime() - Date.now();
  if (diff < 0) diff = 0;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60
  };
}

function paintClock(prefix, target) {
  const values = parts(target);
  $("#" + prefix + "-days").textContent = String(values.days);
  $("#" + prefix + "-hours").textContent = String(values.hours).padStart(2, "0");
  $("#" + prefix + "-minutes").textContent = String(values.minutes).padStart(2, "0");
  $("#" + prefix + "-seconds").textContent = String(values.seconds).padStart(2, "0");
}

function tick() {
  paintClock("vivah", VIVAH);
}
tick();
setInterval(tick, 1000);

function applyLang(next) {
  lang = copy[next] ? next : "en";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = t(el.dataset.i18n);
    if (value.includes("<br>")) el.innerHTML = value;
    else el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.dataset.i18nAria;
    if (key === "menuOpen") {
      const open = navLinks.classList.contains("open");
      el.setAttribute("aria-label", t(open ? "menuClose" : "menuOpen"));
      return;
    }
    el.setAttribute("aria-label", t(key));
  });
  document.querySelectorAll(".lang button").forEach(btn => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
  localStorage.setItem(LANG_KEY, lang);
  scratchStarted = false;
  if (typeof paintFoil === "function") paintFoil();
}

document.querySelectorAll(".lang button").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

const navToggle = $(".nav-toggle");
const navLinks = $("#nav-links");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute("aria-label", t(open ? "menuClose" : "menuOpen"));
});
navLinks.addEventListener("click", event => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", t("menuOpen"));
  }
});

const mail = $("#mail");
const timers = [];
function later(fn, ms) {
  const id = window.setTimeout(fn, ms);
  timers.push(id);
  return id;
}
function clearTimers() {
  while (timers.length) window.clearTimeout(timers.pop());
}
function openLetter() {
  if (mail.classList.contains("is-open") || document.body.classList.contains("is-revealed")) return;
  clearTimers();
  mail.classList.add("is-open");
  document.body.classList.add("is-opening");
  $("#open-letter").setAttribute("aria-expanded", "true");

  later(() => document.body.classList.add("is-card-flight"), 360);
  later(() => document.body.classList.add("is-reveal-fade"), 1680);
  later(() => {
    document.body.classList.remove("is-sealed", "is-opening", "is-card-flight", "is-reveal-fade");
    document.body.classList.add("is-revealed");
    setupScratch();
    const home = $("#home");
    if (home) home.scrollIntoView({ behavior: "auto", block: "start" });
  }, 2080);
}
$("#open-letter").addEventListener("click", openLetter);

let scratchReady = false;
let scratchStarted = false;
function paintFoil() {}
function setupScratch() {
  const box = $("#date-scratch");
  const canvas = $("#date-foil");
  if (!box || !canvas || box.classList.contains("is-done")) return;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  function paint(w, h) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "#f6e7c4");
    g.addColorStop(0.5, "#d4b36a");
    g.addColorStop(1, "#f3e2c0");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(92, 33, 64, .16)";
    ctx.lineWidth = 2;
    for (let x = -h; x < w + h; x += 12) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + h * 0.55, h);
      ctx.stroke();
    }
    ctx.fillStyle = "#5c2140";
    ctx.font = lang === "mr"
      ? "600 13px \"Noto Serif Devanagari\", serif"
      : "600 11px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const label = lang === "en" ? t("scratchHint").toUpperCase() : t("scratchHint");
    function wrapLine(text, maxWidth) {
      if (ctx.measureText(text).width <= maxWidth) return [text];
      const chars = [...text];
      const lines = [];
      let line = "";
      chars.forEach(ch => {
        const next = line + ch;
        if (ctx.measureText(next).width > maxWidth && line) {
          lines.push(line);
          line = ch;
        } else {
          line = next;
        }
      });
      if (line) lines.push(line);
      return lines.slice(0, 2);
    }
    const lines = lang === "en"
      ? (() => {
          const words = label.split(" ");
          return words.length > 3
            ? [words.slice(0, 3).join(" "), words.slice(3).join(" ")]
            : [label];
        })()
      : wrapLine(label, w - 28);
    const startY = h / 2 - ((lines.length - 1) * 9);
    lines.forEach((line, index) => ctx.fillText(line, w / 2, startY + index * 18));
  }

  function size() {
    const w = box.clientWidth;
    const h = box.clientHeight;
    if (w < 10 || h < 10) return false;
    paint(w, h);
    return true;
  }

  paintFoil = () => {
    if (scratchStarted || box.classList.contains("is-done")) return;
    size();
  };

  if (scratchReady) {
    if (!scratchStarted) size();
    return;
  }
  if (!size()) return;
  scratchReady = true;

  let drawing = false;
  function point(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }
  function erase(event) {
    const p = point(event);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
    ctx.fill();
  }
  function clearedEnough() {
    const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let clear = 0;
    let total = 0;
    const step = 8;
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        total += 1;
        if (data[(y * width + x) * 4 + 3] < 24) clear += 1;
      }
    }
    return total > 0 && clear / total > 0.42;
  }
  function finish() {
    if (box.classList.contains("is-done")) return;
    box.classList.add("is-done", "is-surprise");
    document.body.classList.add("date-known");
    drawing = false;
    window.setTimeout(() => box.classList.remove("is-surprise"), 1400);
  }
  canvas.addEventListener("pointerdown", event => {
    if (box.classList.contains("is-done")) return;
    scratchStarted = true;
    drawing = true;
    canvas.setPointerCapture(event.pointerId);
    erase(event);
    event.preventDefault();
  });
  canvas.addEventListener("pointermove", event => {
    if (!drawing) return;
    erase(event);
    if (clearedEnough()) finish();
  });
  function stop() {
    if (!drawing) return;
    drawing = false;
    if (clearedEnough()) finish();
  }
  canvas.addEventListener("pointerup", stop);
  canvas.addEventListener("pointercancel", stop);
}

const spyLinks = $$(".nav-links a");
const spySections = spyLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    spyLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { rootMargin: "-40% 0px -50% 0px" });
spySections.forEach(section => spy.observe(section));

const wall = $("#wish-wall");
const wishStatus = $("#wish-status");
const wideQuery = window.matchMedia("(min-width: 641px)");
let wishCache = [];

function setWishNote(key) {
  if (!wishStatus) return;
  wishStatus.textContent = t(key);
}

async function loadWishes() {
  try {
    const res = await fetch(WISH_API, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error("bad status");
    const list = await res.json();
    wishCache = Array.isArray(list) ? list : [];
    return wishCache;
  } catch {
    return wishCache;
  }
}

async function saveWish(entry) {
  const res = await fetch(WISH_API, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(entry)
  });
  if (!res.ok) throw new Error("save failed");
  const list = await res.json();
  wishCache = Array.isArray(list) ? list : wishCache;
  return wishCache;
}

function renderWishes(popLast) {
  const list = wishCache.slice(-40).reverse();
  wall.innerHTML = "";
  wall.style.minHeight = "";
  wall.classList.toggle("has-notes", list.length > 0);
  if (!list.length) {
    const empty = document.createElement("p");
    empty.className = "empty-wishes";
    empty.textContent = t("emptyWish");
    wall.append(empty);
    return;
  }
  list.forEach((wish, index) => {
    const note = document.createElement("article");
    note.className = "note" + (popLast && index === 0 ? " pop" : "");
    note.style.setProperty("--tilt", ((index % 5) - 2) * 0.7 + "deg");
    const name = document.createElement("strong");
    name.textContent = wish.name;
    const text = document.createElement("p");
    text.textContent = wish.text;
    note.append(name, text);
    wall.append(note);
    enableDrag(note);
  });
}

function enableDrag(note) {
  if (!wideQuery.matches) return;
  let dragging = false;
  let dx = 0;
  let dy = 0;

  function freezeNotes() {
    const bounds = wall.getBoundingClientRect();
    const spots = $$(".note", wall).map(item => {
      const rect = item.getBoundingClientRect();
      return { item, rect };
    });
    wall.style.minHeight = wall.offsetHeight + "px";
    spots.forEach(({ item, rect }) => {
      item.style.position = "absolute";
      item.style.width = rect.width + "px";
      item.style.left = (rect.left - bounds.left) + "px";
      item.style.top = (rect.top - bounds.top) + "px";
      item.style.margin = "0";
    });
  }

  note.addEventListener("pointerdown", event => {
    if (!wideQuery.matches || event.button !== 0) return;
    freezeNotes();
    dragging = true;
    note.setPointerCapture(event.pointerId);
    const rect = note.getBoundingClientRect();
    dx = event.clientX - rect.left;
    dy = event.clientY - rect.top;
    note.style.zIndex = "3";
    note.style.transform = "none";
  });
  note.addEventListener("pointermove", event => {
    if (!dragging) return;
    const bounds = wall.getBoundingClientRect();
    const x = event.clientX - bounds.left - dx;
    const y = event.clientY - bounds.top - dy;
    const maxX = Math.max(0, bounds.width - note.offsetWidth);
    const maxY = Math.max(0, bounds.height - note.offsetHeight);
    note.style.left = Math.min(Math.max(0, x), maxX) + "px";
    note.style.top = Math.min(Math.max(0, y), maxY) + "px";
  });
  function end() { dragging = false; }
  note.addEventListener("pointerup", end);
  note.addEventListener("pointercancel", end);
}

const form = $("#blessing-form");
const nameInput = $("#guest-name");
const wishInput = $("#guest-wish");
const wishBtn = $("#wish-btn");

function syncWishButton() {
  wishBtn.disabled = !nameInput.value.trim() || !wishInput.value.trim() || wishBtn.dataset.busy === "1";
}
nameInput.addEventListener("input", syncWishButton);
wishInput.addEventListener("input", syncWishButton);

form.addEventListener("submit", async event => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const text = wishInput.value.trim();
  if (!name || !text) return;
  wishBtn.dataset.busy = "1";
  syncWishButton();
  setWishNote("wishSending");
  try {
    await saveWish({ name, text });
    form.reset();
    renderWishes(true);
    setWishNote("wishNote");
  } catch {
    setWishNote("wishError");
  } finally {
    wishBtn.dataset.busy = "0";
    syncWishButton();
  }
});

applyLang(localStorage.getItem(LANG_KEY) || "en");
setupScratch();
wideQuery.addEventListener("change", () => renderWishes(false));
loadWishes().then(() => renderWishes(false));
setInterval(() => {
  loadWishes().then(() => renderWishes(false));
}, 30000);
