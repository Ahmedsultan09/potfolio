import { experience } from "../../data/experience";
import { Section } from "../ui/Section";
import { Chip } from "../ui/Chip";
import { GradientText } from "../ui/GradientText";

export function Experience() {
  return (
    <Section id="experience">
      <div className="mb-14 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Work <GradientText>Experience</GradientText>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Current full-time work at LeadsMart, plus part-time product work at TactiSport
          and earlier roles in field ops and healthcare SaaS.
        </p>
      </div>

      <ol className="relative space-y-10 border-l border-border/80 pl-6 md:pl-8">
        {experience.map((job) => (
          <li key={job.id} className="relative">
            <span
              className="absolute -left-[1.9rem] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-cyan via-amber to-magenta ring-4 ring-background md:-left-[2.15rem]"
              aria-hidden
            />
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-xl font-bold sm:text-2xl">
                {job.title}
              </h3>
              <Chip>{job.type}</Chip>
            </div>
            <p className="mt-1 text-cyan">
              {job.company} · {job.location}
            </p>
            <p className="text-sm text-muted-foreground">{job.period}</p>
            <ul className="mt-4 space-y-2">
              {job.description.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
