import { skillGroups } from "../../data/skills";
import { Section } from "../ui/Section";

export function Skills() {
  return (
    <Section id="skills" className="section-rule">
      <div className="section-heading-grid">
        <p className="section-kicker">03 / Capabilities</p>
        <div>
          <h2 className="section-title">
            A toolkit for
            <span className="font-editorial italic text-accent-strong"> product depth.</span>
          </h2>
          <p className="section-intro">
            Frontend craft backed by product architecture, data fluency, and systems thinking.
          </p>
        </div>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, groupIndex) => (
          <article key={group.id} className="skill-group">
            <div className="flex items-baseline justify-between gap-4">
              <h3>{group.title}</h3>
              <span className="skill-number" aria-hidden="true">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-8">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
