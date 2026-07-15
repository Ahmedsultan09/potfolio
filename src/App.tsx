import { ThemeProvider } from "./context/ThemeContext";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Testimonials } from "./components/sections/Testimonials";
import { Courses } from "./components/sections/Courses";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="relative min-h-screen overflow-x-hidden text-foreground">
        <div className="site-grain" aria-hidden="true" />
        <Nav />
        <main id="main-content">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Testimonials />
          <Courses />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
