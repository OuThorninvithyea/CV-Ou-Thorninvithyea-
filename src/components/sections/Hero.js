import React, { useState } from "react";
import { motion } from "framer-motion";
import Resume from "../shared/Resume";
import { Github, Linkedin, Mail, Download, Code, Zap, Globe, ChevronDown } from "lucide-react";
import { exportResumePdf } from "../../utils/pdfExport";

const Hero = () => {
  const [isExporting, setIsExporting] = useState(false);

  const cards = [
    { icon: <Code className="w-6 h-6" />, title: "Software Engineer", description: "Building performant, accessible, and responsive user interfaces", delay: 0.1 },
    { icon: <Zap className="w-6 h-6" />, title: "Performance Optimizer", description: "Optimizing applications for speed and efficiency", delay: 0.3 },
    { icon: <Globe className="w-6 h-6" />, title: "Web Developer", description: "Creating modern web solutions with cutting-edge technologies", delay: 0.5 },
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center lg:text-left min-w-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-8">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-white" /></span>
                Available for opportunities
              </motion.div>

              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                Ou Thorninvithyea
              </motion.h1>

              <motion.p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                Passionate Software Engineer with 2+ years of experience in front-end development, specializing in React, Go, Laravel, and modern UI engineering.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                <button onClick={() => exportResumePdf(setIsExporting)} disabled={isExporting} className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all text-sm sm:text-base">
                  <Download size={18} />{isExporting ? "Preparing..." : "Download CV"}
                </button>
                <a href="mailto:Vithyeasa@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all text-sm sm:text-base">
                  <Mail size={18} />Get In Touch
                </a>
              </motion.div>

              <motion.div className="flex items-center gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                <span className="text-gray-500 text-sm font-medium">Connect</span>
                <div className="h-px w-8 bg-gray-700" />
                {[{ icon: <Github size={20} />, href: "https://github.com/OuThorninvithyea?tab=repositories", label: "GitHub" }, { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" }, { icon: <Mail size={20} />, href: "mailto:Vithyeasa@gmail.com", label: "Email" }].map((s, i) => (
                  <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all" aria-label={s.label}>{s.icon}</motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden md:block min-w-0">
              <div className="grid gap-4">
                {cards.map((card, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }} whileHover={{ x: 8 }} className="group relative">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
                    <div className="relative flex items-center gap-5 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-500">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-white text-black shadow-lg">{card.icon}</div>
                      <div><h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3><p className="text-sm text-gray-400">{card.description}</p></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="md:hidden px-4 sm:px-6 pb-12 -mt-8">
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {cards.map((card, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }} className="flex-shrink-0 w-[85vw] sm:w-80 snap-center">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <div className="inline-flex p-2.5 rounded-xl bg-white text-black mb-3">{card.icon}</div>
                <h3 className="text-base font-semibold text-white mb-1">{card.title}</h3>
                <p className="text-xs text-gray-400">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs font-medium">Scroll</span>
          <ChevronDown size={16} className="text-gray-400" />
        </motion.div>
      </motion.div>

      <div id="resume-print" style={{ position: "absolute", left: -10000, top: 0 }}><Resume /></div>
    </section>
  );
};

export default Hero;
