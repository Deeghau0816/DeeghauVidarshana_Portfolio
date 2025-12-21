import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `
      px-4 py-2 rounded-full text-sm font-medium
      transition-all duration-300
      ${
        isActive
          ? "bg-indigo-100 text-indigo-700 shadow-inner"
          : "text-slate-700 hover:text-indigo-600"
      }
      hover:tracking-wide hover:font-semibold
      hover:[text-shadow:
        0_1px_0_rgb(199_210_254),
        0_2px_0_rgb(165_180_252),
        0_6px_14px_rgba(99,102,241,0.55)
      ]
    `;

  // Close menu on route change (when a link is clicked)
  const handleLinkClick = () => setOpen(false);

  // Close menu on Esc
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <nav
          className="
            relative
            flex items-center justify-between
            rounded-full
            bg-white/80 backdrop-blur
            px-5 py-3
            border border-white/50
            shadow-[0_12px_35px_rgba(15,23,42,0.12)]
          "
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <div className="h-9 w-9 rounded-full bg-slate-100 shadow-md overflow-hidden">
              <img src="/logo.jpg" alt="Logo" className="h-full w-full object-cover" />
            </div>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/education" className={linkClass}>Education</NavLink>
            <NavLink to="/skills" className={linkClass}>Skills</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="
              md:hidden
              h-10 w-10
              grid place-items-center
              rounded-full
              border border-white/60
              bg-white/70
              shadow-sm
              transition
              hover:bg-white
            "
          >
            {/* Simple icon */}
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-slate-700 transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-slate-700 transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-slate-700 transition ${
                  open ? "translate-y-[-7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          {/* Mobile Dropdown */}
          <div
            className={`
              md:hidden
              absolute left-0 right-0 top-[calc(100%+10px)]
              px-2
              transition-all duration-300
              ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}
          >
            <div
              className="
                rounded-2xl
                bg-white/90 backdrop-blur
                border border-white/60
                shadow-[0_16px_45px_rgba(15,23,42,0.14)]
                p-2
              "
            >
              <div className="grid gap-2">
                <NavLink to="/" className={linkClass} onClick={handleLinkClick}>Home</NavLink>
                <NavLink to="/about" className={linkClass} onClick={handleLinkClick}>About</NavLink>
                <NavLink to="/projects" className={linkClass} onClick={handleLinkClick}>Projects</NavLink>
                <NavLink to="/education" className={linkClass} onClick={handleLinkClick}>Education</NavLink>
                <NavLink to="/skills" className={linkClass} onClick={handleLinkClick}>Skills</NavLink>
                <NavLink to="/contact" className={linkClass} onClick={handleLinkClick}>Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Optional: click-outside overlay to close */}
        {open && (
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "transparent" }}
          />
        )}
      </div>
    </header>
  );
}
