
/* ===== Reveal ===== */
const obs = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}})},{threshold:0.15,rootMargin:'-40px'});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

/* ===== Nav ===== */
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>8)},{passive:true});
document.querySelectorAll('.nav-item').forEach(item=>{
  item.addEventListener('mouseenter',()=>item.classList.add('open'));
  item.addEventListener('mouseleave',()=>item.classList.remove('open'));
  item.querySelector('.nav-btn').addEventListener('click',(e)=>{e.preventDefault();document.querySelectorAll('.nav-item').forEach(i=>{if(i!==item)i.classList.remove('open')});item.classList.toggle('open');});
});
document.addEventListener('click',(e)=>{if(!e.target.closest('.nav-item'))document.querySelectorAll('.nav-item').forEach(i=>i.classList.remove('open'))});
function toggleMobile(){document.getElementById('mobileSheet').classList.toggle('open')}

/* ===== Hero / integrations marquees ===== */
const heroLogos=[
  ['Qnity','#777'],['Memgraph','#777'],['TriplePoint','#777'],['Usercentrics','#777'],
  ['Ohio State','#777'],['Connex','#777'],['OH.io','#777'],['Productiv','#777'],['Dutchess','#777']
];
function fillMarquee(id,items,withImg){
  const el=document.getElementById(id);if(!el)return;
  const loop=[...items,...items];
  el.innerHTML=loop.map(([n,c])=>withImg?`<img src="${c}" alt="${n}" onerror="this.style.display='none'">`:`<span style="font-weight:700;font-size:1rem;color:${c};letter-spacing:-0.01em;flex-shrink:0">${n}</span>`).join('');
}
fillMarquee('heroMarquee',heroLogos,false);
const integrations=[
  ['Salesforce','https://cdn.simpleicons.org/salesforce/00A1E0'],
  ['HubSpot','https://cdn.simpleicons.org/hubspot/FF7A59'],
  ['Outreach','https://www.google.com/s2/favicons?domain=outreach.io&sz=64'],
  ['Salesloft','https://www.google.com/s2/favicons?domain=salesloft.com&sz=64'],
  ['LinkedIn','https://cdn.simpleicons.org/linkedin/0A66C2'],
  ['Google','https://cdn.simpleicons.org/google/4285F4'],
  ['SendGrid','https://cdn.simpleicons.org/sendgrid/1A82E2'],
  ['Twilio','https://cdn.simpleicons.org/twilio/F22F46'],
  ['Airtable','https://cdn.simpleicons.org/airtable/18BFFF'],
  ['Supabase','https://cdn.simpleicons.org/supabase/3FCF8E'],
];
{
  const el=document.getElementById('integrationsMarquee');
  const loop=[...integrations,...integrations];
  el.innerHTML=loop.map(([n,u])=>`<img src="${u}" alt="${n}" onerror="this.style.display='none'">`).join('');
}

/* ===== Flow overview nodes ===== */
const FLOW=[
  ['Signals','default'],['CRM','default'],['SDR AI Worker','outline'],
  ['Research + Knowledge','default'],['Sequencing Tool','default'],['Meetings Booked','filled']
];
function renderFlow(){
  const d=document.getElementById('flowRowDesktop');
  const m=document.getElementById('flowRowMobile');
  d.innerHTML=FLOW.map(([l,v],i)=>`<div class="flow-node ${v==='default'?'':v}">${l}</div>${i<FLOW.length-1?'<span class="flow-arrow">→</span>':''}`).join('');
  m.innerHTML=FLOW.map(([l,v],i)=>`<div class="flow-node ${v==='default'?'':v}">${l}</div>${i<FLOW.length-1?'<span class="flow-arrow">↓</span>':''}`).join('');
}
renderFlow();

