import React, { useState } from "react";
import { motion } from "framer-motion";
import Resume from "../shared/Resume";
import { Github, Linkedin, Mail, Download, Code, Zap, Globe } from "lucide-react";
import { exportResumePdf } from "../../utils/pdfExport";

const HERO_CARDS = [
  { icon: <Code className="w-5 h-5" />, title: "Software Engineer", description: "Building performant, accessible, and responsive user interfaces" },
  { icon: <Zap className="w-5 h-5" />, title: "Performance Optimizer", description: "Optimizing applications for speed and efficiency" },
  { icon: <Globe className="w-5 h-5" />, title: "Web Developer", description: "Creating modern web solutions with cutting-edge technologies" },
];

const HERO_SOCIAL_LINKS = [
  { icon: <Github size={18} />, href: "https://github.com/OuThorninvithyea?tab=repositories", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:Vithyeasa@gmail.com", label: "Email" },
];

const Hero = () => {
  const [isExporting, setIsExporting] = useState(false);

  return (
    <section id="hero" className="relative">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-4">
          # Introduction
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4 break-words">
          Ou Thorninvithyea
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-6 font-mono">
          Software Engineer
        </p>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
          Passionate Software Engineer specializing in full-stack development,
          specializing in React, Go, Laravel, and modern API engineering. I build accessible,
          performant interfaces and scalable backend systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <button
            onClick={() => exportResumePdf(setIsExporting)}
            disabled={isExporting}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-sm"
          >
            <Download size={16} />
            {isExporting ? "Preparing..." : "Download CV"}
          </button>
          <a
            href="mailto:Vithyeasa@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-sm"
          >
            <Mail size={16} />
            Get In Touch
          </a>
        </div>

        <div className="flex items-center gap-3 mb-16">
          {HERO_SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HERO_CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div className="inline-flex p-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-4">
              {card.icon}
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div id="resume-print" style={{ position: "absolute", left: -10000, top: 0 }}>
        <Resume />
      </div>
    </section>
  );
};

export default Hero;
