import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import DocsLayout from "./components/layout/DocsLayout";

function App() {
  return (
    <DocsLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Analytics />
    </DocsLayout>
  );
}

export default App;
