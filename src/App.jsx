import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <BackToTop />
    </>
  );
}

export default App;