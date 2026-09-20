import PageLayout from "../components/PageLayout";
import { Gaming } from "../sections/Sections";
import { motion } from "framer-motion";

const O = "#433bff";
const ACCENT2 = "#7a6bff";
const LILAC = "#dedcff";
const BG = "#050315";

/* Compact HUD-style hero for the Gaming page — replaces the oversized
   generic PageLayout banner. Uses the real gaming-setup photo, blended
   into the background the same way Hero.jsx blends the portrait. */
function GamingHero() {
  return (
    <div className="relative overflow-hidden" style={{ background: BG, height: "clamp(320px, 46vh, 480px)" }}>
      {/* photo — edge-blended, no card frame, same technique as Hero.jsx */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manash-gaming.png" alt=""
          className="absolute h-full object-cover"
          style={{
            right: 0, top: 0, width: "62%", left: "auto",
            objectPosition: "60% 30%",
            filter: "contrast(1.1) brightness(0.55) saturate(1.15)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 30%), " +
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 30%), " +
              "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskComposite: "intersect",
          }}
        />
        {/* scanline sweep over the photo for a game-HUD feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 h-24 animate-scanline"
            style={{ background: `linear-gradient(to bottom, transparent, ${ACCENT2}22, transparent)` }} />
        </div>
        {/* accent wash so photo sits in the same color world as the rest of the site */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${BG} 0%, transparent 42%)` }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${BG} 0%, transparent 30%)` }} />
        {/* blob glow */}
        <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full pointer-events-none animate-blob-slow"
          style={{ background: `radial-gradient(circle, ${O}, transparent 70%)`, filter: "blur(90px)", opacity: 0.3 }} />
      </div>

      {/* HUD corner brackets */}
      {[["top-6 left-6","border-t-2 border-l-2"],["top-6 right-6","border-t-2 border-r-2"],["bottom-6 left-6","border-b-2 border-l-2"],["bottom-6 right-6","border-b-2 border-r-2"]].map(([pos, brd], i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 ${brd} animate-hud-pulse pointer-events-none`} style={{ borderColor: ACCENT2 }} />
      ))}

      {/* content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20 max-w-7xl mx-auto">
        <motion.div className="flex items-center gap-3 mb-3"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="w-8 h-px" style={{ background: O }} />
          <span className="font-mono text-[9px] tracking-[5px] uppercase" style={{ color: ACCENT2 }}>03 — Gaming</span>
          <span className="w-1.5 h-1.5 rounded-full animate-blip" style={{ background: O }} />
          <span className="font-mono text-[8px] tracking-[2px] uppercase" style={{ color: "rgba(222,220,255,0.35)" }}>Status: Online</span>
        </motion.div>

        {/* glitch title — compact, not the old 108px monster */}
        <motion.div className="relative inline-block"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
          <h1 className="relative font-bebas leading-none text-white" style={{ fontSize: "clamp(38px,6vw,64px)", letterSpacing: "2px" }}>
            IN THE ARENA
            <span className="absolute inset-0 glitch-r pointer-events-none select-none" style={{ color: "#ff2ecb", opacity: 0.6, mixBlendMode: "screen" }} aria-hidden="true">IN THE ARENA</span>
            <span className="absolute inset-0 glitch-b pointer-events-none select-none" style={{ color: "#2effe0", opacity: 0.6, mixBlendMode: "screen" }} aria-hidden="true">IN THE ARENA</span>
          </h1>
        </motion.div>

        <motion.div className="mt-3 h-[3px] w-14 rounded-full"
          style={{ background: `linear-gradient(90deg, ${O}, ${LILAC})` }}
          initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.25 }} />

        <motion.p className="mt-4 font-mono text-[11px] tracking-wider max-w-md" style={{ color: "rgba(222,220,255,0.5)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          PUBG · Valorant · Call of Duty · Cricket — clutch plays and finisher instincts, on-screen and off.
        </motion.p>
      </div>
    </div>
  );
}

export default function GamingPage() {
  return (
    <PageLayout hero={<GamingHero />}>
      <Gaming hideSectionHeader />
    </PageLayout>
  );
}