/* ===== SVG icon helpers (lucide-like inline) ===== */
const svgPath = (d)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICONS={
  message:svgPath('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  linkedin:svgPath('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
  mail:svgPath('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>'),
  plus:svgPath('<path d="M5 12h14M12 5v14"/>'),
  check:svgPath('<path d="M20 6 9 17l-5-5"/>'),
  clock:svgPath('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  sparkles:svgPath('<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>'),
  building:svgPath('<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>'),
  arrow:svgPath('<path d="M5 12h14M12 5l7 7-7 7"/>'),
  globe:svgPath('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'),
  news:svgPath('<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zM18 14h-8M15 18h-5M10 6h8v4h-8z"/>'),
  briefcase:svgPath('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
  trend:svgPath('<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'),
};
const RED='#FF0D40',GREEN='#22826F',AMBER='#B86E00';

/* ============================================================
   DIAGRAM 1 — Lead Funnel (full timing-driven animation)
   ============================================================ */
const D1_STAGE=[{cs:0.7,ce:1.4,ls:1.1,le:1.9,r:1.7},{cs:2.4,ce:3.1,ls:2.8,le:3.6,r:3.4},{cs:4.1,ce:4.8,ls:4.5,le:5.3,r:5.1}];
const D1_CONVERT=[5.9,6.4,6.9,7.4];
const D1_HOLD=8.6,D1_RESET=9.4,D1_LOOP=10.0;
const D1_CHANNELS=[
  {kind:'Webchat',ic:ICONS.message,tint:'#3B82F6',who:'Priya Shah · Acme Corp',body:'Can you show pricing for 200 seats?',py:56,lead:{n:'Priya Shah',c:'Acme Corp',s:'Webchat',sc:'+94'}},
  {kind:'LinkedIn',ic:ICONS.linkedin,tint:'#0A66C2',who:'Marcus Reid · VP Sales, Northwind',body:'Open to a 15-min intro next week.',py:120,lead:{n:'Marcus Reid',c:'Northwind',s:'LinkedIn',sc:'+88'}},
  {kind:'Email',ic:ICONS.mail,tint:GREEN,who:'Lena Park · Director RevOps, Globex',body:'Reviewed the deck — let\'s talk Tuesday.',py:184,lead:{n:'Lena Park',c:'Globex',s:'Email',sc:'+91'}},
];
const D1_BASE={n:'Devon Hale',c:'Initech',s:'Inbound',sc:'+72'};

function buildLF(rootId,isMobile){
  const root=document.getElementById(rootId);
  if(isMobile){
    root.classList.add('mobile');
    root.innerHTML=`<div class="lf-grid"><div class="lf-cards-m">${D1_CHANNELS.map((c,i)=>`
      <div class="lf-card" data-card="${i}">
        <div class="row">
          <span class="ic" style="background:${c.tint}1A;color:${c.tint}">${c.ic}</span>
          <span class="kind" style="color:${c.tint}">${c.kind}</span>
        </div>
        <div class="who">${c.who.split(' · ')[0]}</div>
        <div class="body">${c.body}</div>
      </div>`).join('')}</div>
      <div class="lf-table">
        <div class="hdr"><div class="title"><span class="dot"></span>CRM · New Leads</div><span class="live">Live</span></div>
        <div class="lf-cols"><span>Lead</span><span>Source</span><span>Score</span></div>
        <div class="lf-rows" style="min-height:0;flex:1">${renderLFRows()}</div>
        <div class="ftr"><span class="l">Synced to Salesforce · HubSpot</span><span class="r">● updating</span></div>
      </div></div>`;
  } else {
    root.innerHTML=`<div class="lf-grid">
      <div class="lf-cards">${D1_CHANNELS.map((c,i)=>`
        <div class="lf-card" data-card="${i}">
          <div class="row">
            <span class="ic" style="background:${c.tint}1A;color:${c.tint}">${c.ic}</span>
            <span class="kind" style="color:${c.tint}">${c.kind}</span>
            <span class="live">Live</span>
          </div>
          <div class="who">${c.who}</div>
          <div class="body">${c.body}</div>
        </div>`).join('')}</div>
      <div class="lf-mid">
        <svg viewBox="0 0 200 240" preserveAspectRatio="none">
          <defs><filter id="rg" x="-20" y="-20" width="240" height="280"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          ${D1_CHANNELS.map((c,i)=>`<g data-line="${i}">
            <path d="M 0 ${c.py} C 80 ${c.py}, 110 120, 200 120" stroke="#F3F4F6" stroke-opacity="0.35" stroke-width="1" fill="none"/>
            <path class="lp" d="M 0 ${c.py} C 80 ${c.py}, 110 120, 200 120" stroke="${RED}" stroke-width="1.5" fill="none" stroke-linecap="round" filter="url(#rg)" style="opacity:0"/>
            <circle class="ld" r="3.5" fill="${RED}" cx="0" cy="${c.py}" style="opacity:0"/>
          </g>`).join('')}
        </svg>
      </div>
      <div class="lf-table-col"><div class="lf-table">
        <div class="hdr"><div class="title"><span class="dot"></span>CRM · New Leads</div><span class="live">Live</span></div>
        <div class="lf-cols"><span>Lead</span><span>Source</span><span>Score</span></div>
        <div class="lf-rows">${renderLFRows()}</div>
        <div class="ftr"><span class="l">Synced to Salesforce · HubSpot</span><span class="r">● updating</span></div>
      </div></div></div>`;
  }
}
function renderLFRows(){
  return `<div class="lf-row" style="height:auto;padding:0.625rem 1rem;display:grid">
    <div class="leadcell"><div style="min-width:0"><div class="name">${D1_BASE.n}</div><div class="co">${D1_BASE.c}</div></div></div>
    <span class="src" style="color:rgba(0,0,0,0.6)">${D1_BASE.s}</span>
    <span class="score">${D1_BASE.sc}</span>
    <div class="status-overlay" data-conv="0"><div class="status-pill green">${ICONS.check}<span>Meeting booked</span></div></div>
  </div>${D1_CHANNELS.map((c,i)=>`
  <div class="lf-row" data-row="${i}" style="height:0;opacity:0;display:grid">
    <span class="flash"></span>
    <div class="leadcell">${ICONS.plus}<div style="min-width:0"><div class="name">${c.lead.n}</div><div class="co">${c.lead.c}</div></div></div>
    <span class="src" style="color:${c.tint}">${c.lead.s}</span>
    <span class="score">${c.lead.sc}</span>
    <div class="status-overlay" data-conv="${i+1}"><div class="status-pill ${i===2?'amber':'green'}">${i===2?ICONS.clock:ICONS.check}<span>${i===2?'Following up':'Meeting booked'}</span></div></div>
  </div>`).join('')}`;
}
function tickLF(t,root){
  const clamp=v=>Math.max(0,Math.min(1,v));
  const pulse=(x,a,b)=>{if(x<=a||x>=b)return 0;const m=(a+b)/2;return x<m?(x-a)/(m-a):1-(x-m)/(b-m)};
  const ramp=(x,a,b)=>x<=a?0:x>=b?1:(x-a)/(b-a);
  D1_STAGE.forEach((s,i)=>{
    const card=root.querySelector(`[data-card="${i}"]`);
    const a=pulse(t,s.cs,s.ce);
    if(card)card.classList.toggle('active',a>0.05);
    const lineG=root.querySelector(`[data-line="${i}"]`);
    if(lineG){
      const la=pulse(t,s.ls,s.le);
      lineG.querySelector('.lp').style.opacity=la;
      const dot=lineG.querySelector('.ld');
      const u=ramp(t,s.ls,s.le),mu=1-u;
      const c=D1_CHANNELS[i];
      const cx=mu*mu*mu*0+3*mu*mu*u*80+3*mu*u*u*110+u*u*u*200;
      const cy=mu*mu*mu*c.py+3*mu*mu*u*c.py+3*mu*u*u*120+u*u*u*120;
      dot.setAttribute('cx',cx);dot.setAttribute('cy',cy);dot.style.opacity=la>0?1:0;
    }
    // row
    const row=root.querySelector(`[data-row="${i}"]`);
    if(row){
      let p;
      if(t<s.r)p=0;else if(t<D1_HOLD)p=clamp((t-s.r)/0.35);else if(t<D1_RESET)p=1-clamp((t-D1_HOLD)/(D1_RESET-D1_HOLD));else p=0;
      row.style.height=(44*p)+'px';row.style.opacity=p;
      const flash=pulse(t,s.r,s.r+0.7);
      row.querySelector('.flash').style.background=`rgba(255,13,64,${0.22*flash})`;
    }
  });
  // converts
  D1_CONVERT.forEach((at,i)=>{
    const ov=root.querySelectorAll(`[data-conv="${i}"]`)[0];
    if(!ov)return;
    let p;
    if(t<at)p=0;else if(t<D1_HOLD)p=clamp((t-at)/0.45);else if(t<D1_RESET)p=1-clamp((t-D1_HOLD)/(D1_RESET-D1_HOLD));else p=0;
    if(i>0){
      const row=root.querySelector(`[data-row="${i-1}"]`);
      const rp=row?parseFloat(row.style.opacity)||0:0;
      p*=rp;
    }
    ov.style.clipPath=`inset(0 ${(1-p)*100}% 0 0)`;
  });
}

buildLF('diag1Desktop',false);
buildLF('diag1Mobile',true);

/* ============================================================
   DIAGRAM 2 — Account Enrichment
   ============================================================ */
const AE_LOOP=14.0;
const AE_T={A_ROW_START:0.2,A_ROW_STEP:0.14,A_DONE:2.1,
  B_SELECT_START:4.2,B_SELECT_STEP:0.07,B_COLLAPSE_START:4.95,B_COLLAPSE_END:5.55,B_DONE:6.0,
  C_PRUNE_START:6.05,C_PRUNE_STEP:0.07,C_MORPH_START:6.6,C_MORPH_END:7.0,
  C_ROW_START:7.05,C_ROW_STEP:0.13,C_ENRICH_START:8.6,C_ENRICH_STEP:0.13,
  C_OUTREACH_START:10.4,C_OUTREACH_STEP:0.10,C_FOOTER_START:11.8,C_FOOTER_PEAK:12.2,
  HOLD_END:12.5,RESET_END:13.4};
const AE_ACCOUNTS=[
  {co:"Northwind Logistics",ind:"Logistics",emp:"1,240",reg:"NA",sig:"Pricing×12, Hiring",fit:91,sel:true},
  {co:"Helix Biotech",ind:"Healthcare",emp:"640",reg:"NA",sig:"Funding round",fit:87,sel:true},
  {co:"Vantage Manufacturing",ind:"Industrial",emp:"3,100",reg:"EU",sig:"Exec hire, RFP",fit:84,sel:true},
  {co:"Cobalt Energy",ind:"Energy",emp:"910",reg:"NA",sig:"Site search",fit:58,sel:false},
  {co:"Lattice Software",ind:"SaaS",emp:"420",reg:"EU",sig:"Pricing×8, Demo req",fit:89,sel:true},
  {co:"Argent Capital",ind:"Fintech",emp:"210",reg:"NA",sig:"Hiring AEs",fit:82,sel:true},
  {co:"Brightline Retail",ind:"Retail",emp:"5,400",reg:"APAC",sig:"Low intent",fit:49,sel:false},
  {co:"Meridian Health",ind:"Healthcare",emp:"2,200",reg:"NA",sig:"Compliance review",fit:81,sel:true},
  {co:"Ironwood Realty",ind:"Real estate",emp:"180",reg:"NA",sig:"—",fit:41,sel:false},
  {co:"Polaris Logistics",ind:"Logistics",emp:"770",reg:"EU",sig:"Pricing×5",fit:80,sel:true},
  {co:"Quill Media",ind:"Media",emp:"330",reg:"NA",sig:"Tech swap",fit:77,sel:true},
  {co:"Fenway Foods",ind:"CPG",emp:"1,900",reg:"NA",sig:"—",fit:52,sel:false},
];
const AE_CONTACTS=[
  {name:"Sara Chen",title:"CRO",loc:"Boston, MA",out:"email",tint:"#22826F",initials:"SC"},
  {name:"Marcus Reid",title:"VP Sales",loc:"Austin, TX",out:"linkedin",tint:"#0A66C2",initials:"MR"},
  {name:"Lena Park",title:"RevOps Lead",loc:"New York, NY",out:"email",tint:"#7C3AED",initials:"LP"},
  {name:"Jamal Owens",title:"Dir. Marketing",loc:"Chicago, IL",out:"email",tint:"#B86E00",initials:"JO"},
  {name:"Priya Shah",title:"VP Demand Gen",loc:"San Mateo, CA",out:"call",tint:"#22826F",initials:"PS"},
  {name:"Devon Hale",title:"Head of Sales Ops",loc:"Denver, CO",out:"email",tint:"#0A66C2",initials:"DH"},
  {name:"Hiro Tanaka",title:"Sr. Sales Director",loc:"Seattle, WA",out:"linkedin",tint:"#7C3AED",initials:"HT"},
  {name:"Maya Alvarez",title:"Enterprise AE Lead",loc:"Miami, FL",out:"email",tint:"#22826F",initials:"MA"},
  {name:"Ben Whittaker",title:"VP Customer Success",loc:"Toronto, ON",out:"await",tint:"#B86E00",initials:"BW"},
  {name:"Aisha Khan",title:"Director, RevOps",loc:"London, UK",out:"email",tint:"#0A66C2",initials:"AK"},
  {name:"Rafael Ortiz",title:"VP Partnerships",loc:"Mexico City",out:"call",tint:"#7C3AED",initials:"RO"},
  {name:"Eve Lambert",title:"Sales Enablement",loc:"Paris, FR",out:"email",tint:"#22826F",initials:"EL"},
];
const AE_SELIDX=AE_ACCOUNTS.map((a,i)=>a.sel?i:-1).filter(i=>i>=0);
const AE_PRUNE=AE_SELIDX.slice(1);
function aeOutreachLabel(k){
  if(k==='email')return{label:'Email sent',icon:ICONS.mail,tone:'green'};
  if(k==='linkedin')return{label:'LinkedIn sent',icon:ICONS.linkedin,tone:'green'};
  if(k==='call')return{label:'Call scheduled',icon:svgPath('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),tone:'green'};
  return{label:'Awaiting signal',icon:ICONS.clock,tone:'amber'};
}
function buildAE(){
  const root=document.getElementById('diag2Stage');
  if(!root)return;
  root.innerHTML=`<div class="ae-root">
    <div class="ae-card" id="aeSceneA">
      <div class="ae-hdr"><div class="l"><span class="dot"></span>Target accounts · Q2 ICP scan</div><span class="r">Live</span></div>
      <div class="ae-cols a"><span></span><span>Company</span><span>Industry</span><span>Employees</span><span>Region</span><span>Intent signals</span><span style="text-align:right">Fit</span></div>
      <div id="aeRowsA">${AE_ACCOUNTS.map((a,i)=>`
        <div class="ae-row a" data-arow="${i}">
          <span class="flash"></span><span class="keepflash"></span>
          <span class="sel">${a.sel?`<span class="sel-yes">${ICONS.check}</span>`:`<span class="sel-no">${svgPath('<path d="M18 6L6 18M6 6l12 12"/>')}</span>`}</span>
          <span class="co">${a.co}</span><span class="ind">${a.ind}</span><span class="emp">${a.emp}</span>
          <span class="ind">${a.reg}</span><span class="sig">${a.sig}</span>
          <span class="fit" style="color:${a.fit>=75?GREEN:'rgba(0,0,0,0.4)'}">${a.fit}</span>
        </div>`).join('')}</div>
      <div class="ae-ftr"><span class="l">Synced to Salesforce · HubSpot</span><span class="r" id="aeFootA">● scanning 80 accounts</span></div>
    </div>
    <div class="ae-card" id="aeSceneC" style="opacity:0">
      <div class="ae-tabbar">
        <div class="ae-tab" id="aeTab">${ICONS.building}<span class="tname">Northwind Logistics</span><span class="tind">· Logistics</span></div>
        <div class="more" id="aeMore">+ 7 more</div>
        <span class="lab">Contacts</span>
      </div>
      <div class="ae-cols c"><span>Contact</span><span>Title</span><span>Location</span><span>Status</span></div>
      <div id="aeRowsC">${AE_CONTACTS.map((c,i)=>{const out=aeOutreachLabel(c.out);return`
        <div class="ae-row c" data-crow="${i}">
          <span class="flash"></span>
          <span class="name"><span class="av" style="background:${c.tint}1A;color:${c.tint}">${c.initials}</span>${c.name}</span>
          <span class="title">${c.title}</span><span class="loc">${c.loc}</span>
          <div class="status-cell">
            <div class="ae-pill amber" data-loader style="display:none"><span style="display:inline-flex;gap:2px"><span class="ae-loader-dot"></span><span class="ae-loader-dot"></span><span class="ae-loader-dot"></span></span><span>Enriching</span></div>
            <div class="ae-pill-overlay" data-enrich><div class="ae-pill green">${ICONS.check}<span>Enriched</span></div></div>
            <div class="ae-pill-overlay" data-out><div class="ae-pill ${out.tone}">${out.icon}<span>${out.label}</span></div></div>
          </div>
        </div>`}).join('')}</div>
      <div class="ae-ftr">
        <span class="l">Synced to Salesforce · HubSpot</span>
        <span class="r" id="aeFootCEnriching">● enriching</span>
        <div class="victory" id="aeVictory">${ICONS.sparkles}<span class="txt">11 outreach actions sent · 1 awaiting</span>${ICONS.sparkles}</div>
      </div>
    </div>
  </div>`;
}
function tickAE(t){
  const T=AE_T;
  const clamp=v=>Math.max(0,Math.min(1,v));
  const ramp=(x,a,b)=>x<=a?0:x>=b?1:(x-a)/(b-a);
  const pulse=(x,a,b)=>{if(x<=a||x>=b)return 0;const m=(a+b)/2;return x<m?(x-a)/(m-a):1-(x-m)/(b-m)};
  const sceneA=document.getElementById('aeSceneA');
  const sceneC=document.getElementById('aeSceneC');
  if(!sceneA||!sceneC)return;
  const sceneAOp=t<T.C_MORPH_START?1:1-clamp(ramp(t,T.C_MORPH_START,T.C_MORPH_END));
  const sceneCOp=t<T.C_MORPH_START?0:t<T.HOLD_END?clamp(ramp(t,T.C_MORPH_START,T.C_MORPH_END)):t<T.RESET_END?1-clamp(ramp(t,T.HOLD_END,T.RESET_END)):0;
  sceneA.style.opacity=sceneAOp;sceneA.style.pointerEvents='none';
  sceneC.style.opacity=sceneCOp;
  // A rows
  const unselCollapse=clamp(ramp(t,T.B_COLLAPSE_START,T.B_COLLAPSE_END));
  const rejectTag=clamp(ramp(t,T.B_SELECT_START+0.2,T.B_SELECT_START+0.6));
  AE_ACCOUNTS.forEach((a,i)=>{
    const row=sceneA.querySelector(`[data-arow="${i}"]`);if(!row)return;
    const appear=clamp(ramp(t,T.A_ROW_START+i*T.A_ROW_STEP,T.A_ROW_START+i*T.A_ROW_STEP+0.30));
    const flash=pulse(t,T.A_ROW_START+i*T.A_ROW_STEP,T.A_ROW_START+i*T.A_ROW_STEP+0.55);
    let collapseP=0;
    if(!a.sel)collapseP=unselCollapse;
    else{const order=AE_PRUNE.indexOf(i);if(order>=0)collapseP=clamp(ramp(t,T.C_PRUNE_START+order*T.C_PRUNE_STEP,T.C_PRUNE_START+order*T.C_PRUNE_STEP+0.30))}
    const keepFlash=a.sel?pulse(t,5.4,5.8):0;
    const baseH=22;
    row.style.height=(baseH*(1-collapseP)*appear)+'px';
    row.style.opacity=appear*(1-collapseP);
    row.querySelector('.flash').style.background=`rgba(255,13,64,${0.14*flash})`;
    row.querySelector('.keepflash').style.background=`rgba(34,130,111,${0.10*keepFlash})`;
    const sel=row.querySelector('.sel-yes,.sel-no');
    if(a.sel){
      const order=AE_SELIDX.indexOf(i);
      const checkP=clamp(ramp(t,T.B_SELECT_START+order*T.B_SELECT_STEP,T.B_SELECT_START+order*T.B_SELECT_STEP+0.25));
      if(sel){sel.style.opacity=checkP;sel.style.transform=`scale(${0.6+0.4*checkP})`}
    } else if(sel){sel.style.opacity=rejectTag}
  });
  // Footer A
  const scanCount=Math.min(412,Math.round(80+332*clamp(t/T.A_DONE)));
  const showFoundA=t>=T.A_DONE&&t<T.B_DONE;
  const fa=document.getElementById('aeFootA');
  if(fa){fa.style.color=showFoundA?GREEN:RED;fa.textContent=showFoundA?(t>5.4?'● 8 accounts qualified for outreach':'● 12 in-market accounts found'):`● scanning ${scanCount} accounts`}
  // Scene C tab morph
  const morphP=clamp(ramp(t,T.C_MORPH_START,T.C_MORPH_END));
  const tab=document.getElementById('aeTab');
  if(tab){tab.style.transform=`scale(${0.85+0.15*morphP})`;tab.style.opacity=morphP}
  const more=document.getElementById('aeMore');if(more)more.style.opacity=0.6*morphP;
  // C rows
  AE_CONTACTS.forEach((c,i)=>{
    const row=sceneC.querySelector(`[data-crow="${i}"]`);if(!row)return;
    let p;const at=T.C_ROW_START+i*T.C_ROW_STEP;
    if(t<at)p=0;else if(t<T.HOLD_END)p=clamp((t-at)/0.30);else if(t<T.RESET_END)p=1-clamp((t-T.HOLD_END)/(T.RESET_END-T.HOLD_END));else p=0;
    const flash=pulse(t,at,at+0.45);
    row.style.height=(22*p)+'px';row.style.opacity=p;
    row.querySelector('.flash').style.background=`rgba(255,13,64,${0.12*flash})`;
    let eP;const eAt=T.C_ENRICH_START+i*T.C_ENRICH_STEP;
    if(t<eAt)eP=0;else if(t<T.HOLD_END)eP=clamp((t-eAt)/0.30);else eP=1;
    let oP;const oAt=T.C_OUTREACH_START+i*T.C_OUTREACH_STEP;
    if(t<oAt)oP=0;else if(t<T.HOLD_END)oP=clamp((t-oAt)/0.28);else oP=1;
    const showLoader=p>0.5&&eP<0.05;
    const loader=row.querySelector('[data-loader]');if(loader)loader.style.display=showLoader?'flex':'none';
    const eOv=row.querySelector('[data-enrich]');if(eOv)eOv.style.clipPath=`inset(0 ${(1-eP*(1-oP))*100}% 0 0)`;
    const oOv=row.querySelector('[data-out]');if(oOv)oOv.style.clipPath=`inset(0 ${(1-oP)*100}% 0 0)`;
  });
  let footerProg;
  if(t<T.C_FOOTER_START)footerProg=0;
  else if(t<T.HOLD_END)footerProg=clamp((t-T.C_FOOTER_START)/(T.C_FOOTER_PEAK-T.C_FOOTER_START));
  else if(t<T.RESET_END)footerProg=1-clamp((t-T.HOLD_END)/(T.RESET_END-T.HOLD_END));
  else footerProg=0;
  const en=document.getElementById('aeFootCEnriching');if(en)en.style.opacity=1-footerProg;
  const vic=document.getElementById('aeVictory');if(vic){vic.style.opacity=footerProg;vic.style.background=`linear-gradient(90deg, rgba(255,13,64,${0.08*footerProg}), rgba(34,130,111,${0.10*footerProg}))`}
}
buildAE();

/* ============================================================
   DIAGRAM 3 — Signal Intelligence
   ============================================================ */
const SI_LOOP=36.0;
const SI_SCENES=[
  {start:0.8,popAt:2.6,type:'web',label:'Website',url:'northwind-logistics.io/pricing'},
  {start:9.6,popAt:11.4,type:'news',label:'News',url:'logisticsweekly.com/m-and-a'},
  {start:18.4,popAt:20.2,type:'jobs',label:'Job board',url:'jobs.example.com/sales'},
  {start:27.2,popAt:29.0,type:'tech',label:'Funding',url:'techcrunch.com/2026/05/halcyon-series-a'},
];
const SI_HOLD_END=34.4,SI_RESET_END=35.4;
const SI_SIGNALS=[
  {ic:ICONS.globe,tag:'Website intent',company:'Northwind Logistics',insight:'Visited pricing 4× this month — high intent.'},
  {ic:ICONS.news,tag:'News · M&A',company:'Northwind Logistics',insight:'Expanding into Canada via Maple Freight acquisition.'},
  {ic:ICONS.briefcase,tag:'Hiring',company:'Ravencrest Analytics',insight:'Hiring SDRs nationally — 6 open roles.'},
  {ic:ICONS.trend,tag:'Funding',company:'Halcyon Robotics',insight:'Just raised $24M Series A — budget unlocked.'},
];
function siSceneContent(s){
  if(s.type==='web')return `<div style="position:absolute;inset:0;padding-top:1.75rem;display:flex;flex-direction:column;background:#FAFBFB">
    <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;border-bottom:1px solid rgba(0,0,0,0.06)">
      <div style="height:0.75rem;width:3.5rem;border-radius:2px;background:${GREEN}"></div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-left:0.5rem">
        ${['Product','Solutions','Pricing','Docs'].map((l,k)=>`<span style="font-size:9.5px;font-weight:600;color:${k===2?GREEN:'rgba(0,0,0,0.55)'}">${l}</span>`).join('')}
      </div>
      <div style="margin-left:auto;height:1.25rem;width:4rem;border-radius:9999px;background:${GREEN}"></div>
    </div>
    <div style="padding:0.625rem 1rem;display:flex;flex-direction:column;align-items:center;gap:0.375rem">
      <div style="font-size:13px;font-weight:700;color:rgba(0,0,0,0.85)">Smarter freight, end to end.</div>
      <div style="font-size:10px;color:rgba(0,0,0,0.5)">Pricing that scales with your shipments.</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;padding:0 0.75rem 0.5rem;flex:1">
      ${[{n:'Starter',p:'$49'},{n:'Growth',p:'$199'},{n:'Scale',p:'$499'}].map((pl,i)=>`
        <div style="border-radius:0.5rem;border:1px solid ${i===1?GREEN:'rgba(0,0,0,0.08)'};${i===1?`box-shadow:0 0 0 1.5px ${GREEN}33;`:''}background:#fff;padding:0.5rem;display:flex;flex-direction:column;gap:0.375rem">
          <div style="font-size:9px;text-transform:uppercase;letter-spacing:0.14em;font-weight:700;color:rgba(0,0,0,0.55)">${pl.n}</div>
          <div style="font-size:14px;font-weight:700;color:rgba(0,0,0,0.85);font-family:ui-monospace,monospace">${pl.p}<span style="font-size:8px;color:rgba(0,0,0,0.4)">/mo</span></div>
          <div style="display:flex;flex-direction:column;gap:0.25rem;margin-top:0.25rem">
            <div style="height:4px;width:100%;border-radius:2px;background:rgba(0,0,0,0.07)"></div>
            <div style="height:4px;width:83%;border-radius:2px;background:rgba(0,0,0,0.07)"></div>
            <div style="height:4px;width:66%;border-radius:2px;background:rgba(0,0,0,0.07)"></div>
          </div>
          <div style="margin-top:auto;height:1rem;border-radius:3px;background:${i===1?GREEN:'#F1F2F3'};color:${i===1?'#fff':'rgba(0,0,0,0.5)'};font-size:8px;font-weight:700;display:flex;align-items:center;justify-content:center">${i===1?'Start trial':'Choose'}</div>
        </div>`).join('')}
    </div></div>`;
  if(s.type==='news')return `<div style="position:absolute;inset:0;padding-top:1.75rem;display:flex;flex-direction:column;background:#FBF9F4">
    <div style="display:flex;align-items:baseline;justify-content:space-between;padding:0.5rem 1rem 0.375rem;border-bottom:1px solid rgba(0,0,0,0.1)">
      <div style="font-family:Georgia,serif;font-size:14px;font-weight:700;color:rgba(0,0,0,0.85)">Logistics Weekly</div>
      <div style="font-size:8.5px;text-transform:uppercase;letter-spacing:0.2em;font-weight:600;color:rgba(0,0,0,0.45)">Mon · May 4 · 2026</div>
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;padding:0.25rem 1rem;border-bottom:1px solid rgba(0,0,0,0.06)">
      ${['News','M&A','Carriers','Markets','Opinion'].map(l=>`<span style="font-size:8.5px;text-transform:uppercase;letter-spacing:0.16em;font-weight:600;color:rgba(0,0,0,0.5)">${l}</span>`).join('')}
    </div>
    <div style="padding:0.75rem 1rem;display:flex;flex-direction:column;gap:0.375rem;flex:1">
      <div style="font-size:8.5px;text-transform:uppercase;letter-spacing:0.2em;font-weight:700;color:${RED}">M&A · Toronto, ON · 2h ago</div>
      <div style="font-family:Georgia,serif;font-size:14px;font-weight:700;color:rgba(0,0,0,0.85);line-height:1.3">Northwind Logistics acquires Toronto-based Maple Freight in $180M deal</div>
      <div style="display:flex;align-items:center;gap:0.375rem"><span style="height:0.75rem;width:0.75rem;border-radius:50%;background:rgba(0,0,0,0.15)"></span><span style="font-size:9px;font-weight:600;color:rgba(0,0,0,0.55)">Sarah Chen</span><span style="font-size:8.5px;color:rgba(0,0,0,0.35)">· 3 min read</span></div>
      <div style="display:grid;grid-template-columns:80px 1fr;gap:0.75rem;margin-top:0.5rem">
        <div style="border-radius:3px;background:rgba(0,0,0,0.1);aspect-ratio:1"></div>
        <div style="display:flex;flex-direction:column;gap:0.375rem">${[100,92,83,75,66].map(w=>`<div style="height:6px;width:${w}%;border-radius:2px;background:rgba(0,0,0,0.08)"></div>`).join('')}</div>
      </div>
    </div></div>`;
  if(s.type==='jobs')return `<div style="position:absolute;inset:0;padding-top:1.75rem;display:flex;background:#F5F7FA">
    <div style="width:28%;border-right:1px solid rgba(0,0,0,0.06);padding:0.75rem;display:flex;flex-direction:column;gap:0.5rem">
      <div style="font-size:9px;text-transform:uppercase;letter-spacing:0.18em;font-weight:700;color:rgba(0,0,0,0.55)">Filters</div>
      ${[{h:'Department',items:['Sales','Marketing','RevOps']},{h:'Remote',items:['Remote','Hybrid']},{h:'Location',items:['United States']}].map(g=>`
        <div style="display:flex;flex-direction:column;gap:0.25rem">
          <div style="font-size:8.5px;text-transform:uppercase;letter-spacing:0.14em;font-weight:600;color:rgba(0,0,0,0.4)">${g.h}</div>
          ${g.items.map((it,k)=>`<div style="display:flex;align-items:center;gap:0.375rem"><span style="height:8px;width:8px;border-radius:2px;border:1px solid ${k===0?GREEN:'rgba(0,0,0,0.2)'};background:${k===0?GREEN:'transparent'};display:flex;align-items:center;justify-content:center;color:#fff">${k===0?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:6px;height:6px"><path d="M20 6L9 17l-5-5"/></svg>':''}</span><span style="font-size:9px;color:rgba(0,0,0,0.65)">${it}</span></div>`).join('')}
        </div>`).join('')}
    </div>
    <div style="flex:1;padding:0.75rem;display:flex;flex-direction:column;gap:0.5rem">
      <div style="display:flex;align-items:center;gap:0.5rem">
        <div style="flex:1;height:1.5rem;border-radius:6px;border:1px solid rgba(0,0,0,0.1);background:#fff;display:flex;align-items:center;padding:0 0.5rem;gap:0.375rem">
          <span style="font-size:9px;color:rgba(0,0,0,0.45)">SDR · Sales Development</span>
        </div>
        <span style="font-size:9px;font-weight:600;color:rgba(0,0,0,0.55)">United States</span>
      </div>
      <div style="font-size:9px;color:rgba(0,0,0,0.45);font-family:ui-monospace,monospace">126 results</div>
      ${[{t:'Senior SDR — Outbound',c:'Ravencrest Analytics',l:'San Francisco, CA',d:'3d ago',s:'$85K–$110K',hot:true},{t:'SDR — Mid-Market',c:'Ravencrest Analytics',l:'Austin, TX',d:'5d ago',s:'$70K–$90K',hot:false},{t:'BDR — Enterprise',c:'Ravencrest Analytics',l:'Remote · US',d:'1w ago',s:'$75K–$95K',hot:false}].map(j=>`
        <div style="border-radius:0.5rem;border:1px solid ${j.hot?GREEN+'55':'rgba(0,0,0,0.08)'};${j.hot?`box-shadow:0 0 0 1px ${GREEN}22;`:''}background:#fff;padding:0.5rem 0.625rem;opacity:${j.hot?1:0.7};display:flex;align-items:center;gap:0.5rem">
          <div style="height:1.75rem;width:1.75rem;border-radius:3px;background:rgba(0,0,0,0.08)"></div>
          <div style="flex:1;min-width:0">
            <div style="font-size:11px;font-weight:600;color:rgba(0,0,0,0.85);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${j.t}</div>
            <div style="font-size:9px;color:rgba(0,0,0,0.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${j.c} · ${j.l} · ${j.d}</div>
          </div>
          <span style="font-size:9px;font-family:ui-monospace,monospace;font-weight:600;color:rgba(0,0,0,0.55)">${j.s}</span>
          ${j.hot?`<span style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:0.125rem 0.375rem;border-radius:3px;color:${RED};background:#FFE8ED">New</span>`:''}
        </div>`).join('')}
    </div></div>`;
  // tech / funding
  return `<div style="position:absolute;inset:0;padding-top:1.75rem;display:flex;flex-direction:column;background:#FAFBFB">
    <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border-bottom:1px solid rgba(0,0,0,0.1)">
      <div style="height:0.75rem;width:0.75rem;border-radius:2px;background:#0BA259"></div>
      <span style="font-size:12px;font-weight:700;color:rgba(0,0,0,0.85)">TechCrunch</span>
      <span style="margin-left:0.75rem;font-size:8.5px;color:rgba(0,0,0,0.4)">Startups › Funding</span>
    </div>
    <div style="padding:0.75rem 1rem;display:flex;flex-direction:column;gap:0.5rem;flex:1">
      <div style="display:flex;align-items:center;gap:0.5rem">
        <span style="font-size:18px;font-weight:700;font-family:ui-monospace,monospace;color:rgba(0,0,0,0.85)">$24M</span>
        <span style="font-size:9px;text-transform:uppercase;letter-spacing:0.16em;font-weight:700;border-radius:3px;padding:0.125rem 0.375rem;color:${GREEN};background:#E8F5F1">Series A</span>
        <span style="font-size:9px;color:rgba(0,0,0,0.45)">Led by Atlas Ventures</span>
      </div>
      <div style="font-size:14px;font-weight:700;color:rgba(0,0,0,0.85);line-height:1.3">Halcyon Robotics closes $24M Series A to scale warehouse automation</div>
      <div style="display:flex;align-items:center;gap:0.375rem"><span style="height:0.75rem;width:0.75rem;border-radius:50%;background:rgba(0,0,0,0.15)"></span><span style="font-size:9px;font-weight:600;color:rgba(0,0,0,0.55)">Marcus Wei</span><span style="font-size:8.5px;color:rgba(0,0,0,0.35)">· 5h ago</span></div>
      <div style="display:flex;flex-direction:column;gap:0.25rem;margin-top:0.25rem">
        ${[100,92,83].map(w=>`<div style="height:6px;width:${w}%;border-radius:2px;background:rgba(0,0,0,0.08)"></div>`).join('')}
      </div>
      <div style="margin-top:0.25rem;border-radius:6px;border:1px solid rgba(0,0,0,0.08);overflow:hidden">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;padding:0.25rem 0.5rem;background:#FAFBFB;border-bottom:1px solid rgba(0,0,0,0.06)">
          <span style="font-size:8.5px;text-transform:uppercase;letter-spacing:0.14em;font-weight:700;color:rgba(0,0,0,0.45)">Investor</span>
          <span style="font-size:8.5px;text-transform:uppercase;letter-spacing:0.14em;font-weight:700;color:rgba(0,0,0,0.45);text-align:right">Amount</span>
        </div>
        ${[{n:'Atlas Ventures',a:'$14M'},{n:'Northgate Capital',a:'$6M'},{n:'Beacon Partners',a:'$4M'}].map(r=>`
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;padding:0.25rem 0.5rem;border-bottom:1px solid rgba(0,0,0,0.04)">
            <span style="font-size:9.5px;color:rgba(0,0,0,0.7)">${r.n}</span>
            <span style="font-size:9.5px;font-family:ui-monospace,monospace;font-weight:600;color:rgba(0,0,0,0.75);text-align:right">${r.a}</span>
          </div>`).join('')}
      </div>
    </div></div>`;
}
function buildSI(){
  const root=document.getElementById('diag3Stage');
  if(!root)return;
  root.innerHTML=`<div class="si-root"><div class="si-stage">
    <div class="si-strip">
      <div class="l"><span class="dot"></span><span class="lab">Signal monitor · live</span></div>
      <div class="src-wrap">${SI_SCENES.map((s,i)=>`<span class="src" data-srclbl="${i}">${s.label}</span>`).join('')}</div>
      <span class="cnt" id="siCnt">0/4 in-market</span>
    </div>
    <div class="si-scenes">
      ${SI_SCENES.map((s,i)=>{const sig=SI_SIGNALS[i];return `
        <div class="si-scene scene-${s.type}" data-scene="${i}">
          <div class="si-frame"><div class="si-shell">
            <div class="bar"><span class="dotr" style="background:#FF5F57"></span><span class="dotr" style="background:#FEBC2E"></span><span class="dotr" style="background:#28C840"></span><div class="urlbox"><span>${s.url}</span></div></div>
          </div>${siSceneContent(s)}</div>
          <div class="si-popup-wrap" data-popup="${i}">
            <div class="si-halo desktop"></div><div class="si-halo mobile"></div>
            <div class="si-popup desktop">
              <div class="accent"></div>
              <div class="h"><span class="ic">${sig.ic}</span><div class="meta"><span class="a">EverWorker AI</span><span class="b">Signal detected</span></div><span class="live"></span></div>
              <div class="b"><div class="insight">${sig.insight}</div>
                <div class="meta-row"><span class="tag">${sig.ic}${sig.tag}</span><div class="co">${ICONS.building}<span>${sig.company}</span></div></div>
                <div class="routed">${ICONS.arrow}<span>Routed to AI SDR · added to outbound queue</span></div>
              </div>
            </div>
            <div class="si-popup mobile">
              <div class="accent"></div>
              <div class="h"><span class="ic">${sig.ic}</span><div class="meta"><span class="a">EverWorker AI</span><span class="b">Signal detected</span></div><span class="live"></span></div>
              <div class="b"><div class="insight">${sig.insight}</div>
                <div class="meta-row"><span class="tag">${sig.ic}${sig.tag}</span><div class="co">${ICONS.building}<span>${sig.company}</span></div></div>
              </div>
            </div>
          </div>
        </div>`}).join('')}
    </div>
  </div></div>`;
}
function tickSI(t){
  const clamp=v=>Math.max(0,Math.min(1,v));
  const ramp=(x,a,b)=>x<=a?0:x>=b?1:(x-a)/(b-a);
  let activeIdx=0;for(let i=0;i<SI_SCENES.length;i++)if(t>=SI_SCENES[i].start)activeIdx=i;
  const fired=SI_SCENES.filter(s=>t>=s.popAt).length;
  const cnt=document.getElementById('siCnt');if(cnt)cnt.textContent=`${fired}/4 in-market`;
  SI_SCENES.forEach((_,i)=>{
    const lbl=document.querySelector(`[data-srclbl="${i}"]`);
    if(lbl)lbl.classList.toggle('on',i===activeIdx&&t<SI_HOLD_END);
  });
  SI_SCENES.forEach((s,i)=>{
    const next=i<SI_SCENES.length-1?SI_SCENES[i+1].start:SI_HOLD_END;
    let op;
    if(i===SI_SCENES.length-1&&t>=SI_HOLD_END)op=1-clamp(ramp(t,SI_HOLD_END,SI_RESET_END));
    else{const fIn=clamp(ramp(t,s.start,s.start+0.5));const fOut=1-clamp(ramp(t,next-1.6,next-1.0));op=Math.min(fIn,fOut)}
    const scene=document.querySelector(`[data-scene="${i}"]`);
    if(scene)scene.style.opacity=op;
    // popup progress
    const enter=clamp(ramp(t,s.popAt-0.4,s.popAt-0.05));
    const exit=1-clamp(ramp(t,next-1.7,next-1.1));
    const p=Math.min(enter,exit);
    const pop=document.querySelector(`[data-popup="${i}"]`);
    if(pop){
      pop.style.opacity=p;
      pop.querySelectorAll('.si-popup').forEach(el=>{
        el.style.opacity=p;
        const tr=`translateY(calc(-50% + ${(1-enter)*10}px)) scale(${0.94+enter*0.06})`;
        const trM=`translateY(${(1-enter)*8}px) scale(${0.96+enter*0.04})`;
        if(el.classList.contains('desktop'))el.style.transform=tr;
        else el.style.transform=trM;
      });
      pop.querySelectorAll('.si-halo').forEach(el=>{el.style.opacity=p*0.9});
    }
  });
}
buildSI();

/* ===== Master clock ===== */
const start=performance.now();
function frame(now){
  const elapsed=(now-start)/1000;
  const t1=elapsed%D1_LOOP;
  tickLF(t1,document.getElementById('diag1Desktop'));
  tickLF(t1,document.getElementById('diag1Mobile'));
  tickAE(elapsed%AE_LOOP);
  tickSI(elapsed%SI_LOOP);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ===== Book Demo modal (identical to other exports) ===== */
const TIMES=["9:00 am","9:30 am","10:00 am","10:30 am","11:00 am","1:00 pm","1:30 pm","2:00 pm","2:30 pm","3:00 pm","3:30 pm","4:00 pm"];
let currentStep=1,monthOffset=0,selectedDate=null,selectedTime=null;
function openBookDemo(){goStep(1);document.getElementById('bookDemo').classList.add('open');document.body.style.overflow='hidden'}
function closeBookDemo(){document.getElementById('bookDemo').classList.remove('open');document.body.style.overflow='';setTimeout(()=>{['f-name','f-email','f-phone','f-company','f-title'].forEach(id=>document.getElementById(id).value='');selectedDate=null;selectedTime=null;monthOffset=0;validateStep1();goStep(1)},200)}
function goStep(n){currentStep=n;document.getElementById('step1').style.display=n===1?'block':'none';document.getElementById('step2').style.display=n===2?'block':'none';document.getElementById('step3').style.display=n===3?'block':'none';for(let i=1;i<=3;i++)document.getElementById('pip'+i).classList.toggle('active',n>=i);document.getElementById('stepName').textContent=n===1?'About you':n===2?'Pick a time':'Confirmed';if(n===2)renderCalendar();if(n===3){const name=(document.getElementById('f-name').value||'there').split(' ')[0];document.getElementById('confirmTitle').textContent="You're booked, "+name+".";document.getElementById('confirmEmail').textContent=document.getElementById('f-email').value;document.getElementById('confirmDate').textContent=selectedDate.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});document.getElementById('confirmTime').textContent=selectedTime+' · 30 min'}}
function validateStep1(){const ok=['f-name','f-email','f-company','f-title'].every(id=>document.getElementById(id).value.trim());document.getElementById('toStep2').disabled=!ok}
['f-name','f-email','f-company','f-title'].forEach(id=>document.getElementById(id).addEventListener('input',validateStep1));
function renderCalendar(){const base=new Date();base.setMonth(base.getMonth()+monthOffset);const year=base.getFullYear(),month=base.getMonth();document.getElementById('calLabel').textContent=base.toLocaleString('en-US',{month:'long',year:'numeric'});document.getElementById('prevMonth').disabled=monthOffset===0;const first=new Date(year,month,1).getDay();const days=new Date(year,month+1,0).getDate();const today=new Date();today.setHours(0,0,0,0);const cells=document.getElementById('calCells');cells.innerHTML='';for(let i=0;i<first;i++)cells.appendChild(document.createElement('div'));for(let d=1;d<=days;d++){const date=new Date(year,month,d);const isPast=date<today,isWk=date.getDay()===0||date.getDay()===6;const disabled=isPast||isWk;const sel=selectedDate&&selectedDate.toDateString()===date.toDateString();const btn=document.createElement('button');btn.className='cell '+(disabled?'disabled':'day')+(sel?' selected':'');btn.textContent=d;btn.disabled=disabled;btn.onclick=()=>{selectedDate=date;selectedTime=null;renderCalendar();renderTimes()};cells.appendChild(btn)}renderTimes()}
function renderTimes(){const list=document.getElementById('timeList');list.innerHTML='';document.getElementById('timeLabel').textContent=selectedDate?selectedDate.toLocaleDateString('en-US',{weekday:'long',month:'short',day:'numeric'}):'Select a date';if(!selectedDate){document.getElementById('toStep3').disabled=true;return}TIMES.forEach(t=>{const b=document.createElement('button');b.className='time'+(selectedTime===t?' selected':'');b.textContent=t;b.onclick=()=>{selectedTime=t;renderTimes()};list.appendChild(b)});document.getElementById('toStep3').disabled=!(selectedDate&&selectedTime)}
function changeMonth(d){monthOffset=Math.max(0,Math.min(3,monthOffset+d));renderCalendar()}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeBookDemo();document.getElementById('mobileSheet').classList.remove('open')}});
