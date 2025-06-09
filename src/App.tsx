import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Mail,
  Phone,
  Code2,
  Terminal,
  Smartphone,
  ExternalLink,
  CheckCircle2,
  Download,
  Linkedin,
} from "lucide-react";
import { Experience } from "./components/Experience";
import { Courses } from "./components/Courses";
import { LoadingScreen } from "./components/LoadingScreen";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Weather App",
      description:
        "A responsive weather application that provides real-time weather data and 5-day forecasts. Features a clean, modern interface built from Figma designs with optimized performance and user experience.",
      tech: ["React.js", "Redux Toolkit", "Axios", "Tailwind CSS"],
      github: "https://github.com/Ahmedsultan09/weather-app",
      demo: "https://weather-app-ahmedsultan.vercel.app/",
      achievements: [
        "Converted Figma design into responsive weather app with React and Tailwind CSS, ensuring better cross-device experience",
        "Integrated Redux Tool Kit to manage real-time weather data flow, optimizing storage for current and 5-day forecasts",
        "Utilized responsive design to ensure compatibility across all devices",
        "Leveraged React Hooks, specifically for data fetching with Axios, to optimize API calls and maintain a dynamic user interface",
      ],
    },
    {
      title: "Movies App",
      description:
        "A dynamic movie browsing application that allows users to search, explore, and view detailed information about movies. Features a responsive design and efficient state management.",
      tech: ["React.js", "AOS", "Tailwind CSS"],
      github: "https://github.com/Ahmedsultan09/movies-app",
      demo: "https://movies-app-ahmedsultan.vercel.app/",
      achievements: [
        "Developed a responsive movie application using React, showcasing a dynamic interface for browsing, searching, and exploring movie details",
        "Implemented state management for seamless user interactions and efficient data rendering",
      ],
    },
    {
      title: "Space Tourism",
      description:
        "An interactive space tourism website built with Vue.js, featuring dynamic content loading and smooth transitions. Includes multiple pages with detailed information about space destinations.",
      tech: ["Vue.js", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Ahmedsultan09/space-tourisim",
      demo: "https://space-tourism-vue.vercel.app/",
    },
  ];

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-background to-muted min-h-[90vh] flex items-center">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <span className="text-sm font-medium">
                    Frontend Developer
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Ahmed Sultan
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Crafting beautiful and performant web experiences with modern
                  technologies. Passionate about creating intuitive user
                  interfaces and seamless interactions.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-5 h-5" />
                    <span>asultan.dev@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-5 h-5" />
                    <span>+20 111 123 6361</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Ahmedsultan09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmed-sultan09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:asultan.dev@gmail.com"
                    className="btn btn-secondary"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                  <a
                    href="/src/assets/ahmed-sultan-cv.pdf"
                    download
                    className="btn btn-secondary"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3"></div>
                <div className="relative card p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">
                    Professional Expertise
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">
                        Frontend Development
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>React & TypeScript Development</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>State Management (Redux, Context)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Next.js & Modern Frameworks</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Tailwind CSS & Styled Components</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>RESTful APIs & GraphQL Integration</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>React Query & SWR</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Testing (Jest, React Testing Library)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Performance Optimization</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">
                        UI/UX Implementation
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Figma to React Implementation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Responsive Design Systems</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Accessibility & Performance</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">
                        Development Practices
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Agile & Scrum Methodologies</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Git & Version Control</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>Code Review & Best Practices</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section bg-muted" ref={ref}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skills & Expertise
              </h2>
              <p className="text-muted-foreground">
                Technologies and methodologies I work with
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card p-6"
              >
                <Code2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  React, TypeScript, and modern web technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    React
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Redux
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Next.js
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card p-6"
              >
                <Terminal className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Development Practices
                </h3>
                <p className="text-muted-foreground mb-4">
                  Modern development methodologies and tools
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Agile
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Git
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Jira
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Bitbucket
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    CI/CD
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="card p-6"
              >
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">UI/UX & Design</h3>
                <p className="text-muted-foreground mb-4">
                  Design implementation and user experience
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Figma
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Responsive Design
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    UI/UX
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Design Systems
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                    Accessibility
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden card"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.achievements && (
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4">
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Courses Section */}
        <Courses />

        {/* Contact Section */}
        <section className="section bg-muted">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your next project
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:asultan.dev@gmail.com"
                  className="btn btn-primary"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  asultan.dev@gmail.com
                </a>
                <a href="tel:+201111236361" className="btn btn-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  +20 111 123 6361
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
