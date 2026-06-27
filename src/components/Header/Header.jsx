import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-xl py-4 font-pb sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-slate-300 text-sm">
          <li>
            <a href="#About" className="hover:text-white transition-colors duration-200">درباره من</a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-white transition-colors duration-200">پروژه‌های من</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-white transition-colors duration-200">تجربه کاری من</a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-white transition-colors duration-200">مهارت‌های من</a>
          </li>
          <li>
            <a href="#Certificates" className="hover:text-white transition-colors duration-200">گواهینامه‌های من</a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-white transition-colors duration-200">ارتباط با من</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-300 focus:outline-none ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="منو"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <h1 className="md:hidden text-slate-300 focus:outline-none ml-auto">پورتفولیو مبین نایبی‌زاده</h1>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-xl px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-4 text-slate-300 text-base">
            <li><a href="#About" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-white transition-colors">درباره من</a></li>
            <li><a href="#Projects" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-white transition-colors">پروژه‌های من</a></li>
            <li><a href="#Skills" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-white transition-colors">مهارت‌های من</a></li>
            <li><a href="#Contact" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-white transition-colors">ارتباط با من</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
