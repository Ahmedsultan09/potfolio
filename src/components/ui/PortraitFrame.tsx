import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "../../data/profile";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/** Unique portrait: layered gradient halo + interactive tilt — sharp photo, no shader distortion. */
export function PortraitFrame() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]">
      <div
        className="absolute -inset-6 rounded-[2.5rem] opacity-70 blur-2xl"
        style={{
          background:
            "conic-gradient(from 180deg, hsl(var(--cyan)), hsl(var(--amber)), hsl(var(--magenta)), hsl(var(--cyan)))",
        }}
        aria-hidden
      />
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
        className="relative"
      >
        <div className="rounded-[1.75rem] bg-gradient-to-br from-cyan via-amber to-magenta p-[3px] shadow-2xl shadow-cyan/20">
          <div className="overflow-hidden rounded-[calc(1.75rem-3px)] bg-card">
            <img
              src={profile.portraitUrl}
              alt={`${profile.name} — professional portrait`}
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
              width={840}
              height={1050}
              decoding="async"
            />
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-border/70 bg-[hsl(var(--surface))] px-4 py-3 text-center backdrop-blur-xl">
          <p className="font-display text-sm font-semibold text-foreground">
            {profile.name}
          </p>
          <p className="text-xs text-muted-foreground">{profile.title}</p>
        </div>
      </motion.div>
    </div>
  );
}
