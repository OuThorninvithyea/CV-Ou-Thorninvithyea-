import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Code, Zap, Globe } from "lucide-react";

const HERO_CARDS = [
  { icon: <Code className="w-5 h-5" />, title: "Backend API Engineer", description: "Designing Go/Fiber APIs, auth flows, and PostgreSQL-backed services" },
  { icon: <Globe className="w-5 h-5" />, title: "Product UI Builder", description: "Shipping React interfaces that are responsive, accessible, and easy to use" },
  { icon: <Zap className="w-5 h-5" />, title: "Performance-Minded", description: "Keeping portfolio and product experiences fast, focused, and maintainable" },
];

const HERO_SOCIAL_LINKS = [
  { icon: <Github size={18} />, href: "https://github.com/OuThorninvithyea?tab=repositories", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ou-thornin-vithyea-256950389", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:Vithyeasa@gmail.com", label: "Email" },
];

const CV_PDF_PATH = "/assets/outhornnivithyea_cv.pdf";
const PROFILE_IMAGE_PATH = "/assets/profile/ou-thorninvithyea.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-mono text-primary-600 dark:text-primary-400 mb-4">
            # Introduction
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4 break-words">
            Ou Thorninvithyea
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-6 font-mono">
            Full-Stack / Backend Engineer
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
            I build Go APIs, React interfaces, and production-minded workflows for
            startup products, with a strong focus on backend architecture and clean user
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={CV_PDF_PATH}
              download="outhornnivithyea_cv.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors text-sm"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="mailto:Vithyeasa@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-sm"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-3">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xs sm:max-w-sm lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <img
              src={PROFILE_IMAGE_PATH}
              alt="Portrait of Ou Thorninvithyea"
              width="933"
              height="1200"
              className="aspect-[4/5] w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>

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
    </section>
  );
};

export default Hero;
