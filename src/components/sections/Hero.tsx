import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";
import { PortraitFrame } from "../ui/PortraitFrame";
import { HeroScene } from "../three/HeroScene";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <HeroScene />

      <div className="container-page relative z-10 grid w-full items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
            {profile.title}
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <GradientText>{profile.name}</GradientText>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              as="a"
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
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
            <Button as="a" href={profile.resumeUrl} download variant="secondary">
              <Download className="h-4 w-4" aria-hidden />
              Resume
            </Button>
            <Button as="a" href="#contact" variant="ghost">
              <Mail className="h-4 w-4" aria-hidden />
              Contact
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center pb-8 lg:justify-end lg:pb-4"
        >
          <PortraitFrame />
        </motion.div>
      </div>
    </section>
  );
}
