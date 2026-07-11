import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
};

export function Section({
  id,
  className,
  children,
  containerClassName,
}: SectionProps) {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section id={id} className={cn("section", className)} ref={ref}>
      <motion.div
        className={cn("container-page", containerClassName)}
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
