import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "../hooks";
import { HERO_ROLES } from "../data";

// ── new palette (realtimecolors.com) ──
const BG = "#050315";
const PRIMARY = "#2f27ce";
const ACCENT = "#433bff";
const ACCENT2 = "#7a6bff";
const LILAC = "#dedcff";

export default function Hero() {
  const role = useTypewriter(HERO_ROLES);
  const [loaded, setLoaded] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // spotlight-follow glow on the primary CTA
  const handleBtnMove = (e) => {
    const r = btnRef.current.getBoundingClientRect();
    btnRef.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    btnRef.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden" style={{ background: BG }}>

      {/* ── HAIKEI-STYLE ANIMATED BLOBS (replaces the old photo background) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full animate-blob-slow"
          style={{ width: 520, height: 520, top: -160, left: -120, filter: "blur(90px)", opacity: 0.5,
            background: `radial-gradient(circle at 30% 30%, ${ACCENT}, transparent 70%)` }} />
        <div
          className="absolute rounded-full animate-blob-slower"
          style={{ width: 460, height: 460, top: 100, right: -140, filter: "blur(90px)", opacity: 0.45,
            background: `radial-gradient(circle at 60% 40%, ${PRIMARY}, transparent 70%)` }} />
        <div
          className="absolute rounded-full animate-blob"
          style={{ width: 380, height: 380, bottom: -140, left: "35%", filter: "blur(90px)", opacity: 0.4,
            background: `radial-gradient(circle at 50% 50%, ${ACCENT2}, transparent 70%)` }} />
        {/* subtle grid texture over the blobs */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(${LILAC} 1px, transparent 1px), linear-gradient(90deg, ${LILAC} 1px, transparent 1px)`,
            backgroundSize: "48px 48px" }} />
        {/* vignette so text stays readable */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(5,3,21,0.75) 100%)" }} />
      </div>

      {/* ── LEFT / RIGHT VERTICAL LABELS ── */}
      <div className="absolute left-5 top-1/2 z-10 hidden lg:block"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg) translateY(50%)", fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", letterSpacing: "4px", color: "rgba(222,220,255,0.25)", textTransform: "uppercase" }}>
        Bengaluru · India · 2026
      </div>
      <div className="absolute right-5 top-1/2 z-10 hidden lg:block"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%)", fontFamily: "'JetBrains Mono',monospace", fontSize: "9px", letterSpacing: "4px", color: "rgba(222,220,255,0.25)", textTransform: "uppercase" }}>
        React · Django · AI
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-32 pb-16 px-8 md:px-16 lg:px-20">

        <motion.div
          initial={{ scaleX: 0 }} animate={loaded ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }}
          className="absolute top-0 left-0 right-0 h-[2px] origin-left" style={{ background: ACCENT2 }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px" style={{ background: ACCENT2 }} />
          <span className="font-mono text-[10px] tracking-[5px] uppercase" style={{ color: ACCENT2 }}>
            Software Engineer
          </span>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "105%" }} animate={loaded ? { y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16,1,0.3,1] }}
            className="font-bebas text-white leading-none"
            style={{ fontSize: "clamp(72px, 12vw, 160px)", letterSpacing: "2px" }}>
            MANASH
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "105%" }} animate={loaded ? { y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.48, ease: [0.16,1,0.3,1] }}
            className="font-bebas leading-none text-shine"
            style={{
              fontSize: "clamp(72px, 12vw, 160px)", letterSpacing: "2px",
              backgroundImage: `linear-gradient(100deg, ${ACCENT2} 10%, ${LILAC} 50%, ${ACCENT2} 90%)`,
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>
            MADHUKAR
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={loaded ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}
          className="font-mono text-sm uppercase tracking-widest mb-8" style={{ color: "rgba(222,220,255,0.55)" }}>
          {role}<span className="animate-blink ml-0.5" style={{ color: ACCENT2 }}>|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-10">
          {["🏏 MSD Fan","🎮 PUBG Ace","✈️ Explorer","📺 Creator"].map((b, i) => (
            <span key={i} className="px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase"
              style={{ border: `1px solid ${ACCENT}66`, color: "rgba(255,255,255,0.6)", background: "rgba(67,59,255,0.08)" }}>
              {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.15, duration: 0.5 }}
          className="flex flex-wrap gap-4">
          <button
            ref={btnRef}
            onMouseMove={handleBtnMove}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="relative overflow-hidden font-mono text-[11px] tracking-[3px] uppercase px-8 py-3 rounded-xl font-bold transition-transform hover:-translate-y-0.5"
            style={{ background: ACCENT, color: "#fff" }}>
            <span
              className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
              style={{ background: `radial-gradient(140px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.35), transparent 70%)` }} />
            <span className="relative">View My Work</span>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-mono text-[11px] tracking-[3px] uppercase px-8 py-3 rounded-xl transition-all"
            style={{ border: "1px solid rgba(222,220,255,0.25)", color: "rgba(222,220,255,0.7)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT2; e.currentTarget.style.color = ACCENT2; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(222,220,255,0.25)"; e.currentTarget.style.color = "rgba(222,220,255,0.7)"; }}>
            Let's Talk
          </button>
        </motion.div>

        {/* quick stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.3, duration: 0.5 }}
          className="flex flex-wrap gap-10 mt-14">
          {[["350+","LeetCode Solved"],["9.21","CGPA"],["361","CodeChef Rank"],["3+","Years Exp"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-bebas text-3xl leading-none" style={{ color: LILAC }}>{n}</div>
              <div className="font-mono text-[9px] tracking-[2px] uppercase mt-1" style={{ color: "rgba(222,220,255,0.4)" }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── PHOTO — full-bleed, edge-blended into the background (no card/box) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }} animate={loaded ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1.1, delay: 0.4, ease: [0.16,1,0.3,1] }}
        className="absolute inset-0 z-[1] hidden md:block pointer-events-none"
        aria-hidden="true">
        <img
          src="/manash.png" alt=""
          className="absolute h-full object-cover"
          style={{
            right: 0,
            top: 0,
            width: "58%",
            left: "auto",
            objectPosition: "70% 18%",
            filter: "contrast(1.08) brightness(0.9) saturate(0.9)",
            /* fade the left, top and bottom edges into the page background so it reads
               as one scene rather than a boxed photo */
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 32%), " +
              "linear-gradient(to bottom, transparent 0%, black 10%, black 88%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 32%), " +
              "linear-gradient(to bottom, transparent 0%, black 10%, black 88%, transparent 100%)",
            maskComposite: "intersect",
          }}
        />
        {/* faint accent wash over the photo so it sits inside the same color world as the blobs */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${BG} 0%, transparent 38%, transparent 62%, ${BG}00 100%)`, mixBlendMode: "normal" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${BG} 0%, transparent 22%)` }} />
      </motion.div>

      {/* name/role tag for the photo — kept as normal page content, not glued to a card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-10 right-8 md:right-16 z-[2] hidden md:block text-right">
        <div className="font-mono text-[9px] tracking-[3px] uppercase" style={{ color: ACCENT2 }}>Software Engineer · Avo Automation</div>
      </motion.div>

      {/* side dot nav */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {["home","about","projects","gaming","travel","youtube","contact"].map((id) => (
          <button key={id} title={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center justify-end gap-2">
            <span className="absolute right-5 font-mono text-[8px] tracking-[2px] uppercase opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 whitespace-nowrap rounded"
              style={{ color: ACCENT2, background: "#0d0b2b", border: "1px solid rgba(222,220,255,0.1)" }}>{id}</span>
            <div className="w-1.5 h-1.5 rounded-full border transition-all duration-300"
              style={{ borderColor: "rgba(222,220,255,0.3)", background: "transparent" }}
              onMouseEnter={e => { e.target.style.background = ACCENT2; e.target.style.borderColor = ACCENT2; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(222,220,255,0.3)"; }} />
          </button>
        ))}
      </div>
    </section>
  );
}