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
