export type Course = {
  title: string;
  instructor: string;
  description: string;
  topics: string[];
  link: string;
};

export const courses: Course[] = [
  {
    title: "The Ultimate React Course 2024",
    instructor: "Jonas Schmedtmann",
    description:
      "React, Next.js, and Redux, with a focus on building web applications.",
    topics: ["React", "Next.js", "Redux", "Modern Web Development"],
    link: "https://www.udemy.com/course/the-ultimate-react-course/",
  },
  {
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Project-based React course covering hooks, Redux, React Router, and Next.js.",
    topics: ["React", "Hooks", "Redux", "React Router", "Next.js"],
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
  {
    title: "The Web Developer Bootcamp",
    instructor: "Colt Steele",
    description:
      "Web development foundations with HTML, CSS, JavaScript, Node.js, and MongoDB.",
    topics: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
  },
];
