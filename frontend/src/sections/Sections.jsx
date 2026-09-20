import { useState } from "react";
import { motion } from "framer-motion";

// ── same palette as Hero.jsx (realtimecolors.com) ──
const BG = "#050315";
const BG_SOFT = "#0a0824";
const CARD = "#0d0b2b";
const PRIMARY = "#2f27ce";
const O = "#433bff";       // kept the name "O" so nothing else needs renaming
const ACCENT2 = "#7a6bff";
const LILAC = "#dedcff";
const LINE = "rgba(222,220,255,0.09)";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.09 } },
  viewport: { once: true },
};

const itemA = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
};

/* reusable blob background layer for section variety */
function Blobs({ variant = 1 }) {
  const sets = {
    1: [
      { w: 420, h: 420, top: -140, left: -100, c: O, dur: 22 },
      { w: 360, h: 360, bottom: -120, right: -80, c: PRIMARY, dur: 26 },
    ],
    2: [
      { w: 380, h: 380, top: -100, right: -120, c: ACCENT2, dur: 24 },
      { w: 320, h: 320, bottom: -100, left: -60, c: O, dur: 20 },
    ],
  };
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {sets[variant].map((b, i) => (
        <div key={i} className="absolute rounded-full"
          style={{
            width: b.w, height: b.h, top: b.top, left: b.left, right: b.right, bottom: b.bottom,
            filter: "blur(90px)", opacity: 0.28,
            background: `radial-gradient(circle, ${b.c}, transparent 70%)`,
            animation: `blob ${b.dur}s ease-in-out infinite`,
          }} />
      ))}
    </div>
  );
}

