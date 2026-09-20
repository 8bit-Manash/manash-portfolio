import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const G = "#7a6bff";     // kept the name "G" so nothing else needs renaming
const GOLD = "#dedcff";

const LINKS = [
  { label: "Home",     path: "/" },
  { label: "About",    path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact",  path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[9990] flex items-center justify-between px-8 lg:px-16 py-4"
        style={{
          background: scrolled
            ? "rgba(5,3,21,0.95)"
            : "rgba(5,3,21,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(122,107,255,0.2)"
            : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s",
        }}>

        {/* Logo — leaf mark only, no text */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* ripple rings on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="ripple-ring" />
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.8 7 4 11 4 15a8 8 0 0016 0c0-4-2.8-8-8-13z"
                fill={G} opacity="0.9"/>
              <path d="M12 8v10M12 8C10 11 8.5 13.5 8 16" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-bebas text-lg tracking-[3px] hidden sm:block" style={{ color: G }}>
            MANASH
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5 list-none">
          {LINKS.map(({ label, path }) => (
            <li key={label}>
              <NavLink to={path} end={path === "/"}
                style={({ isActive }) => ({
                  color: isActive ? G : "rgba(222,220,255,0.45)",
                })}
                className="relative px-3 py-1.5 font-mono text-[10px] tracking-[2px] uppercase transition-colors duration-200 block group">
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.div layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-px"
                        style={{ background: `linear-gradient(90deg, transparent, ${G}, transparent)` }} />
                    )}
                    {/* water-drop hover dot */}
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: G }} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-[5px] p-1 z-10">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            className="block w-5 h-px origin-center" style={{ background: G }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }}
            className="block w-5 h-px" style={{ background: G }} />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            className="block w-5 h-px origin-center" style={{ background: G }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[9980] flex flex-col items-center justify-center gap-6"
            style={{ background: "rgba(5,3,21,0.97)", backdropFilter: "blur(24px)" }}
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            {LINKS.map(({ label, path }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.055, ease: [0.16,1,0.3,1] }}>
                <NavLink to={path} end={path === "/"}
                  className="font-bebas text-5xl tracking-widest transition-colors"
                  style={({ isActive }) => ({ color: isActive ? G : "rgba(222,220,255,0.5)" })}>
                  {label}
                </NavLink>
              </motion.div>
            ))}
            {/* decorative leaf */}
            <div className="absolute bottom-10 right-10 opacity-10 animate-leaf">
              <svg width="80" height="80" viewBox="0 0 24 24">
                <path d="M12 2C6.8 7 4 11 4 15a8 8 0 0016 0c0-4-2.8-8-8-13z" fill={G}/>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}