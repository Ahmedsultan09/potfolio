import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";

export function Contact() {
  return (
    <Section id="contact" className="contact-section">
      <div className="contact-grid">
        <div>
          <p className="section-kicker text-current">06 / Start a Conversation</p>
          <h2 className="contact-title">
            Have a product that deserves
            <span className="font-editorial italic"> better?</span>
          </h2>
        </div>

        <div className="contact-action">
          <p>
            Open to frontend and product engineering roles, especially SaaS, dashboards,
            and visually rich product experiences.
          </p>
          <a href={`mailto:${profile.email}`} className="contact-email">
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>{profile.email}</span>
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <div className="contact-socials">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.resumeUrl} download>
              Resume
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
