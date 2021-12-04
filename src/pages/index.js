import Hero from "../components/Hero";
import Theme from "../styles/theme";
import About from "../components/About";
import Projects from "../components/Projects"

export default function Home() {
  return (
    <Theme>
        <Hero />
        <About />
        <Projects />
    </Theme>
  )
}