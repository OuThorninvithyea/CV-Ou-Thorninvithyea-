import React from "react";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white text-black"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "20mm",
        fontFamily: "Arial, sans-serif",
        fontSize: "11px",
        lineHeight: "1.4",
      }}
    >
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-blue-600 pb-4">
        <h1
          className="text-2xl font-bold text-blue-600 mb-2"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          OU THORNINVITHYEA
        </h1>
        <p
          className="text-sm font-semibold text-gray-700 mb-1"
          style={{ fontSize: "14px" }}
        >
          Software Engineer
        </p>
        <p className="text-xs text-gray-600" style={{ fontSize: "10px" }}>
          📧 Vithyeass@gmail.com | 📱 +855 11 423 735 | 📍 Phnom Penh, Cambodia
        </p>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          PROFESSIONAL SUMMARY
        </h2>
        <p
          className="text-gray-700"
          style={{ fontSize: "11px", textAlign: "justify" }}
        >
          Passionate Software Engineer with 2+ years of experience in front-end
          development, specializing in React, JavaScript, and modern UI
          engineering. Expert in crafting accessible, performant interfaces that
          deliver exceptional user experiences and drive business growth.
          Committed to clean code, modern web standards, and continuous learning
          in the ever-evolving tech landscape.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          TECHNICAL SKILLS
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Frontend Development
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              React,JavaScript, HTML5, CSS3, Tailwind CSS, Next.js
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              UI/UX Engineering
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              Accessibility, Design Systems, Framer Motion, Responsive Design
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Testing & Performance
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              React Testing Cypress, Lighthouse, Optimization
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Tools & Technologies
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              Git/GitHub, Prettier, CI/CD, Figma
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          KEY ACHIEVEMENTS
        </h2>
        <ul
          className="list-disc list-inside text-gray-700 space-y-1"
          style={{ fontSize: "10px" }}
        >
          <li>
            Successfully deploy and maintain multiple websites and web
            applications
          </li>
          <li>Continuously improve website performance and user experience</li>
          <li>
            Implement new features and functionality based on client
            requirements
          </li>
          <li>Troubleshoot and fix bugs to ensure smooth website operation</li>
          <li>
            Keep websites updated with latest technologies and security patches
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          EDUCATION
        </h2>
        <div className="flex justify-between items-start">
          <div>
            <h3
              className="font-semibold text-gray-800"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Bachelor of Software Engineering
            </h3>
            <p className="text-gray-600" style={{ fontSize: "10px" }}>
              Limkokwing University
            </p>
          </div>
          <p className="text-gray-600" style={{ fontSize: "10px" }}>
            2024 - 2027
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          CERTIFICATIONS
        </h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-700" style={{ fontSize: "10px" }}>
              • JavaScript Master Certificate
            </span>
            <span className="text-gray-600" style={{ fontSize: "9px" }}>
              2025
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700" style={{ fontSize: "10px" }}>
              • Figma UI/UX Design Certificate
            </span>
            <span className="text-gray-600" style={{ fontSize: "9px" }}>
              2024
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700" style={{ fontSize: "10px" }}>
              • Data Structures Master Certificate
            </span>
            <span className="text-gray-600" style={{ fontSize: "9px" }}>
              2025
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700" style={{ fontSize: "10px" }}>
              • React Developer Certificate
            </span>
            <span className="text-gray-600" style={{ fontSize: "9px" }}>
              2025
            </span>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          LANGUAGES
        </h2>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p
              className="font-semibold text-gray-800"
              style={{ fontSize: "11px", fontWeight: "600" }}
            >
              English
            </p>
            <p className="text-gray-600" style={{ fontSize: "9px" }}>
              Fluent
            </p>
          </div>
          <div>
            <p
              className="font-semibold text-gray-800"
              style={{ fontSize: "11px", fontWeight: "600" }}
            >
              Khmer
            </p>
            <p className="text-gray-600" style={{ fontSize: "9px" }}>
              Native
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div
        className="text-center text-xs text-gray-500 mt-8 pt-4 border-t border-gray-200"
        style={{ fontSize: "8px" }}
      ></div>
    </div>
  );
});

export default Resume;
