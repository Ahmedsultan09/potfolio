import { motion } from "framer-motion";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { PortraitFrame } from "../ui/PortraitFrame";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const proofPoints = [
  { value: "3+", label: "Years shipping" },
  { value: "+17", label: "Products featured" },
  { value: "EN / AR", label: "Bilingual systems" },
];

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="top" className="hero-section">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="container-page relative z-10 grid min-h-[100svh] items-center gap-12 pb-14 pt-32 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.72fr)] lg:gap-20 lg:pb-20">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
          <div className="eyebrow">
            <span className="availability-dot" aria-hidden="true" />
            {profile.title} / Available for ambitious teams
          </div>

          <h1 className="hero-title">
            I turn complex products into interfaces people
            <span className="font-editorial italic text-accent-strong">
              {" "}
              understand.
            </span>
          </h1>

          <div className="mt-8 grid gap-6 border-t border-foreground/20 pt-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {profile.headline}
            </p>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]">
              <MapPin
                className="h-4 w-4 text-accent-strong"
                aria-hidden="true"
              />
              {profile.location}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="#projects" variant="primary">
              Explore Selected Work
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              download
              variant="secondary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 border-y border-foreground/20">
            {proofPoints.map((item) => (
              <div key={item.label} className="proof-point">
                <dt className="order-2 mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-xs">
                  {item.label}
                </dt>
                <dd className="font-editorial text-3xl sm:text-4xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <PortraitFrame />
        </motion.div>
      </div>
    </section>
  );
}
