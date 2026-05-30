/* ============================================================
   GAMIZ — shared interactions
   ============================================================ */
(function(){
const NAV=[
  {k:'admin',label:'Administrator',href:'#'},
  {k:'home',label:'Beranda',href:'index.html'},
  {k:'promo',label:'Promo',href:'#'},
  {k:'blog',label:'Blog',href:'#'},
  {k:'order',label:'Cek Pesanan',href:'Payment.html'},
  {k:'help',label:'Bantuan',href:'#'},
];

function gemSVG(size,grad){
  grad=grad||'gA';
  return `<svg class="gem" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
   <defs><linearGradient id="${grad}" x1="0" y1="0" x2="1" y2="1">
   <stop offset="0" stop-color="#A78BFA"/><stop offset=".5" stop-color="#7C3AED"/><stop offset="1" stop-color="#22D3EE"/></linearGradient></defs>
   <path d="M24 3 44 18 24 45 4 18Z" fill="url(#${grad})"/>
   <path d="M4 18h40L24 27Z" fill="#fff" opacity=".22"/>
   <path d="M24 3 16 18l8 9 8-9Z" fill="#fff" opacity=".30"/>
   <path d="M24 27 4 18l20 27Z" fill="#000" opacity=".10"/></svg>`;
}
window.GZ_gem=gemSVG;

function coinSVG(size){
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
   <circle cx="12" cy="12" r="10" fill="#EAB308"/>
   <circle cx="12" cy="12" r="7.5" fill="#FACC15" stroke="#FDE68A" stroke-width="1.2"/>
   <path d="M12 7.5v9M9.5 10.5h3.2a1.7 1.7 0 0 1 0 3.4H9.8" stroke="#A16207" stroke-width="1.6" stroke-linecap="round"/>
   <ellipse cx="9.5" cy="9" rx="2" ry="1.1" fill="#fff" opacity=".4"/></svg>`;
}
window.GZ_coinSVG=coinSVG;

function I(p){return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;}

GZ_header=function(active){
  const links=NAV.map(n=>`<a href="${n.href}" class="${n.k===active?'active':''}">${n.label}</a>`).join('');
  return `<header class="gz-header"><div class="wrap"><div class="bar">
    <a class="brand" href="index.html"><img src="assets/emblem.png" alt="GAMIZ">
      <span class="wm"><b>GAMIZ</b><span>GAMIFICATION UI KIT</span></span></a>
    <nav class="gz-nav">${links}</nav>
    <div class="gz-search">${I('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>')}
      <input placeholder="Cari game..."></div>
    <div class="hud">
      <div class="hud-chip hud-coin" title="Koin">
        <span class="ic">${GZ_coinSVG(16)}</span><b data-count="12480">0</b></div>
      <div class="hud-chip hud-gem" title="Gem">
        <span class="ic">${GZ_gem(15)}</span><b data-count="320">0</b></div>
      <div class="hud-chip hud-streak" title="Daily streak">
        <span class="ic">🔥</span><b>12</b></div>
      <div class="xp-chip" title="Level 7 · 740/1000 XP">
        <div class="xp-ring">
          <svg width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" fill="none" stroke="#E4DAFB" stroke-width="4"/>
          <circle class="xpc" cx="18" cy="18" r="15" fill="none" stroke="#FACC15" stroke-width="4" stroke-linecap="round"
          stroke-dasharray="94" stroke-dashoffset="94" transform="rotate(-90 18 18)"/></svg>
          <span class="lvl">7</span></div>
        <div class="xp-meta"><b>740 XP</b><div class="xp-bar"><i></i></div></div>
      </div>
    </div>
    <a href="Login.html" class="btn btn-primary" style="flex-shrink:0">${I('<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/>')} Login</a>
  </div></div></header>`;
};

GZ_footer=function(){
  return `<footer class="gz-footer"><div class="wrap"><div class="top">
    <div>
      <a class="brand" href="index.html"><img src="assets/emblem.png" alt="GAMIZ">
        <span class="wm"><b>GAMIZ</b><span>GAMIFICATION UI KIT</span></span></a>
      <p class="desc">GAMIZ merupakan website top up termurah dan terlengkap untuk semua game favoritmu dan digital product lainnya.</p>
      <p class="pt">PT Digital Point Gemindo</p>
      <div class="trust">
        <div class="b">${I('<path d="M12 2 4 5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V5z"/>')}<span>TERVERIFIKASI<br>RESMI</span></div>
        <div class="b">${I('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>')}<span>PEMBAYARAN<br>AMAN</span></div>
      </div>
    </div>
    <div><h5>Quick Links</h5><ul>
      <li><a href="index.html">Semua Games</a></li><li><a href="#">Blog</a></li>
      <li><a href="#">Promo Terbaru</a></li><li><a href="#">FAQ</a></li></ul></div>
    <div><h5>Bantuan</h5><ul>
      <li><a href="#">Cara Cek Player ID</a></li><li><a href="#">Kendala Pembayaran</a></li>
      <li><a href="#">Kebijakan Privasi</a></li><li><a href="#">Syarat &amp; Ketentuan</a></li></ul></div>
    <div><h5>Kontak</h5><div class="ko">
      <div>${I('<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.4 8.4 0 0 1-4-1L3 21l1.9-4.9A8.5 8.5 0 1 1 21 11.5Z"/>')} WhatsApp: +62 898-622-3800</div>
      <div>${I('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>')} hello@gamiz.id</div>
      <div>${I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>')} 24/7 Customer Support</div>
      <div class="socials" style="margin-top:6px">
        <a href="#" aria-label="tiktok">${I('<path d="M9 12a4 4 0 1 0 4 4V4c.5 2 2 3.5 4 4"/>')}</a>
        <a href="#" aria-label="ig">${I('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>')}</a>
        <a href="#" aria-label="fb">${I('<path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>')}</a>
        <a href="#" aria-label="yt">${I('<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/>')}</a>
      </div>
    </div></div>
  </div><div class="copy">Copyright © 2026 GAMIZ by PT DIGITAL POINT GEMINDO. All Rights Reserved</div></div></footer>`;
};

/* ---------- theme manager ---------- */
window.GZ_getTheme=function(){try{return localStorage.getItem('gz_theme')||'arcade';}catch(e){return 'arcade';}};
window.GZ_setTheme=function(t){
  document.body.classList.remove('theme-holo','theme-arcade','theme-candy');
  document.body.classList.add('theme-'+t);
  try{localStorage.setItem('gz_theme',t);}catch(e){}
};
window.GZ_setAccent=function(c){document.documentElement.style.setProperty('--accent',c);try{localStorage.setItem('gz_accent',c);}catch(e){}};
window.GZ_setParticles=function(on){try{localStorage.setItem('gz_particles',on?'on':'off');}catch(e){}
  const c=document.getElementById('gz-bg');if(c)c.style.display=on?'block':'none';};

/* ---------- mount ---------- */
function mount(){
  GZ_setTheme(GZ_getTheme());
  try{var a=localStorage.getItem('gz_accent');if(a)document.documentElement.style.setProperty('--accent',a);}catch(e){}
  initParticles();
  document.querySelectorAll('[data-gz-header]').forEach(e=>e.outerHTML=GZ_header(e.getAttribute('data-gz-header')));
  document.querySelectorAll('[data-gz-footer]').forEach(e=>e.outerHTML=GZ_footer());
  // xp animation
  requestAnimationFrame(()=>setTimeout(()=>{
    document.querySelectorAll('.xp-bar i').forEach(i=>i.style.width='74%');
    document.querySelectorAll('.xpc').forEach(c=>{c.style.transition='stroke-dashoffset 1.3s cubic-bezier(.22,1,.36,1)';c.style.strokeDashoffset=94*0.26;});
  },250));
  initReveal(); initCount();
}

/* ---------- particle background ---------- */
function initParticles(){
  if(document.getElementById('gz-bg'))return;
  const cv=document.createElement('canvas');cv.id='gz-bg';document.body.prepend(cv);
  try{if(localStorage.getItem('gz_particles')==='off')cv.style.display='none';}catch(e){}
  const ctx=cv.getContext('2d');let W,H,dots=[];
  const cols=['rgba(124,58,237,','rgba(34,211,238,','rgba(250,204,21,'];
  function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;}
  size();addEventListener('resize',size);
  const N=Math.min(42,Math.round(innerWidth/34));
  for(let i=0;i<N;i++)dots.push({x:Math.random()*W,y:Math.random()*H,
    r:1.2+Math.random()*3.4,vy:-(.1+Math.random()*.35),vx:(Math.random()-.5)*.18,
    a:.08+Math.random()*.22,c:cols[i%3],ph:Math.random()*6.28,shape:Math.random()<.32?'gem':'dot'});
  function draw(){
    ctx.clearRect(0,0,W,H);
    dots.forEach(d=>{d.y+=d.vy;d.x+=d.vx;d.ph+=.02;
      if(d.y<-10){d.y=H+10;d.x=Math.random()*W;}
      const tw=d.a*(.6+.4*Math.sin(d.ph));
      if(d.shape==='gem'){
        ctx.save();ctx.translate(d.x,d.y);ctx.rotate(d.ph*.2);ctx.beginPath();
        const s=d.r*1.6;ctx.moveTo(0,-s);ctx.lineTo(s*.8,-s*.2);ctx.lineTo(0,s);ctx.lineTo(-s*.8,-s*.2);ctx.closePath();
        ctx.fillStyle=d.c+tw+')';ctx.fill();ctx.restore();
      }else{ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,6.3);ctx.fillStyle=d.c+tw+')';ctx.fill();}
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ---------- reveal on scroll ---------- */
function initReveal(){
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(Math.min(i,6)*40)+'ms';io.observe(el);});
}

/* ---------- count-up ---------- */
function animateCount(el){
  const target=parseFloat(el.dataset.count); const dec=el.dataset.dec?+el.dataset.dec:0;
  const pre=el.dataset.pre||''; const suf=el.dataset.suf||''; const dur=900; const t0=performance.now();
  function step(t){const p=Math.min(1,(t-t0)/dur); const e=1-Math.pow(1-p,3);
    let v=(target*e); v=dec?v.toFixed(dec):Math.round(v).toLocaleString('id-ID');
    el.textContent=pre+v+suf; if(p<1)requestAnimationFrame(step);}
  requestAnimationFrame(step);
}
function initCount(){
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){animateCount(e.target);io.unobserve(e.target);}}),{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(el=>io.observe(el));
}
window.GZ_count=animateCount;

/* ---------- countdown ---------- */
window.GZ_countdown=function(el,seconds,style){
  function tick(){
    let s=seconds; const h=String(Math.floor(s/3600)).padStart(2,'0');
    const m=String(Math.floor(s%3600/60)).padStart(2,'0'); const ss=String(s%60).padStart(2,'0');
    if(style==='segments'){el.innerHTML=`<b>${h}</b><i>:</i><b>${m}</b><i>:</i><b>${ss}</b>`;}
    else el.textContent=`${h}:${m}:${ss}`;
    seconds=seconds>0?seconds-1:0;
  }
  tick(); return setInterval(tick,1000);
};

/* ---------- gem pop feedback ---------- */
window.GZ_gemPop=function(x,y,txt){
  const d=document.createElement('div'); d.className='gem-pop';
  d.innerHTML=GZ_gem(22)+'<span>'+(txt||'+50 XP')+'</span>';
  d.style.left=(x-30)+'px'; d.style.top=(y-20)+'px';
  document.body.appendChild(d); setTimeout(()=>d.remove(),1150);
};

/* ---------- confetti ---------- */
let fxCanvas,fxCtx,parts=[],raf;
function ensureCanvas(){
  if(fxCanvas)return; fxCanvas=document.createElement('canvas'); fxCanvas.id='gz-fx';
  document.body.appendChild(fxCanvas); fxCtx=fxCanvas.getContext('2d');
  function size(){fxCanvas.width=innerWidth;fxCanvas.height=innerHeight;} size(); addEventListener('resize',size);
}
window.GZ_confetti=function(x,y){
  ensureCanvas();
  const cols=['#7C3AED','#FACC15','#22D3EE','#22C55E','#EF4444','#9B6BF0'];
  x=x??innerWidth/2; y=y??innerHeight/2;
  for(let i=0;i<90;i++){const a=Math.random()*Math.PI*2,sp=4+Math.random()*9;
    parts.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-4,g:.22+Math.random()*.12,
      s:5+Math.random()*7,r:Math.random()*6,vr:(Math.random()-.5)*.5,
      c:cols[i%cols.length],life:60+Math.random()*30,age:0,shape:Math.random()<.5?'rect':'circ'});}
  if(!raf)loop();
};
function loop(){
  fxCtx.clearRect(0,0,fxCanvas.width,fxCanvas.height);
  parts=parts.filter(p=>p.age<p.life);
  parts.forEach(p=>{p.age++;p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.vx*=.99;
    const al=Math.max(0,1-p.age/p.life); fxCtx.save();fxCtx.globalAlpha=al;
    fxCtx.translate(p.x,p.y);fxCtx.rotate(p.r);fxCtx.fillStyle=p.c;
    if(p.shape==='rect')fxCtx.fillRect(-p.s/2,-p.s/2,p.s,p.s*1.6);
    else{fxCtx.beginPath();fxCtx.arc(0,0,p.s/2,0,7);fxCtx.fill();}
    fxCtx.restore();});
  if(parts.length){raf=requestAnimationFrame(loop);}else{raf=null;fxCtx.clearRect(0,0,fxCanvas.width,fxCanvas.height);}
}

document.addEventListener('DOMContentLoaded',mount);
})();


(function () {
    'use strict';

    var storage_key = 'gz_theme';
    var themes = ['holo', 'arcade', 'candy'];
    var default_theme = 'arcade';

    function get_theme() {
        try {
            var saved = localStorage.getItem(storage_key);
            return themes.indexOf(saved) !== -1 ? saved : default_theme;
        } catch (e) {
            return default_theme;
        }
    }

    function set_theme(theme) {
        if (themes.indexOf(theme) === -1) {
            theme = default_theme;
        }

        document.body.classList.remove('theme-holo', 'theme-arcade', 'theme-candy');
        document.body.classList.add('theme-' + theme);

        try {
            localStorage.setItem(storage_key, theme);
        } catch (e) {}

        var buttons = document.querySelectorAll('.gz-tweak-option');

        buttons.forEach(function (button) {
            var is_active = button.getAttribute('data-theme') === theme;
            button.classList.toggle('is-active', is_active);
            button.setAttribute('aria-pressed', is_active ? 'true' : 'false');
        });
    }

    function inject_style() {
        if (document.getElementById('gz-tweaks-style')) {
            return;
        }

        var style = document.createElement('style');
        style.id = 'gz-tweaks-style';
        style.innerHTML = `
            .gz-tweaks-panel {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 99999;
                width: 280px;
                padding: 16px;
                border-radius: 14px;
                background:
                    radial-gradient(circle at 20% 0%, rgba(124, 58, 237, .10), transparent 32%),
                    linear-gradient(135deg, rgba(255,255,255,.94), rgba(248,244,255,.92));
                border: 1px solid rgba(124, 58, 237, .14);
                box-shadow:
                    0 20px 45px rgba(31, 18, 61, .14),
                    inset 0 1px 0 rgba(255,255,255,.75);
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                font-family: "Space Grotesk", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                color: #31264b;
                animation: gzTweaksIn .28s ease both;
            }

            @keyframes gzTweaksIn {
                from {
                    opacity: 0;
                    transform: translateY(-8px) scale(.98);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            .gz-tweaks-head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                margin-bottom: 14px;
            }

            .gz-tweaks-title {
                margin: 0;
                font-size: 13px;
                font-weight: 800;
                letter-spacing: .04em;
                color: #2b2142;
            }

            .gz-tweaks-close {
                width: 24px;
                height: 24px;
                border: 0;
                border-radius: 50%;
                background: transparent;
                color: #8b8199;
                font-size: 20px;
                line-height: 1;
                cursor: pointer;
                display: grid;
                place-items: center;
                transition: .2s ease;
            }

            .gz-tweaks-close:hover {
                background: rgba(124, 58, 237, .10);
                color: #5b21b6;
            }

            .gz-tweaks-label {
                display: block;
                margin-bottom: 10px;
                font-size: 10px;
                font-weight: 800;
                letter-spacing: .14em;
                color: #9a8fa8;
                text-transform: uppercase;
            }

            .gz-tweaks-row {
                margin-bottom: 10px;
            }

            .gz-tweaks-name {
                display: block;
                margin-bottom: 8px;
                font-size: 12px;
                font-weight: 800;
                color: #6b6078;
            }

            .gz-tweak-segment {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0;
                padding: 3px;
                border-radius: 8px;
                background: rgba(49, 38, 75, .08);
            }

            .gz-tweak-option {
                height: 26px;
                border: 0;
                border-radius: 7px;
                background: transparent;
                color: #4b405b;
                font: inherit;
                font-size: 11px;
                font-weight: 800;
                letter-spacing: .01em;
                cursor: pointer;
                transition: .2s ease;
            }

            .gz-tweak-option:hover {
                color: #7C3AED;
            }

            .gz-tweak-option.is-active {
                background: #fff;
                color: #2b2142;
                box-shadow:
                    0 6px 14px rgba(31, 18, 61, .10),
                    inset 0 0 0 1px rgba(124, 58, 237, .08);
            }

            .gz-tweaks-desc {
                margin: 0;
                font-size: 11px;
                line-height: 1.45;
                color: #8f83a0;
            }

            @media (max-width: 560px) {
                .gz-tweaks-panel {
                    top: 14px;
                    right: 14px;
                    left: 14px;
                    width: auto;
                }
            }
        `;

        document.head.appendChild(style);
    }

    function render_panel() {
        if (document.getElementById('gz-tweaks-panel')) {
            return;
        }

        var root = document.getElementById('gz-tweaks-root');

        if (!root) {
            root = document.createElement('div');
            root.id = 'gz-tweaks-root';
            document.body.appendChild(root);
        }

        root.innerHTML = `
            <div class="gz-tweaks-panel" id="gz-tweaks-panel">
                <div class="gz-tweaks-head">
                    <h3 class="gz-tweaks-title">GAMIZ Tweaks</h3>
                    <button type="button" class="gz-tweaks-close" aria-label="Close">&times;</button>
                </div>

                <span class="gz-tweaks-label">Style Skin</span>

                <div class="gz-tweaks-row">
                    <span class="gz-tweaks-name">Theme</span>

                    <div class="gz-tweak-segment">
                        <button type="button" class="gz-tweak-option" data-theme="holo">holo</button>
                        <button type="button" class="gz-tweak-option" data-theme="arcade">arcade</button>
                        <button type="button" class="gz-tweak-option" data-theme="candy">candy</button>
                    </div>
                </div>

                <p class="gz-tweaks-desc">
                    Holo = glassy & holographic · Arcade = bold sticker · Candy = soft pastel
                </p>
            </div>
        `;

        root.querySelectorAll('.gz-tweak-option').forEach(function (button) {
            button.addEventListener('click', function () {
                set_theme(this.getAttribute('data-theme'));
            });
        });

        root.querySelector('.gz-tweaks-close').addEventListener('click', function () {
            var panel = document.getElementById('gz-tweaks-panel');

            if (panel) {
                panel.remove();
            }
        });
    }

    function init() {
        inject_style();
        render_panel();
        set_theme(get_theme());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
