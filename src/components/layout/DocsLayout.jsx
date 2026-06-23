import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { navItems } from "../../data/navigation";
import useScrollSpy from "../../hooks/useScrollSpy";

const DocsLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    [],
  );
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    if (!sidebarOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [sidebarOpen]);

  const handleNavClick = (href) => {
    setSidebarOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header onMenuClick={() => setSidebarOpen(true)} menuOpen={sidebarOpen} />

      <Sidebar
        navItems={navItems}
        activeId={activeId}
        onNavClick={handleNavClick}
      />

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <Sidebar
              mobile
              navItems={navItems}
              activeId={activeId}
              onNavClick={handleNavClick}
              onClose={() => setSidebarOpen(false)}
            />
          </>
        )}
      </AnimatePresence>

      <main className="lg:ml-64 min-h-screen pt-14 lg:pt-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DocsLayout;
