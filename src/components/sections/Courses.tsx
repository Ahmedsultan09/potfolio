import { ArrowUpRight, BookOpen } from "lucide-react";
import { courses } from "../../data/courses";
import { Section } from "../ui/Section";

export function Courses() {
  return (
    <Section id="courses" className="section-rule pt-0">
      <div className="learning-panel">
        <div>
          <p className="section-kicker">05 / Continuous Learning</p>
          <h2 className="mt-5 max-w-xl font-editorial text-5xl leading-[0.98] sm:text-6xl">
            Stay curious. Keep shipping.
          </h2>
        </div>

        <div className="course-list">
          {courses.map((course, index) => (
            <a
              key={course.title}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="course-link"
            >
              <span className="course-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="min-w-0">
                <strong>{course.title}</strong>
                <small>
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {course.instructor}
                </small>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
