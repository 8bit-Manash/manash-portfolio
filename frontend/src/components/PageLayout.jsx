import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const G = "#7a6bff";     // kept the name "G" so nothing else needs renaming
const GOLD = "#dedcff";

function Footer() {
  return (
    <footer style={{ background: "var(--bg1)", borderTop: "1px solid rgba(122,107,255,0.14)" }}
      className="px-8 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
      {/* mark */}
      <div className="flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.8 7 4 11 4 15a8 8 0 0016 0c0-4-2.8-8-8-13z" fill={G} opacity="0.8"/>
        </svg>
        <span className="font-bebas text-xl tracking-[3px]" style={{ color: G }}>MANASH</span>
      </div>
      <p className="font-mono text-[9px] tracking-[3px] uppercase" style={{ color: "rgba(222,220,255,0.25)" }}>
        © 2025 Manash Madhukar · Full Stack · Bengaluru 🇮🇳
      </p>
      <div className="flex gap-6">
        {[["GitHub","https://github.com/8bit-Manash"],["LinkedIn","https://www.linkedin.com/in/manash-madhukar-4311a8200/"],["YouTube","https://www.youtube.com/@gyaanshots-no1"]].map(([l,h]) => (
          <a key={l} href={h} target="_blank" rel="noreferrer"
            className="font-mono text-[8px] tracking-[2px] uppercase transition-colors"
            style={{ color: "rgba(222,220,255,0.25)" }}
            onMouseEnter={e => e.currentTarget.style.color = G}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(222,220,255,0.25)"}>
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default function PageLayout({ children, tag, title, accent, hero }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg1)" }}>
      {/* spacer for fixed navbar */}
      <div className="h-[56px]" />

      {/* Custom per-page hero — bypasses the generic banner entirely */}
      {hero}

      <main>{children}</main>
      <Footer />
    </div>
  );
}