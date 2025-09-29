import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Zap,
  Globe,
} from "lucide-react";
import jsPDF from "jspdf";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const downloadCV = () => {
    const doc = new jsPDF();

    // Set font and colors
    doc.setFont("helvetica");

    // Header
    doc.setFontSize(24);
    doc.setTextColor(37, 99, 235); // Blue color
    doc.text("Ou Thorninvithyea", 20, 30);

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Software Engineer", 20, 40);
    doc.text(
      "Vithyeass@gmail.com | +855 11 423 735 | Phnom Penh, Cambodia",
      20,
      46
    );

    // Professional Summary
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Professional Summary", 20, 60);

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const summaryText =
      "Passionate Software Engineer with 5+ years of experience in front-end development. Specialized in React, TypeScript, and modern UI engineering. I thrive on crafting accessible, performant interfaces that delight users and drive business growth.";
    doc.text(summaryText, 20, 70, { maxWidth: 170 });

    // Skills
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Technical Skills", 20, 100);

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(
      "Frontend: React, TypeScript, JavaScript, HTML/CSS, Tailwind CSS, Next.js",
      20,
      110
    );
    doc.text(
      "UI Engineering: Accessibility (a11y), Design Systems, Animations (Framer Motion)",
      20,
      116
    );
    doc.text(
      "Testing & Performance: RTL/Jest, Cypress, Lighthouse, Web Vitals (LCP/CLS/INP)",
      20,
      122
    );
    doc.text(
      "Tooling: Git/GitHub, Vite/Webpack, ESLint/Prettier, CI/CD, Figma to Code",
      20,
      128
    );

    // Experience
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Work Experience", 20, 145);

    // Senior Software Engineer
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text("Senior Software Engineer", 20, 155);
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(
      "Tech Solutions Inc. | San Francisco, CA | 2022 - Present",
      20,
      161
    );
    doc.text(
      "• Led development of scalable web applications serving 100K+ users",
      20,
      167
    );
    doc.text(
      "• Implemented microservices architecture and improved system performance by 40%",
      20,
      173
    );
    doc.text(
      "• Mentored junior developers and established code review processes",
      20,
      179
    );

    // Front-End Developer
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text("Front-End Developer", 20, 195);
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Digital Innovations LLC | New York, NY | 2020 - 2022", 20, 201);
    doc.text(
      "• Built responsive web applications with React and TypeScript",
      20,
      207
    );
    doc.text(
      "• Designed RESTful APIs and integrated third-party services",
      20,
      213
    );
    doc.text(
      "• Improved application performance through code optimization",
      20,
      219
    );

    // Education
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Education", 20, 240);

    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text("Bachelor of Software Engineering", 20, 250);
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text("Limkokwing University", 20, 256);

    // Save the PDF
    doc.save("CV_OuThorninvithyea.pdf");
  };

  const cards = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Front-End Developer",
      description:
        "Building performant, accessible, and responsive user interfaces",
      gradient: "from-white to-gray-300",
      delay: 0.1,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimizer",
      description: "Optimizing applications for speed and efficiency",
      gradient: "from-gray-300 to-white",
      delay: 0.3,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "Contributing to the developer community",
      gradient: "from-white to-gray-400",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-black pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Mouse follower effect */}
      <div
        className="absolute pointer-events-none z-10 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-white px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ou Thorninvithyea
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate Software Engineer crafting innovative solutions with
              cutting-edge technologies
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 md:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={downloadCV}
                className="hidden sm:flex items-center justify-center gap-2 bg-white text-black px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <Download size={18} />
                Download CV
              </button>
              <a
                href="mailto:Vithyeass@gmail.com"
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                role="button"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                type="button"
                className="text-white/70 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </button>
              <button
                type="button"
                className="text-white/70 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </button>
              <a
                href="mailto:Vithyeass@gmail.com"
                className="text-white/70 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Animated Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: card.delay }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />

                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/15 transition-all duration-300">
                  <div
                    className={`inline-flex p-2 sm:p-3 rounded-xl bg-gradient-to-r ${card.gradient} text-black mb-3 sm:mb-4`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