function SectionHeader({ tag, title, sub }) {
  return (
    <div className="mb-16 relative z-10">
      <motion.div className="flex items-center gap-3 mb-4" {...fadeUp(0)}>
        <div className="w-8 h-px" style={{ background: O }} />
        <span className="font-mono text-[9px] tracking-[5px] uppercase" style={{ color: ACCENT2 }}>{tag}</span>
      </motion.div>
      <motion.h2 className="font-bebas leading-none text-white" style={{ fontSize: "clamp(52px,7vw,96px)", letterSpacing: "2px" }} {...fadeUp(0.1)}>
        {title}{sub && (
          <span style={{
            backgroundImage: `linear-gradient(100deg, ${ACCENT2}, ${LILAC})`,
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}> {sub}</span>
        )}
      </motion.h2>
      <motion.div className="w-14 h-[3px] mt-4 rounded-full" style={{ background: `linear-gradient(90deg, ${O}, ${LILAC})` }} {...fadeUp(0.2)} />
    </div>
  );
}

/* ─── ABOUT ─── */
export function About({ hideSectionHeader } = {}) {
  const SKILLS = {
    Languages: ["C","C++","Python","Java","JavaScript","HTML","CSS","SQL"],
    "Frameworks & Libraries": ["React.js","Django","FastAPI","NodeJS","PySpark"],
    "Databases & Data Stores": ["MySQL","PostgreSQL","MongoDB","Snowflake"],
    "Cloud & DevOps": ["AWS EC2","Docker","Render","Vercel"],
    "APIs & Integrations": ["OpenAI API","Ollama","Twilio","WATI","Meta APIs","Google APIs","PostHog APIs","XAPI"],
  };
  return (
    <section id="about" className="relative pt-10 pb-28 px-8 lg:px-20 overflow-hidden" style={{ background: BG }}>
      <Blobs variant={1} />
      {/* BG watermark text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bebas select-none pointer-events-none opacity-[0.03]"
        style={{ fontSize: "22vw", letterSpacing: "-4px", color: LILAC, whiteSpace: "nowrap" }}>
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Photo side — blended edges, no hard card frame */}
        <motion.div className="relative" {...fadeUp(0)}>
          <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img src="/manash-gaming.png" alt="Manash" className="w-full h-full object-cover"
              style={{
                objectPosition: "75% 30%",
                filter: "brightness(0.92) contrast(1.05) saturate(0.95)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                WebkitMaskComposite: "intersect",
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                maskComposite: "intersect",
              }} />
            <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: `linear-gradient(to top, ${BG}, transparent)` }} />
          </div>
          {/* floating exp badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl"
            style={{ background: `linear-gradient(135deg, ${O}, ${PRIMARY})`, boxShadow: `0 20px 50px -15px ${O}88` }}
            animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="font-bebas text-4xl text-white leading-none">3+</div>
            <div className="font-mono text-[9px] tracking-[2px] text-white/70 uppercase">Years Exp</div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <div>
          {!hideSectionHeader && <SectionHeader tag="01 — About" title="Who I" sub="Am" />}
          <motion.p className="leading-relaxed mb-6 text-[15px]" style={{ color: "rgba(222,220,255,0.55)" }} {...fadeUp(0.15)}>
            Full Stack Engineer at <span style={{ color: ACCENT2, fontWeight: 600 }}>Avo Automation</span>, Bengaluru — building AI-powered agents,
            managing deployments, and shipping web pages on HubSpot. Previously spent 2+ years as SDE at Meeraq (ReactJS, Django, MySQL).
          </motion.p>
          <motion.p className="leading-relaxed mb-10 text-[15px]" style={{ color: "rgba(222,220,255,0.5)" }} {...fadeUp(0.2)}>
            Off-screen: clutching PUBG lobbies at Ace Eliminator, cheering for MSD,
            exploring new routes, and grinding LeetCode past midnight.
          </motion.p>

          {Object.entries(SKILLS).map(([cat, items], ci) => (
            <motion.div key={cat} className="mb-5" {...fadeUp(0.28 + ci * 0.07)}>
              <div className="font-mono text-[8px] tracking-[4px] uppercase mb-2.5" style={{ color: ACCENT2 }}>{cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="px-2.5 py-1 rounded-lg font-mono text-[9px] tracking-wider transition-all cursor-default"
                    style={{ border: `1px solid ${LINE}`, color: "rgba(222,220,255,0.45)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT2}80`; e.currentTarget.style.color = ACCENT2; e.currentTarget.style.background = "rgba(67,59,255,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = LINE; e.currentTarget.style.color = "rgba(222,220,255,0.45)"; e.currentTarget.style.background = "transparent"; }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div className="mt-10 p-5 rounded-xl border-l-2 flex gap-4" style={{ borderColor: ACCENT2, background: "rgba(67,59,255,0.06)" }} {...fadeUp(0.5)}>
            <div>
              <div className="font-mono text-[8px] tracking-[3px] uppercase mb-1" style={{ color: ACCENT2 }}>Education</div>
              <div className="text-white font-semibold">RNS Institute of Technology</div>
              <div className="text-sm font-mono" style={{ color: "rgba(222,220,255,0.4)" }}>B.E. Information Science · CGPA 9.21 · 2019–2023</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ─── */
const PROJECTS = [
  { type:"AI / RAG", name:"IT Support Chatbot", desc:"Private RAG chatbot with ChromaDB + Llama 3 via Ollama. Deployed on AWS EC2 for low-latency private query handling.", stack:["React","FastAPI","ChromaDB","Llama 3","AWS EC2"], live:"#", github:"https://github.com/8bit-Manash", img:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=70" },
  { type:"Full Stack + AI", name:"AI Notes App", desc:"Full-stack notes with Hugging Face summarization, lazy loading optimization. Deployed on Vercel + Render.", stack:["ReactJS","FastAPI","MongoDB","Hugging Face"], live:"#", github:"https://github.com/8bit-Manash", img:"https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600&q=70" },
  { type:"Productivity", name:"Habit & Goal Tracker", desc:"React 18 habit tracker with Recharts visualizations, replacing spreadsheet-based tracking.", stack:["React 18","Vite","Recharts"], live:"#", github:"https://github.com/8bit-Manash", img:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=70" },
  { type:"Work — Internal", name:"AvoRecon / Release-IQ", desc:"Copilot Studio AI agent for automated ADO release notes. Power Automate + WIQL + Claude Sonnet integration.", stack:["Copilot Studio","Power Automate","Azure DevOps","Claude Sonnet"], live:null, github:null, img:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70" },
  { type:"LLM Engineering", name:"IT Helpdesk LLM", desc:"Custom LLM trained from scratch on 1,000-pair IT Q&A dataset on Kaggle T4 GPU with PyTorch.", stack:["PyTorch","Kaggle GPU","Hugging Face","Python"], live:"https://www.kaggle.com/manashmadhukar20", github:"https://github.com/8bit-Manash", img:"https://images.unsplash.com/photo-1685478536578-62f2ffd6b5e1?w=600&q=70" },
  { type:"Security", name:"Password Builder", desc:"Customizable password generator with character type selection and configurable length for secure creation.", stack:["ReactJS","Tailwind CSS","JavaScript"], live:"#", github:"https://github.com/8bit-Manash", img:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=70" },
  { type:"Automation", name:"Instagram & Facebook Auto-Poster", desc:"Automated social media pipeline that fetches videos from Google Drive and publishes them to Instagram and Facebook via Meta APIs, with Sheets-based upload tracking.", stack:["Python","Meta Graph API","Google Drive API","Google Sheets API","Render"], live:null, github:null, img:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=70" },
  { type:"Work — Internal", name:"Documentation Copilot Agent", desc:"Copilot Studio agent that auto-generates and maintains internal product documentation from source updates, cutting manual doc upkeep for the team.", stack:["Copilot Studio","Power Automate","Azure DevOps","SharePoint"], live:null, github:null, img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=70" },
  { type:"Work — Analytics", name:"xAPI Activity Tracking", desc:"Configured xAPI across the product to capture every user action as structured statements, feeding a central analytics pipeline for behavior tracking.", stack:["xAPI","FastAPI","Python","PostHog"], live:null, github:null, img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70" },
  { type:"Work — AI", name:"Org Website Chatbots", desc:"Embeddable AI chatbot widgets deployed across organization websites to handle visitor queries and support requests in real time.", stack:["React","FastAPI","OpenAI API","Embeddable Widget JS"], live:null, github:null, img:"https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=70" },
];

export function Projects({ hideSectionHeader } = {}) {
  const [hov, setHov] = useState(null);
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <section id="projects" className="relative pt-10 pb-28 px-8 lg:px-20 overflow-hidden" style={{ background: BG_SOFT }}>
      <Blobs variant={2} />
      <div className="max-w-7xl mx-auto relative z-10">
        {!hideSectionHeader && <SectionHeader tag="02 — Projects" title="What I've" sub="Built" />}

        {/* Uniform grid — all projects same size, no featured card, no links */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {PROJECTS.map((p, i) => (
            <motion.div key={i} variants={itemA} onMouseMove={onMove}
              className="relative overflow-hidden group cursor-default transition-all duration-300 rounded-2xl"
              style={{ background: CARD, border: `1px solid ${hov === i ? ACCENT2 + "66" : LINE}` }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(67,59,255,0.16), transparent 60%)` }} />
              <div className="overflow-hidden relative" style={{ height: 140 }}>
                <img src={p.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: "brightness(0.28) saturate(0.5)" }} />
                <div className="absolute inset-x-0 top-0" style={{ height: 140, background: `linear-gradient(to bottom, transparent 40%, ${CARD})` }} />
              </div>
              <div className="p-4 relative">
                <div className="font-mono text-[7.5px] tracking-[3px] uppercase mb-1.5" style={{ color: ACCENT2 }}>{p.type}</div>
                <h3 className="font-bebas text-white text-lg leading-none mb-1.5 transition-colors" style={{ color: hov === i ? LILAC : "#fff" }}>{p.name}</h3>
                <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(222,220,255,0.45)" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(s => <span key={s} className="px-1.5 py-0.5 rounded-md font-mono text-[8px]" style={{ background: "rgba(222,220,255,0.05)", border: `1px solid ${LINE}`, color: "rgba(222,220,255,0.4)" }}>{s}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── GAMING ─── */
const GAMES = [
  { game:"PUBG Mobile", rank:"ACE ELIMINATOR", detail:"Zone control · High-pressure clutch plays", power:92, img:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=700&q=70" },
  { game:"Call of Duty", rank:"Ranked Player", detail:"Hardpoint specialist · Aggressive push", power:78, img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&q=70" },
  { game:"Valorant", rank:"Competitive", detail:"Precision aim · Post-plant mentality", power:81, img:"/manash-gaming.png", fit:"contain" },
  { game:"Cricket", rank:"Active Player", detail:"MSD Fan · Finisher's mentality on field", power:88, img:"https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&q=70" },
];

export function Gaming({ hideSectionHeader } = {}) {
  return (
    <section id="gaming" className="py-20 px-8 lg:px-20 relative overflow-hidden" style={{ background: BG }}>
      <Blobs variant={1} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bebas select-none pointer-events-none opacity-[0.03]"
        style={{ fontSize: "20vw", color: LILAC, writingMode: "vertical-rl" }}>ARENA</div>
      <div className="max-w-7xl mx-auto relative z-10">
        {!hideSectionHeader && <SectionHeader tag="03 — Gaming" title="In The" sub="Arena" />}
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {GAMES.map((g, i) => (
            <motion.div key={i} variants={itemA} whileHover={{ y: -6 }}
              className="relative overflow-hidden group cursor-default rounded-xl transition-all duration-300"
              style={{ aspectRatio: "3/4", maxWidth: 200, border: "1px solid rgba(222,220,255,0.08)" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 0 1px ${ACCENT2}80, 0 16px 36px -14px ${O}66`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
              {g.fit === "contain" ? (
                <>
                  {/* blurred cover fill as an ambient "effect" behind the photo */}
                  <img src={g.img} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-125"
                    style={{ filter: "blur(18px) brightness(0.5) saturate(1.2)" }} />
                  {/* the real photo, fully visible — letterboxed, never cropped */}
                  <img src={g.img} alt={g.game} className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.85) saturate(1.05)" }} />
                </>
              ) : (
                <img src={g.img} alt={g.game} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: "brightness(0.32) saturate(0.55)", objectPosition: g.pos || "50% 50%" }} />
              )}
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BG}f5 0%, transparent 62%)` }} />

              {/* scanline sweep, only animates on hover */}
              <div className="absolute inset-x-0 h-12 opacity-0 group-hover:opacity-100 group-hover:animate-scanline pointer-events-none"
                style={{ background: `linear-gradient(to bottom, transparent, ${ACCENT2}30, transparent)` }} />

              {/* HUD corner brackets — appear on hover */}
              {[["top-2 left-2","border-t border-l"],["top-2 right-2","border-t border-r"]].map(([pos, brd], ci) => (
                <div key={ci} className={`absolute ${pos} w-3 h-3 ${brd} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: ACCENT2 }} />
              ))}

              <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 group-hover:h-[3px] rounded-full" style={{ background: `linear-gradient(90deg, ${O}, ${LILAC})` }} />
              <div className="absolute top-2 right-2 font-bebas text-3xl leading-none select-none" style={{ color: "rgba(67,59,255,0.15)" }}>{String(i+1).padStart(2,"0")}</div>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="font-bebas text-white text-base leading-none mb-1">{g.game}</div>
                <div className="font-mono text-[8px] tracking-[1.5px] uppercase font-bold mb-1.5" style={{ color: ACCENT2 }}>{g.rank}</div>
                <div className="font-mono text-[7.5px] tracking-wide mb-2 line-clamp-1" style={{ color: "rgba(222,220,255,0.4)" }}>{g.detail}</div>

                {/* animated "power level" HUD bar */}
                <div className="flex items-center gap-1.5">
                  <div className="flex-1 h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(222,220,255,0.1)" }}>
                    <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${O}, ${ACCENT2})` }}
                      initial={{ width: "0%" }} whileInView={{ width: `${g.power}%` }} viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.16,1,0.3,1] }} />
                  </div>
                  <span className="font-mono text-[7px]" style={{ color: "rgba(222,220,255,0.35)" }}>{g.power}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── TRAVEL ─── */
const PLACES = [
  { name:"Mountains", sub:"Himalayas & Western Ghats", img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=70" },
  { name:"Beaches", sub:"South India Coastline", img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=70" },
  { name:"Heritage", sub:"Mysore Palace, Karnataka", img:"/manash-travel-2.png", pos:"50% 65%" },
  { name:"Cities", sub:"Bengaluru · Mumbai · Delhi", img:"https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=700&q=70" },
  { name:"Road Trips", sub:"Random drives, best vibes", img:"/manash-travel-1.png", pos:"50% 30%" },
  { name:"Next Stop", sub:"TBD — always planning", img:"https://images.unsplash.com/photo-1488085061387-422e29b40080?w=700&q=70", highlight:true },
];

export function Travel({ hideSectionHeader } = {}) {
  return (
    <section id="travel" className="py-28 px-8 lg:px-20 relative overflow-hidden" style={{ background: BG_SOFT }}>
      <Blobs variant={2} />
      <div className="max-w-7xl mx-auto relative z-10">
        {!hideSectionHeader && <SectionHeader tag="04 — Travel" title="Explorer" sub="Mode" />}
        <motion.blockquote className="mb-12 font-mono text-sm italic" style={{ borderLeft: `2px solid ${ACCENT2}`, paddingLeft: "1.25rem", color: "rgba(222,220,255,0.4)" }} {...fadeUp(0.1)}>
          "The world is too big to stay in one terminal. I commit code by day and explore coordinates by night."
        </motion.blockquote>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3" variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {PLACES.map((p, i) => (
            <motion.div key={i} variants={itemA} whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden group cursor-default rounded-xl" style={{ aspectRatio: "4/3", outline: p.highlight ? `2px solid ${ACCENT2}` : "none" }}>
              <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: "brightness(0.4) saturate(0.65)", objectPosition: p.pos || "50% 50%" }} />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BG_SOFT}f0 0%, transparent 55%)` }} />
              {p.highlight && <div className="absolute top-3 right-3 font-mono text-[8px] tracking-[2px] uppercase px-2 py-1 rounded-md" style={{ background: O, color: "#fff" }}>Next ↗</div>}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-bebas text-white text-xl leading-none">{p.name}</div>
                <div className="font-mono text-[9px] tracking-wider mt-0.5" style={{ color: "rgba(222,220,255,0.4)" }}>{p.sub}</div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${O}, ${LILAC})` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── YOUTUBE ─── */
export function YouTube({ hideSectionHeader } = {}) {
  return (
    <section id="youtube" className="py-28 px-8 lg:px-20 relative overflow-hidden" style={{ background: BG }}>
      <Blobs variant={1} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          {!hideSectionHeader && <SectionHeader tag="05 — YouTube" title="Content" sub="Creator" />}
          <motion.p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(222,220,255,0.5)" }} {...fadeUp(0.15)}>
            Running <span style={{ color: ACCENT2, fontWeight: 600 }}>Gyaan Shots</span> — dropping knowledge on tech, coding tips, travel vlogs, and gaming content.
          </motion.p>
          <motion.div className="space-y-3 mb-10" {...fadeUp(0.2)}>
            {[["💻","Tech & Coding","Tutorials & Tips"],["✈️","Travel Vlogs","Exploring India"],["🎮","Gaming","PUBG Clips & Gameplays"],["🤖","AI Tools","Gyaan (Knowledge) Shots"]].map(([ic,t,s],i) => (
              <div key={i} className="flex items-center gap-4 py-3 transition-all cursor-default group rounded-lg" style={{ borderBottom: `1px solid ${LINE}` }}
                onMouseEnter={e => e.currentTarget.style.borderBottomColor = `${ACCENT2}55`}
                onMouseLeave={e => e.currentTarget.style.borderBottomColor = LINE}>
                <span className="text-xl w-8">{ic}</span>
                <div>
                  <div className="text-sm font-semibold text-white transition-colors">{t}</div>
                  <div className="font-mono text-[9px] tracking-wider" style={{ color: "rgba(222,220,255,0.35)" }}>{s}</div>
                </div>
                <span className="ml-auto text-sm transition-colors" style={{ color: "rgba(222,220,255,0.25)" }}>↗</span>
              </div>
            ))}
          </motion.div>
          <motion.a href="https://www.youtube.com/@gyaanshots-no1" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl font-mono text-[11px] tracking-[3px] uppercase font-bold transition-all hover:-translate-y-0.5"
            style={{ background: "#ff0033", color: "#fff" }} {...fadeUp(0.3)}>
            ▶ Subscribe on YouTube
          </motion.a>
        </div>
        <motion.div className="relative" {...fadeUp(0.1)}>
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10", border: `1px solid ${LINE}` }}>
            <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=70" alt="YouTube" className="w-full h-full object-cover" style={{ filter: "brightness(0.32) saturate(0.55)" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl" style={{ background: "#ff0033", boxShadow: "0 0 40px rgba(255,0,51,0.5)" }}>▶</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="font-bebas text-white text-3xl leading-none">Gyaan Shots</div>
              <div className="font-mono text-[9px] tracking-wider" style={{ color: "rgba(222,220,255,0.45)" }}>@gyaanshots-no1</div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${O}, ${LILAC})` }} />
          </div>
          <div className="absolute -bottom-4 -right-4 w-28 h-28 border rounded-2xl" style={{ borderColor: "rgba(67,59,255,0.2)" }} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CODING ─── */
