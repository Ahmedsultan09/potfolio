import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";

export function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-[hsl(var(--surface))] px-6 py-14 text-center backdrop-blur-md sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ backgroundImage: "var(--gradient-mesh)" }}
          aria-hidden
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s <GradientText>build something</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to frontend and product engineering roles — especially SaaS, dashboards,
            and visually rich web experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button as="a" href={`mailto:${profile.email}`} variant="primary">
              <Mail className="h-4 w-4" aria-hidden />
              {profile.email}
            </Button>
            <Button as="a" href={profile.phoneHref} variant="secondary">
              <Phone className="h-4 w-4" aria-hidden />
              {profile.phone}
            </Button>
            <Button
              as="a"
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </Button>
            <Button
              as="a"
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </Button>
            <Button as="a" href={profile.resumeUrl} download variant="ghost">
              <Download className="h-4 w-4" aria-hidden />
              Download resume
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
