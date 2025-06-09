import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, ExternalLink } from "lucide-react";

const courses = [
  {
    title: "The Ultimate React Course 2024",
    instructor: "Jonas Schmedtmann",
    description:
      "Comprehensive course covering React, Next.js, Redux, and modern web development practices",
    topics: ["React", "Next.js", "Redux", "Modern Web Development"],
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
  },
  {
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Master React.js from the ground up with hands-on projects and real-world applications",
    topics: ["React", "Hooks", "Redux", "React Router", "Next.js"],
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    title: "The Web Developer Bootcamp",
    instructor: "Colt Steele",
    description:
      "Complete web development bootcamp covering frontend and backend technologies",
    topics: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  },
];

export function Courses() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-muted" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Courses & Learning
          </h2>
          <p className="text-muted-foreground">
            Continuous learning and skill development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-primary mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-3">
                    By {course.instructor}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <span>View on Udemy</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
