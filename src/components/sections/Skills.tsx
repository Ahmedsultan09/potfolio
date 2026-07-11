import { skillGroups } from "../../data/skills";
import { Section } from "../ui/Section";
import { Chip } from "../ui/Chip";
import { GradientText } from "../ui/GradientText";

export function Skills() {
  return (
    <Section id="skills">
      <div className="mb-14 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Skills & <GradientText>Toolkit</GradientText>
        </h2>
        <p className="mt-3 text-muted-foreground">
          A focused stack for building colorful, data-heavy product experiences.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="rounded-2xl border border-border/70 bg-[hsl(var(--surface))] p-6 backdrop-blur-md"
          >
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
