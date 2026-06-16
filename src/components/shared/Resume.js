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
          Passionate Software Engineer specializing in full-stack
          web development, with hands-on experience building scalable web
          applications and real-time systems with React, Go, and Laravel.
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
              Programming Languages
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              Go, JavaScript, HTML5, CSS3, TypeScript
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Frameworks & Libraries
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              React, Next.js, Laravel, Fiber, Tailwind CSS, Node.js
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Backend & Databases
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              REST APIs, PostgreSQL, MySQL, WebSocket, JWT, Redis, Refresh Token, Docker, Clean Architecture, i18n, Database Design, API Design, Authentication
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Software Engineering
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              Problem Solving, Debugging, Data Structures, Design Patterns, System Design, Code Review
            </p>
          </div>
          <div>
            <h3
              className="font-semibold text-gray-800 mb-1"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Development Tools
            </h3>
            <p className="text-gray-700" style={{ fontSize: "10px" }}>
              Git/GitHub, VS Code, Chrome DevTools, NPM, ESLint
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <h3
              className="font-semibold text-gray-800"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Software Engineer
            </h3>
            <p className="text-gray-600" style={{ fontSize: "10px" }}>
              2026 - Present
            </p>
          </div>
          <p className="text-gray-600 mb-1" style={{ fontSize: "10px" }}>
            OTRESS • Phnom Penh, Cambodia
          </p>
          <ul
            className="list-disc list-inside text-gray-700 space-y-0.5 ml-2"
            style={{ fontSize: "9px" }}
          >
            <li>
              Building backend APIs with Go and Fiber for a multi-product startup ecosystem
            </li>
            <li>
              Designing PostgreSQL databases with connection pooling for high-concurrency workloads
            </li>
            <li>
              Developing frontend interfaces with Vue.js, HTML, and JavaScript
            </li>
            <li>
              Applying deep backend concepts: API design patterns, clean architecture, and database optimization
            </li>
            <li>
              Contributing to taxi booking app, e-learning platform, and Cambodia's first social media platform
            </li>
          </ul>
        </div>
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

      {/* Key Projects */}
      <section className="mb-6">
        <h2
          className="text-lg font-bold text-blue-600 mb-3 border-b border-gray-300 pb-1"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          KEY PROJECTS
        </h2>
        <div className="mb-3">
          <div className="flex justify-between items-start mb-1">
            <h3
              className="font-semibold text-gray-800"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              bongthom Admin API
            </h3>
            <p className="text-gray-600" style={{ fontSize: "10px" }}>
              2025
            </p>
          </div>
          <p className="text-gray-600 mb-1" style={{ fontSize: "10px" }}>
            Go • Fiber v3 • PostgreSQL • WebSocket • go-i18n
          </p>
          <ul
            className="list-disc list-inside text-gray-700 space-y-0.5 ml-2"
            style={{ fontSize: "9px" }}
          >
            <li>
              Built admin API with Clean Architecture (handler → usecase →
              repository layers) for maintainable, testable code
            </li>
            <li>
              Implemented real-time WebSocket communication for live dashboard
              updates and notifications
            </li>
            <li>
              Designed PostgreSQL schema with sqlx for type-safe queries and
              efficient database operations
            </li>
            <li>
              Integrated go-i18n for multi-language support (EN/KH) with
              structured zerolog logging
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3
              className="font-semibold text-gray-800"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              HappyHourHunt
            </h3>
            <p className="text-gray-600" style={{ fontSize: "10px" }}>
              2024
            </p>
          </div>
          <p className="text-gray-600 mb-1" style={{ fontSize: "10px" }}>
            React Native • Expo • Firebase • Tamagui • Google Maps
          </p>
          <ul
            className="list-disc list-inside text-gray-700 space-y-0.5 ml-2"
            style={{ fontSize: "9px" }}
          >
            <li>
              Premium nightlife discovery platform for Phnom Penh with real-time
              venue swarm map
            </li>
            <li>
              Built custom data pipelines for venue scraping and high-performance
              universal UI
            </li>
          </ul>
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
