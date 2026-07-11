import { BookOpen, ExternalLink } from "lucide-react";
import { courses } from "../../data/courses";
import { Section } from "../ui/Section";
import { Chip } from "../ui/Chip";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";

export function Courses() {
  return (
    <Section id="courses">
      <div className="mb-14 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Courses & <GradientText>Learning</GradientText>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Continuous learning that keeps the craft sharp.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.title}
            className="flex flex-col rounded-2xl border border-border/70 bg-[hsl(var(--surface))] p-6 backdrop-blur-md"
          >
            <BookOpen className="h-5 w-5 text-cyan" aria-hidden />
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
              {course.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              By {course.instructor}
            </p>
            <p className="mt-3 flex-1 text-sm text-foreground/80">
              {course.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {course.topics.map((topic) => (
                <Chip key={topic}>{topic}</Chip>
              ))}
            </div>
            <Button
              as="a"
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="mt-5 self-start"
            >
              View on Udemy
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}
