import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "../../data/projects";
import { Section } from "../ui/Section";
import { Chip } from "../ui/Chip";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";
import { cn } from "../../lib/utils";

function ScreenshotCarousel({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const shots = project.screenshots;
  if (!shots.length) return null;

  const current = shots[index];

  return (
    <div className="gradient-border min-w-0 w-full max-w-full">
      <div className="gradient-border-inner overflow-hidden">
        <div className="relative flex aspect-[16/10] max-h-[min(520px,70vh)] w-full items-center justify-center bg-[#0a1018]">
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.classList.remove("hidden");
            }}
          />
          <div className="hidden absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy/80 via-cyan/40 to-magenta/50 p-6 text-center text-white">
            <p className="font-display text-2xl font-bold">{project.title}</p>
            <p className="text-sm opacity-90">{project.tagline}</p>
          </div>

          {shots.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur"
                aria-label="Previous screenshot"
                onClick={() =>
                  setIndex((i) => (i - 1 + shots.length) % shots.length)
                }
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur"
                aria-label="Next screenshot"
                onClick={() => setIndex((i) => (i + 1) % shots.length)}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {shots.map((shot, i) => (
                  <button
                    key={shot.src}
                    type="button"
                    aria-label={`Show screenshot ${i + 1}`}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition",
                      i === index ? "bg-cyan w-4" : "bg-white/50"
                    )}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectBlock({ project, reverse }: { project: Project; reverse?: boolean }) {
  return (
    <article
      className={cn(
        "grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12",
        reverse && "lg:[&>*:first-child]:order-2"
      )}
    >
      <div className="min-w-0">
        <ScreenshotCarousel project={project} />
      </div>

      <div className="min-w-0">
        {project.featured && (
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Flagship project
          </span>
        )}
        <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2 text-lg text-cyan">{project.tagline}</p>
        <p className="mt-4 text-muted-foreground">{project.description}</p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground/90">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan to-magenta"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Button
              key={link.href}
              as="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <div className="mb-14 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Featured <GradientText>Projects</GradientText>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Production products across ads & lead generation, sports analytics, EdTech, and
          field-service operations.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <ProjectBlock key={project.id} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
