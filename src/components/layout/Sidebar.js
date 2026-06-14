import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import ThemeToggle from "../shared/ThemeToggle";
import useFocusTrap from "../../hooks/useFocusTrap";

const socialLinks = [
  {
    icon: <Github size={18} />,
    href: "https://github.com/OuThorninvithyea?tab=repositories",
    label: "GitHub",
  },
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  {
    icon: <Mail size={18} />,
    href: "mailto:Vithyeasa@gmail.com",
    label: "Email",
  },
];

const Sidebar = ({
  navItems,
  activeId,
  onNavClick,
  onClose,
  mobile = false,
}) => {
  const containerRef = useFocusTrap(mobile);

  const content = (
    <div ref={containerRef} className="flex flex-col h-full">
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("#hero");
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-sm font-mono">
            OT
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight">
              Ou Thorninvithyea
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Software Engineer
            </p>
          </div>
        </a>
        {mobile && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <p className="px-3 mb-2 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          On this page
        </p>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(item.href);
                  }}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-6 py-5 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Theme
          </span>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 mb-4">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Ou Thorninvithyea
        </p>
      </div>
    </div>
  );

  return mobile ? (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-y-0 left-0 z-50 w-[min(85vw,18rem)] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl"
    >
      {content}
    </motion.aside>
  ) : (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col">
      {content}
    </aside>
  );
};

export default Sidebar;
