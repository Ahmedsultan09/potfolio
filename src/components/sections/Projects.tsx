import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "../../data/projects";
import { Section } from "../ui/Section";
import { Chip } from "../ui/Chip";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

function ScreenshotCarousel({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const shots = project.screenshots;
  if (!shots.length) return null;

  const current = shots[index];
  const showPrevious = () => setIndex((value) => (value - 1 + shots.length) % shots.length);
  const showNext = () => setIndex((value) => (value + 1) % shots.length);

  return (
    <div
      className="project-visual"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${project.title} screenshots`}
    >
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>{project.id}.product</p>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        <img
          src={current.src}
          alt={current.alt}
          className="h-full w-full object-contain"
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
        />

        {shots.length > 1 && (
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-button"
              aria-label={`Show previous ${project.title} screenshot`}
              onClick={showPrevious}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="carousel-status" aria-live="polite" aria-atomic="true">
              <span className="sr-only">Screenshot </span>
              {String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              className="carousel-button"
              aria-label={`Show next ${project.title} screenshot`}
              onClick={showNext}
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-block">
      <div className="project-heading">
        <div>
          <p className="project-number">Case Study / {String(index + 1).padStart(2, "0")}</p>
          <h3>{project.title}</h3>
        </div>
        <p className="project-tagline">{project.tagline}</p>
      </div>

      <ScreenshotCarousel project={project} />

      <dl className="project-metrics" aria-label={`${project.title} product facts`}>
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <dd>{metric.value}</dd>
            <dt>{metric.label}</dt>
          </div>
        ))}
      </dl>

      <div className="project-details">
        <div>
          <p className="detail-label">The Product</p>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>
        </div>

        <div>
          <p className="detail-label">My Impact</p>
          <ul className="impact-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
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
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="section-rule">
      <div className="section-heading-grid">
        <p className="section-kicker">01 / Selected Work</p>
        <div>
          <h2 className="section-title">
            Products with
            <span className="font-editorial italic text-accent-strong"> proof,</span> not polish alone.
          </h2>
          <p className="section-intro">
            Production work across advertising, football analytics, and field operations.
            Each product solves a different kind of complexity.
          </p>
        </div>
      </div>

      <div className={cn("mt-20", projects.length > 1 && "space-y-28 lg:space-y-36")}>
        {projects.map((project, index) => (
          <ProjectBlock key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
