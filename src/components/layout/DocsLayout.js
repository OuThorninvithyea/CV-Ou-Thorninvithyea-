import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { navItems } from "../../data/navigation";
import useScrollSpy from "../../hooks/useScrollSpy";

const DocsLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));
  const activeId = useScrollSpy(sectionIds);

  const handleNavClick = (href) => {
    setSidebarOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <Sidebar
        navItems={navItems}
        activeId={activeId}
        onNavClick={handleNavClick}
      />

      <AnimatePresence>
        {sidebarOpen && (
          <>
            <div
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
        <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16">{children}</div>
      </main>
    </div>
  );
};

export default DocsLayout;
