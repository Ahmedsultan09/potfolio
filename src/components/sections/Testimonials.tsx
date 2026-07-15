import { Quote } from "lucide-react";
import { selectedTeams, testimonials } from "../../data/testimonials";
import { Section } from "../ui/Section";

export function Testimonials() {
  return (
    <Section id="testimonials" className="section-rule testimonials-section">
      <div className="section-heading-grid">
        <p className="section-kicker">04 / Teams & Testimonials</p>
        <div>
          <h2 className="section-title">
            Good products are
            <span className="font-editorial italic text-accent-strong"> team efforts.</span>
          </h2>
          <p className="section-intro">
            Experience collaborating with product, backend, design, and operations teams
            across SaaS, analytics, education, and field-service products.
          </p>
        </div>
      </div>

      {testimonials.length > 0 && (
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure key={`${testimonial.name}-${testimonial.company}`} className="testimonial-card">
              <Quote className="h-7 w-7 text-accent-strong" aria-hidden="true" />
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>
                  {testimonial.role}, {testimonial.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="team-strip" aria-label="Selected teams">
        <p>Selected Teams</p>
        <ul>
          {selectedTeams.map((team) => (
            <li key={team}>{team}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
