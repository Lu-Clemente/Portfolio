import React from "react";
import Hero from "../components/Hero";
import Theme from "../styles/theme";
import About from "../components/About";
import Projects from "../components/Projects"
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Theme>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Theme>
  )
}