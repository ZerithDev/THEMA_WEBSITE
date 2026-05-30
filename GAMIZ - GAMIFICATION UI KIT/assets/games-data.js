/* GAMIZ — invented game catalog (no real/copyrighted titles) */
window.GZ_DATA=(function(){
 const g=(a,b)=>`linear-gradient(135deg,${a},${b})`;
 // [name, publisher, initials, gradient, discount(optional)]
 const trending=[
   ['Mythic Clash','Gemstone','MC',g('#7C3AED','#22D3EE'),30],
   ['Frontline Fire','Apex Forge','FF',g('#F97316','#EF4444'),null],
   ['Rune Tactics','Gemstone','RT',g('#0EA5E9','#6366F1'),18],
   ['Throne of Kings','Crownplay','TK',g('#EAB308','#7C3AED'),null],
   ['Battle Royale X','Apex Forge','BX',g('#22C55E','#0EA5E9'),null],
   ['Astral Saga','Nova Loom','AS',g('#A855F7','#EC4899'),null],
   ['Neon Strike','Pulse Games','NS',g('#06B6D4','#3B82F6'),null],
   ['Comet Rail','Nova Loom','CR',g('#8B5CF6','#22D3EE'),null],
 ];
 const games=[
   ['Mico Live','GAMIZ','ML',g('#A855F7','#7C3AED'),10],
   ['Strike Point','GAMIZ','SP',g('#EF4444','#7C3AED'),null],
   ['Tumble Squad','GAMIZ','TS',g('#FBBF24','#F97316'),null],
   ['Luna Frontier','GAMIZ','LF',g('#22D3EE','#6366F1'),null],
   ['Revelation Sky','GAMIZ','RS',g('#8B5CF6','#22D3EE'),null],
   ['Victory Nova','GAMIZ','VN',g('#EC4899','#7C3AED'),null],
   ['Origin Quest','GAMIZ','OQ',g('#0EA5E9','#7C3AED'),null],
   ['Sky Wanderers','GAMIZ','SW',g('#34D399','#0EA5E9'),null],
   ['Tower of Fate','GAMIZ','TF',g('#F59E0B','#EF4444'),null],
   ['Super Rumble','GAMIZ','SR',g('#7C3AED','#EC4899'),null],
   ['Astra Online','GAMIZ','AO',g('#06B6D4','#8B5CF6'),null],
   ['Light Voyage','GAMIZ','LV',g('#38BDF8','#22D3EE'),null],
 ];
 const voucher=[
   ['Megaplay','GAMIZ','MG',g('#EF4444','#F97316'),null],
   ['Power Credit','GAMIZ','PC',g('#FACC15','#22D3EE'),null],
   ['Razor Gold','GAMIZ','RG',g('#16A34A','#065F46'),null],
   ['PlayStore','GAMIZ','PS',g('#0EA5E9','#1D4ED8'),null],
   ['Blockbox','GAMIZ','BB',g('#111827','#374151'),33],
   ['Appstore ID','GAMIZ','AP',g('#22C55E','#0EA5E9'),null],
   ['Forge Pass','GAMIZ','FP',g('#F97316','#EF4444'),null],
   ['Console Card','GAMIZ','CC',g('#16A34A','#15803D'),null],
 ];
 const pulsa=[
   ['Telkomgem','GAMIZ','TG',g('#EF4444','#F97316'),52],
   ['Indosent','GAMIZ','IS',g('#FACC15','#F59E0B'),null],
   ['Axiz','GAMIZ','AX',g('#A855F7','#7C3AED'),null],
   ['Smartgem','GAMIZ','SG',g('#F97316','#EF4444'),null],
   ['Trio','GAMIZ','T3','#1F2937',null],
   ['XLink','GAMIZ','XL',g('#0EA5E9','#3B82F6'),null],
 ];
 return {trending,games,voucher,pulsa};
})();
