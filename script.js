const weddingDate = new Date("2026-12-13T17:55:00+05:30");
const $ = id => document.getElementById(id);
function tick(){
  let diff = weddingDate.getTime() - Date.now();
  if(diff < 0) diff = 0;
  const d=Math.floor(diff/86400000), h=Math.floor(diff/3600000)%24, m=Math.floor(diff/60000)%60, s=Math.floor(diff/1000)%60;
  $("days").textContent=d; $("hours").textContent=String(h).padStart(2,"0"); $("minutes").textContent=String(m).padStart(2,"0"); $("seconds").textContent=String(s).padStart(2,"0");
}
tick(); setInterval(tick,1000);
$("openInvite").addEventListener("click",()=>{$("invitation").scrollIntoView({behavior:"smooth"});});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
$("calendarBtn").addEventListener("click",()=>{
 const start="20261213T122500Z", end="20261213T150000Z";
 const url=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Pranay & Supriya – Shubh Vivah")}&dates=${start}/${end}&details=${encodeURIComponent("Wedding muhurat 5:55 PM IST. Kanti Club, Veera Desai Road, Andheri West, Mumbai 400053.")}&location=${encodeURIComponent("Kanti Club, Veera Desai Road, Andheri West, Mumbai 400053")}`;
 window.open(url,"_blank","noopener");
});
function renderWishes(){
 const list=JSON.parse(localStorage.getItem("ps-wishes")||"[]");
 $("wishes").innerHTML="";
 list.slice(-8).reverse().forEach(w=>{const el=document.createElement("div");el.className="wish";const n=document.createElement("strong");n.textContent=w.name;const t=document.createElement("span");t.textContent=w.text;el.append(n,t);$("wishes").append(el)});
}
$("blessingForm").addEventListener("submit",e=>{
 e.preventDefault();const name=$("guestName").value.trim(), text=$("guestWish").value.trim();if(!name||!text)return;
 const list=JSON.parse(localStorage.getItem("ps-wishes")||"[]");list.push({name,text});localStorage.setItem("ps-wishes",JSON.stringify(list));e.target.reset();renderWishes();
});
renderWishes();