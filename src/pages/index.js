import Hero from "../components/Hero";
import Theme from "../styles/theme";
import About from "../components/About";

export default function Home() {
  return (
    <Theme>
      <Hero />
      <About />
    </Theme>
  )
}
