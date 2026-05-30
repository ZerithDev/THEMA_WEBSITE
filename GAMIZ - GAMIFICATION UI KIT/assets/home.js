/* GAMIZ — Home page renders */
(function(){
const D=window.GZ_DATA;
const ribbons={Mythic:'ribbon-event',Hot:'ribbon-hot',New:'ribbon-new'};
const tile=(it,i)=>{
  const [name,pub,ini,grad,disc]=it;
  const lv=12+((i*7)%88);
  const rate=(4.5+((i*3)%5)/10).toFixed(1);
  const rb=i%5===0?'New':(i%4===0?'Mythic':(i%3===0?'Hot':null));
  return `<a class="tile" href="Topup.html">
    ${disc?`<span class="disc">-${disc}%</span>`:''}
    ${rb?`<span class="ribbon ${ribbons[rb]}">${rb.toUpperCase()}</span>`:''}
    <div class="thumb" style="background:${grad}">
      <span class="thumb-shine"></span>
      <span class="gi">${ini}</span>
      <span class="thumb-lv">LV ${lv}</span>
      <span class="thumb-gem">${GZ_gem(22)}</span>
    </div>
    <div class="tile-body">
      <h4>${name}</h4>
      <div class="tile-meta"><span class="pub">${pub}</span><span class="tile-rate">★ ${rate}</span></div>
    </div>
  </a>`;
};
function grid(id,arr){const el=document.getElementById(id);if(el)el.innerHTML=arr.map(tile).join('');}

document.addEventListener('DOMContentLoaded',()=>{
  grid('grid-trending',D.trending);
  grid('grid-games',D.games);
  grid('grid-voucher',D.voucher);
  grid('grid-pulsa',D.pulsa);

  // trending list (2-col)
  const tl=[
    ['Mythic Clash','Gemstone','MC','linear-gradient(135deg,#7C3AED,#22D3EE)',30],
    ['Frontline Fire','Apex Forge','FF','linear-gradient(135deg,#F97316,#EF4444)',null],
    ['Rune Tactics','Gemstone','RT','linear-gradient(135deg,#0EA5E9,#6366F1)',18],
    ['Throne of Kings','Crownplay','TK','linear-gradient(135deg,#EAB308,#7C3AED)',null],
    ['Battle Royale X','Apex Forge','BX','linear-gradient(135deg,#22C55E,#0EA5E9)',null],
    ['Astral Saga','Nova Loom','AS','linear-gradient(135deg,#A855F7,#EC4899)',null],
    ['Neon Strike','Pulse Games','NS','linear-gradient(135deg,#06B6D4,#3B82F6)',null],
    ['Comet Rail','Nova Loom','CR','linear-gradient(135deg,#8B5CF6,#22D3EE)',null],
  ];
  const tlEl=document.getElementById('trending-list');
  if(tlEl)tlEl.innerHTML=tl.map(([n,p,i,gr,d],idx)=>{
    const medal=['#FACC15','#CBD5E1','#E8A879'][idx]||null;
    const players=(120-idx*11)+'K main';
    return `
    <a class="trow" href="Topup.html">
      <span class="trank" style="${medal?`background:${medal};color:#3a2a00;box-shadow:0 4px 10px ${medal}66`:''}">${idx+1}</span>
      <div class="tav" style="background:${gr}">${i}<span class="tav-gem">${GZ_gem(15)}</span></div>
      <div class="tinfo"><b>${n}</b><span>${p} · ${players}</span></div>
      ${d?`<span class="tdisc">-${d}%</span>`:`<span class="tgo">${'\u2192'}</span>`}
    </a>`;}).join('');

  // flash sale countdown
  const fc=document.getElementById('flash-count');
  if(fc)GZ_countdown(fc,20*3600+6*60+15,'segments');

  // hero carousel
  const track=document.getElementById('hero-track');
  // inject floating gems into hero art panels
  document.querySelectorAll('.hero-art').forEach((a,k)=>{
    a.innerHTML=`<span class="hg hg-a">${GZ_gem(96)}</span><span class="hg hg-b">${GZ_gem(54)}</span><span class="hg hg-c">${GZ_gem(40)}</span><span class="hero-ring"></span>`;
  });
  const dots=document.querySelectorAll('.hero-dots b');
  let idx=1, n=3;
  function go(i){idx=(i+n)%n;track.style.transform=`translateX(${-idx*100}%)`;
    dots.forEach((d,k)=>d.classList.toggle('on',k===idx));}
  if(track){go(1);setInterval(()=>go(idx+1),5000);
    document.getElementById('hero-prev').onclick=()=>go(idx-1);
    document.getElementById('hero-next').onclick=()=>go(idx+1);
    dots.forEach((d,k)=>d.onclick=()=>go(k));}

  // tabs scroll
  document.querySelectorAll('.gz-tab').forEach(t=>t.onclick=()=>{
    document.querySelectorAll('.gz-tab').forEach(x=>x.classList.remove('on'));
    t.classList.add('on');
    const tgt=document.getElementById(t.dataset.t);
    if(tgt){const y=tgt.getBoundingClientRect().top+scrollY-90;window.scrollTo({top:y,behavior:'smooth'});}
  });

  // flash card buy → gem pop
  document.querySelectorAll('[data-buy]').forEach(b=>b.addEventListener('click',(e)=>{
    e.preventDefault();GZ_gemPop(e.clientX,e.clientY,'+'+(b.dataset.buy||'50')+' XP');
  }));
});
})();