const PLATFORMS = [
  { name:"LeetCode", stat:"350+", sub:"Problems Solved", note:"Rank 3155 · Weekly Contest 336", color:"#ffa116", url:"https://leetcode.com/u/manashmadhukar20/" },
  { name:"CodeChef", stat:"1687", sub:"Max Rating", note:"Global Rank 361 · May Cook-Off 2022", color:"#67a84c", url:"https://www.codechef.com/users/manashmadhukar" },
  { name:"GeeksForGeeks", stat:"200+", sub:"Problems Solved", note:"", color:"#2bbc64", url:"https://www.geeksforgeeks.org/user/manashmadhukar" },
  { name:"Codeforces", stat:"Active", sub:"Competitive Programmer", note:"", color:"#0077ff", url:"https://codeforces.com/profile/manashmadhukar" },
  { name:"InterviewBit", stat:"Active", sub:"Interview Prep", note:"", color:"#00c0dd", url:"https://www.interviewbit.com/profile/manash-madhukar" },
  { name:"GitHub", stat:"8bit-Manash", sub:"Open Source & Projects", note:"", color:"#e0e0e0", url:"https://github.com/8bit-Manash" },
];

export function Coding({ hideSectionHeader } = {}) {
  return (
    <section id="coding" className="py-28 px-8 lg:px-20 relative overflow-hidden" style={{ background: BG_SOFT }}>
      <Blobs variant={2} />
      <div className="max-w-7xl mx-auto relative z-10">
        {!hideSectionHeader && <SectionHeader tag="06 — Competitive Coding" title="Grind" sub="Stats" />}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-3"
          variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {PLATFORMS.map((p, i) => (
            <motion.a key={i} href={p.url} target="_blank" rel="noreferrer" variants={itemA}
              className="group block p-8 text-center transition-all rounded-2xl" style={{ background: CARD, border: "2px solid transparent" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#110e38"; e.currentTarget.style.borderColor = p.color; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = CARD; e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div className="font-mono text-[8px] tracking-[3px] uppercase mb-2 transition-colors" style={{ color: p.color }}>{p.name}</div>
              <div className="font-bebas text-white text-4xl leading-none mb-1 transition-colors">{p.stat}</div>
              <div className="font-mono text-[9px]" style={{ color: "rgba(222,220,255,0.35)" }}>{p.sub}</div>
              {p.note && <div className="font-mono text-[8px] mt-2" style={{ color: "rgba(222,220,255,0.2)" }}>{p.note}</div>}
            </motion.a>
          ))}
        </motion.div>
        <motion.div className="mt-6 p-5 flex items-center gap-4 rounded-xl" style={{ borderLeft: `2px solid ${ACCENT2}`, background: "rgba(67,59,255,0.06)" }} {...fadeUp(0.4)}>
          <span className="font-bebas text-2xl" style={{ color: ACCENT2 }}>🏆</span>
          <div>
            <span className="text-white font-semibold">Rank 3529</span>
            <span className="text-sm" style={{ color: "rgba(222,220,255,0.45)" }}> in Google Kickstart Round-H 2021</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
export function Contact({ hideSectionHeader } = {}) {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);
  const showToast = msg => { setToast(msg); setTimeout(() => setToast(null), 3500); };
  const submit = async () => {
    if (!form.name || !form.email || !form.message) { showToast("Please fill all fields"); return; }
    setSending(true);
    try {
      const API_BASE = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_BASE}/api/contact/`, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(form) });
      showToast(res.ok ? "Your connection request has been submitted. I'll connect with you soon!" : "Couldn't reach the server — please try again in a bit.");
      if (res.ok) setForm({ name:"", email:"", message:"" });
    } catch { showToast("Couldn't reach the server — please try again in a bit."); }
    setSending(false);
  };
  const SOCIALS = [
    { label:"GitHub", val:"8bit-Manash", href:"https://github.com/8bit-Manash", color:"#fff",
      icon: <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/> },
    { label:"LinkedIn", val:"manash-madhukar-4311a8200", href:"https://www.linkedin.com/in/manash-madhukar-4311a8200/", color:"#0A66C2",
      icon: <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.44zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z"/> },
    { label:"Email", val:"manastiwary2067@gmail.com", href:"mailto:manastiwary2067@gmail.com", color:"#EA4335",
      icon: <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/> },
    { label:"YouTube", val:"@gyaanshots-no1", href:"https://www.youtube.com/@gyaanshots-no1", color:"#FF0000",
      icon: <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.35 3.6z"/> },
  ];
  return (
    <section id="contact" className="pt-10 pb-28 px-8 lg:px-20 relative overflow-hidden" style={{ background: BG }}>
      <Blobs variant={1} />
      <div className="absolute right-0 bottom-0 font-bebas select-none pointer-events-none opacity-[0.025]"
        style={{ fontSize: "18vw", color: LILAC }}>CONTACT</div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        <div>
          {!hideSectionHeader && <SectionHeader tag="07 — Contact" title="Let's" sub="Connect" />}
          <motion.p className="text-[15px] leading-relaxed mb-10" style={{ color: "rgba(222,220,255,0.45)" }} {...fadeUp(0.15)}>
            Open to freelance projects, full-time roles, collabs, and cool conversations.
          </motion.p>
          {SOCIALS.map((s, i) => (
            <motion.a key={i} href={s.href} target={s.href.startsWith("m") ? undefined : "_blank"} rel="noreferrer"
              className="flex items-center gap-4 py-5 group transition-all"
              style={{ borderBottom: `1px solid ${LINE}` }}
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = `${ACCENT2}66`}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = LINE}
              {...fadeUp(0.2 + i * 0.08)}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}
                onMouseEnter={e => { e.currentTarget.style.background = `${s.color}18`; e.currentTarget.style.borderColor = `${s.color}66`; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = LINE; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={s.color} style={{ opacity: 0.65, transition: "opacity 0.25s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0.65}>
                  {s.icon}
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-mono text-[8px] tracking-[3px] uppercase mb-0.5" style={{ color: ACCENT2 }}>{s.label}</div>
                <div className="text-sm transition-colors" style={{ color: "rgba(222,220,255,0.55)" }}>{s.val}</div>
              </div>
              <span className="transition-all" style={{ color: "rgba(222,220,255,0.25)" }}>↗</span>
            </motion.a>
          ))}
        </div>
        <motion.div {...fadeUp(0.2)}>
          <div className="relative rounded-2xl overflow-hidden" style={{ border: `1px solid ${LINE}` }}>
            <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${O}, ${LILAC})` }} />
            <div className="p-8" style={{ background: CARD }}>
              <div className="font-mono text-[9px] tracking-[4px] uppercase mb-6" style={{ color: ACCENT2 }}>// Drop a Message</div>
              {["name","email","message"].map(f => (
                <div key={f} className="mb-5">
                  <label className="block font-mono text-[8px] tracking-[3px] uppercase mb-2" style={{ color: "rgba(122,107,255,0.85)" }}>{f}</label>
                  {f === "message"
                    ? <textarea rows={5} value={form[f]} onChange={e => setForm({...form,[f]:e.target.value})} placeholder="What's on your mind?"
                        className="w-full bg-transparent px-4 py-3 rounded-lg text-sm font-mono outline-none resize-none placeholder-white/15"
                        style={{ border: `1px solid ${LINE}`, color: "rgba(255,255,255,0.85)" }}
                        onFocus={e => e.target.style.borderColor = `${ACCENT2}80`}
                        onBlur={e => e.target.style.borderColor = LINE} />
                    : <input type={f==="email"?"email":"text"} value={form[f]} onChange={e => setForm({...form,[f]:e.target.value})}
                        placeholder={f==="email"?"your@email.com":"Your name"}
                        className="w-full bg-transparent px-4 py-3 rounded-lg text-sm font-mono outline-none placeholder-white/15"
                        style={{ border: `1px solid ${LINE}`, color: "rgba(255,255,255,0.85)" }}
                        onFocus={e => e.target.style.borderColor = `${ACCENT2}80`}
                        onBlur={e => e.target.style.borderColor = LINE} />
                  }
                </div>
              ))}
              <button onClick={submit} disabled={sending}
                className="w-full py-3 rounded-lg font-mono text-[11px] tracking-[3px] uppercase font-bold disabled:opacity-50 transition-all hover:brightness-110"
                style={{ background: O, color: "#fff" }}>
                {sending ? "Sending..." : "Send Message →"}
              </button>
              <p className="font-mono text-[8px] text-center mt-4" style={{ color: "rgba(222,220,255,0.2)" }}>Messages saved to Excel via Django</p>
            </div>
          </div>
        </motion.div>
      </div>
      {toast && (
        <motion.div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl font-mono text-sm z-50"
          style={{ background: CARD, border: `1px solid ${ACCENT2}`, color: ACCENT2 }}
          initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}>
          {toast}
        </motion.div>
      )}
    </section>
  );
}