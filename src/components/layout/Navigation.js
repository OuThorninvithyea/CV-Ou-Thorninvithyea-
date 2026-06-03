import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../../data/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl border-b border-gray-100" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }} className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>
              OT
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <motion.button key={item.name} onClick={() => handleNavClick(item.href)} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive(item.href) ? "text-white" : scrolled ? "text-gray-600 hover:text-black" : "text-white/60 hover:text-white"}`}>
                {isActive(item.href) && (
                  <motion.span layoutId="nav-pill" className={`absolute inset-0 rounded-full ${scrolled ? "bg-black" : "bg-white/10"}`} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
                <span className="relative z-10">{item.name}</span>
              </motion.button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`relative z-50 p-2 rounded-full transition-all ${scrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} className="fixed top-16 sm:top-20 left-4 right-4 z-50">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {navItems.map((item, idx) => (
                  <motion.a key={item.name} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.06 }}
                    className={`flex items-center gap-3 px-5 py-4 transition-all ${isActive(item.href) ? "bg-black text-white" : "text-gray-700 hover:bg-gray-50"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive(item.href) ? "bg-white" : "bg-gray-300"}`} />
                    <span className="font-medium">{item.name}</span>
                    {isActive(item.href) && <span className="ml-auto text-xs opacity-60">Current</span>}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
