/* GAMIZ — Top Up page */
(function(){
const fmt=n=>'Rp '+n.toLocaleString('id-ID');
// product groups: name, base price, discount%
function mk(name,price,disc){return {name,price,disc};}
const eternal=[
  mk('Weekly Diamond Pass (Event Top Up +100)',28000,21),
  mk('5 Diamonds',1499,null),
  mk('110 Diamonds (100+10)',30103,6),
  mk('278 Diamonds (251+27)',74500,11),
  mk('568 Diamonds (503+65)',146727,7),
  mk('1136 Diamonds (1006+130)',296500,6),
  mk('2010 Diamonds (1708+302)',490500,7),
];
const instant=[
  mk('12 Diamonds (11+1)',3534,11),mk('19 Diamonds (17+2)',5554,6),mk('28 Diamonds (25+3)',8080,6),
  mk('44 Diamonds (40+4)',12121,8),mk('59 Diamonds (53+6)',15637,11),mk('85 Diamonds (77+8)',22598,6),
  mk('113 Diamonds (102+11)',31312,6),mk('170 Diamonds (154+16)',46000,5),mk('257 Diamonds (233+24)',70564,5),
  mk('296 Diamonds (267+29)',78183,12),mk('301 Diamonds (261+40)',82135,6),mk('345 Diamonds (301+44)',94256,5),
  mk('408 Diamonds (367+41)',108171,6),mk('425 Diamonds (373+52)',115972,6),mk('512 Diamonds (461+51)',139531,6),
  mk('601 Diamonds (533+68)',160827,4),mk('717 Diamonds (638+79)',192139,4),mk('875 Diamonds (774+101)',225981,4),
  mk('965 Diamonds (856+109)',256552,4),mk('1050 Diamonds (933+117)',279783,4),mk('1159 Diamonds (1028+131)',309443,4),
  mk('1230 Diamonds (1083+147)',328588,4),mk('1507 Diamonds (1335+172)',392199,4),mk('1704 Diamonds (1509+195)',453697,4),
  mk('2382 Diamonds (2033+349)',605755,12),mk('2578 Diamonds (2211+367)',655156,4),mk('2885 Diamonds (2482+403)',735731,4),
  mk('3693 Diamonds (3202+491)',952479,8),mk('4020 Diamonds (3416+604)',1007849,4),mk('4678 Diamonds (4001+677)',1183827,4),
  mk('4830 Diamonds (4003+827)',1209309,4),mk('5398 Diamonds (4506+892)',1360542,4),mk('6030 Diamonds (5124+906)',1511774,4),
  mk('6840 Diamonds (5711+1129)',1713235,5),mk('8040 Diamonds (6832+1208)',2015699,4),mk('9660 Diamonds (8006+1654)',2402034,4),
];
const starlight=[mk('Twilight Pass',151232,6)];

function gemIcon(grad){return `<span style="display:inline-grid;place-items:center;width:46px;height:46px">${GZ_gem(40,grad)}</span>`;}
let gi=0;
function card(p){
  const id='p'+(gi++);
  const orig=p.disc?Math.round(p.price/(1-p.disc/100)):null;
  return `<label class="prod" data-price="${p.price}" data-name="${p.name}">
    <input type="radio" name="product" value="${id}">
    ${p.disc?`<span class="disc">-${p.disc}%</span>`:''}
    <span class="prod-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
    <span class="prod-ic">${GZ_gem(38,'g'+(gi%6))}</span>
    <span class="prod-name">${p.name}</span>
    <span class="prod-pr">${orig?`<s>${fmt(orig)}</s>`:''}<b>${fmt(p.price)}</b></span>
  </label>`;
}
function group(id,arr){const el=document.getElementById(id);if(el)el.innerHTML=arr.map(card).join('');}

document.addEventListener('DOMContentLoaded',()=>{
  group('grp-eternal',eternal);
  group('grp-instant',instant);
  group('grp-starlight',starlight);

  const bar=document.getElementById('sticky-bar');
  const barName=document.getElementById('bar-name');
  const barPrice=document.getElementById('bar-price');
  let selected=null;
  document.querySelectorAll('.prod').forEach(l=>{
    l.addEventListener('click',()=>{
      document.querySelectorAll('.prod').forEach(x=>x.classList.remove('on'));
      l.classList.add('on'); selected=l;
      barName.textContent=l.dataset.name;
      barPrice.textContent=fmt(+l.dataset.price);
      bar.classList.add('show');
    });
  });

  // qty
  const qty=document.getElementById('qty');
  document.getElementById('qty-minus').onclick=()=>{qty.value=Math.max(1,(+qty.value||1)-1);};
  document.getElementById('qty-plus').onclick=()=>{qty.value=(+qty.value||1)+1;};

  // payment method select
  document.querySelectorAll('.pay').forEach(p=>p.addEventListener('click',()=>{
    document.querySelectorAll('.pay').forEach(x=>x.classList.remove('on'));p.classList.add('on');
  }));

  // promo
  const promoBtn=document.getElementById('promo-btn');
  if(promoBtn)promoBtn.onclick=(e)=>{e.preventDefault();const i=document.getElementById('promo-in');
    if(i.value.trim()){GZ_gemPop(e.clientX,e.clientY,'PROMO OK ✓');}};

  // buy → go to payment
  document.getElementById('bar-buy').addEventListener('click',(e)=>{
    e.preventDefault();
    GZ_confetti(e.clientX,e.clientY);
    setTimeout(()=>{location.href='Payment.html';},700);
  });

  // rating bars animate
  const io=new IntersectionObserver((es)=>es.forEach(en=>{if(en.isIntersecting){
    en.target.querySelectorAll('.rbar i').forEach(b=>b.style.width=b.dataset.w);io.unobserve(en.target);}}),{threshold:.4});
  const rc=document.getElementById('rating-card'); if(rc)io.observe(rc);
});
})();
