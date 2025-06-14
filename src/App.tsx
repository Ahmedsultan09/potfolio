import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Mail,
  Phone,
  Code2,
  Terminal,
  Smartphone,
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
      title: "LeadsMart Ads Management New Platform",
      description:
        "Led the complete migration of the legacy ads management platform to a modern tech stack, collaborating closely with UX designers to create a more intuitive and performant system. Successfully delivered the new platform while maintaining business continuity.",
      tech: [
        "React",
        "TypeScript",
        "Zustand",
        "React Query",
        "Tailwind CSS",
        "Vite",
        "i18next",
        "Formik",
        "Yup",
        "shadcn/ui",
      ],
      achievements: [
        "Collaborated with UX designers to transform the legacy platform into a modern, user-friendly interface using shadcn/ui components",
        "Architected and implemented a feature-based architecture that reduced development time by 60% and improved code maintainability",
        "Optimized application performance by implementing React Query for efficient data fetching and caching, reducing API calls by 40%",
        "Reduced bundle size by 35% through code splitting and lazy loading, resulting in 2x faster initial load times",
        "Implemented a robust form validation system using Formik and Yup, reducing form-related bugs by 90%",
        "Built a scalable state management solution using Zustand, handling complex data flows across 20+ features",
        "Developed a comprehensive component library with 50+ reusable components, accelerating development speed by 3x",
        "Implemented internationalization (i18n) supporting 3 languages, making the platform accessible to global users",
        "Implemented comprehensive error handling and loading states, improving user experience and reducing support tickets",
      ],
    },
    {
      title: "Big Data Egypt Ticketing System",
      description:
        "Developed a comprehensive ticketing system with real-time updates and advanced filtering capabilities. Built with modern technologies and a focus on user experience, enabling efficient ticket management and tracking.",
      tech: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "shadcn/ui",
        "React Query",
        "Context API",
        "Supabase",
        "Vite",
      ],
      achievements: [
        "Implemented real-time ticket updates using Supabase's real-time subscriptions, handling high concurrent user loads",
        "Developed an advanced filtering system with multiple criteria for efficient ticket processing and management",
        "Created a responsive dashboard with various chart types and key metrics for comprehensive ticket analytics",
        "Built a robust state management system using Context API and React Query, significantly reducing API calls",
        "Implemented a clean and intuitive UI using shadcn/ui components, drastically reducing user training time",
        "Developed a modular architecture with reusable components, accelerating feature development",
        "Integrated role-based access control with multiple user roles and permission levels",
        "Optimized performance through code splitting and lazy loading, achieving significant load time improvements",
      ],
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
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
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
                  Ahmed Alaa El-Din Sultan
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
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/Ahmedsultan09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1 min-w-[120px] justify-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmed-sultan09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1 min-w-[120px] justify-center"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:asultan.dev@gmail.com"
                    className="btn btn-secondary flex-1 min-w-[120px] justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                  <a
                    href="/src/assets/ahmed-sultan-cv.pdf"
                    download
                    className="btn btn-secondary flex-1 min-w-[120px] justify-center"
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
