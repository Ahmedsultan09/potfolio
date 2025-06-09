import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experience = [
  {
    title: "Frontend Developer",
    company: "LeadsMart",
    location: "Heliopolis, Cairo, Egypt",
    type: "Full-Time",
    period: "Jan 2025 - Present",
    description: [
      "Spearheaded UI/UX migration project, translating Figma designs into functional React components with pixel-perfect precision while maintaining design system consistency",
      "Engineered complex frontend logic and state management solutions to enhance application performance and user experience",
      "Collaborated within an Agile development team, utilizing Jira for task management and Bitbucket for version control to deliver features on schedule",
      "Partnered with UX designers to conduct design reviews, propose improvements, and ensure optimal usability standards throughout the application",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Lnkr",
    location: "Remote",
    type: "Part-Time",
    period: "Oct 2024 - Nov 2024",
    description: [
      "Developed dynamic and interactive (SaaS) tools and insights for healthcare providers and insurance companies using React",
      "Integrated and managed API endpoints in React applications, ensuring efficient data fetching and handling through libraries like Axios and React Query",
      "Actively collaborated on resolving GitHub issues, providing effective solutions and engaging in discussions to clarify and understand feature requirements when necessary",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Big Data Egypt For Systems",
    location: "Nasr City, Cairo, Egypt",
    type: "Full-Time",
    period: "Dec 2023 - Jan 2025",
    description: [
      "Designed and implemented a ticketing system for printer maintenance, optimizing workflows and centralizing task and resource management",
      "Developed a complete CMS from concept to implementation, transforming an initial idea from the manager into a functional design and responsive frontend, delivering a practical and user-friendly solution",
      "Implemented a SPA structure for a seamless and efficient user interface",
      "Created a comprehensive system architecture and user flow to ensure optimal functionality and user experience",
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Faculty of Computer and Information Sciences",
    period: "2018 - 2022",
    description:
      "Focused on web development, software engineering, and computer science fundamentals. Graduated with honors.",
  },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Vue.js",
  "Git",
  "Responsive Design",
  "UI/UX",
  "Framer Motion",
  "RESTful APIs",
  "GraphQL",
  "Node.js",
  "Next.js",
  "Web Performance",
  "SEO",
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground">My professional journey</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
                  <div className="flex flex-wrap gap-2 text-muted-foreground mb-2">
                    <span>{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {job.period}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2" />
              Education
            </h3>
            <div className="space-y-6 mb-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {edu.period}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Skills
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-6"
            >
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
