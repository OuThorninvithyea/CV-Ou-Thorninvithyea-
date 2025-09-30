import React from "react";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white text-black p-8 max-w-3xl mx-auto"
      style={{ width: 794 }}
    >
      <h1 className="text-3xl font-bold text-blue-700 mb-2">
        Ou Thorninvithyea
      </h1>
      <p className="text-sm text-gray-700 mb-1">Software Engineer</p>
      <p className="text-xs text-gray-600 mb-6">
        Vithyeass@gmail.com | +855 11 423 735 | Phnom Penh, Cambodia
      </p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
        <p className="text-sm text-gray-700">
          Passionate Software Engineer with 5+ years of experience in front-end
          development. Specialized in React, TypeScript, and modern UI
          engineering. I thrive on crafting accessible, performant interfaces
          that delight users and drive business growth.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Technical Skills</h2>
        <p className="text-sm text-gray-700">
          Frontend: React, TypeScript, JavaScript, HTML/CSS, Tailwind CSS,
          Next.js
        </p>
        <p className="text-sm text-gray-700">
          UI Engineering: Accessibility (a11y), Design Systems, Animations
          (Framer Motion)
        </p>
        <p className="text-sm text-gray-700">
          Testing & Performance: RTL/Jest, Cypress, Lighthouse, Web Vitals
          (LCP/CLS/INP)
        </p>
        <p className="text-sm text-gray-700">
          Tooling: Git/GitHub, Vite/Webpack, ESLint/Prettier, CI/CD, Figma to
          Code
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Education</h2>
        <div>
          <p className="text-sm font-semibold text-blue-700">
            Bachelor of Software Engineering
          </p>
          <p className="text-xs text-gray-700">Limkokwing University</p>
        </div>
      </section>
    </div>
  );
});

export default Resume;
