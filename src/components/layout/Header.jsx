import React from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "../shared/ThemeToggle";

const Header = ({ onMenuClick, menuOpen }) => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-40 h-14 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between h-full px-4">
        <button
          onClick={onMenuClick}
          className="p-3 -ml-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
          aria-label="Open menu"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
        >
          <Menu size={20} />
        </button>

        <a
          href="#hero"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-7 h-7 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs font-mono">
            OT
          </div>
          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Ou Thorninvithyea
          </span>
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
