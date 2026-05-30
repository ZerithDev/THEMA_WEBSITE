/* GAMIZ — Tweaks panel app (style switcher) */
const GZ_TWEAK_DEFAULTS = {
  style: (window.GZ_getTheme && window.GZ_getTheme()) || 'arcade',
  accent: (function(){try{return localStorage.getItem('gz_accent')||'#22D3EE';}catch(e){return '#22D3EE';}})(),
  particles: (function(){try{return localStorage.getItem('gz_particles')!=='off';}catch(e){return true;}})()
};

function GZTweaks(){
  const [t,setTweak]=useTweaks(GZ_TWEAK_DEFAULTS);
  React.useEffect(()=>{ if(window.GZ_setTheme) window.GZ_setTheme(t.style); },[t.style]);
  React.useEffect(()=>{ if(window.GZ_setAccent) window.GZ_setAccent(t.accent); },[t.accent]);
  React.useEffect(()=>{ if(window.GZ_setParticles) window.GZ_setParticles(t.particles); },[t.particles]);
  return (
    <TweaksPanel title="GAMIZ Tweaks">
      <TweakSection label="Style Skin" />
      <TweakRadio label="Theme" value={t.style}
        options={['holo','arcade','candy']}
        onChange={(v)=>setTweak('style',v)} />
      <p style={{margin:'2px 2px 0',fontSize:11,lineHeight:1.4,color:'var(--tw-muted,#8b8b9a)'}}>
        Holo = glassy & holographic · Arcade = bold sticker · Candy = soft pastel
      </p>
      <TweakSection label="Accent" />
      <TweakColor label="Accent color" value={t.accent}
        options={['#22D3EE','#EC4899','#84CC16','#F97316']}
        onChange={(v)=>setTweak('accent',v)} />
      <TweakSection label="Effects" />
      <TweakToggle label="Particle background" value={t.particles}
        onChange={(v)=>setTweak('particles',v)} />
    </TweaksPanel>
  );
}

(function(){
  const mountEl=document.getElementById('gz-tweaks-root');
  if(mountEl && window.ReactDOM) ReactDOM.createRoot(mountEl).render(<GZTweaks/>);
})();
