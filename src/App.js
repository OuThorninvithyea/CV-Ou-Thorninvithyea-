import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
