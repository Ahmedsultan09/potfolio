import { BriefcaseBusiness, MapPin } from "lucide-react";
import { experience } from "../../data/experience";
import { Section } from "../ui/Section";
import { Chip } from "../ui/Chip";

export function Experience() {
  return (
    <Section id="experience" className="section-rule bg-contrast">
      <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">02 / Experience</p>
          <h2 className="section-title mt-6">
            Built in the
            <span className="font-editorial italic text-accent-strong"> real world.</span>
          </h2>
          <p className="section-intro">
            Product work shaped by real users, deadlines, permissions, data, and teams.
          </p>
        </div>

        <ol className="experience-list">
          {experience.map((job, index) => (
            <li key={job.id} className="experience-item">
              <div className="experience-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{job.period}</span>
              </div>
              <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3>{job.title}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {job.location}
                    </span>
                  </p>
                </div>
                <Chip>{job.type}</Chip>
              </div>
              <ul className="impact-list mt-6">
                {job.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
