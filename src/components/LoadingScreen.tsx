import { motion } from "framer-motion";
import { useEffect } from "react";

type LoadingScreenProps = {
  onComplete: () => void;
};

const letters = ["S", "u", "l", "t", "a", "n"];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      aria-busy="true"
      aria-label="Loading"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-mesh)" }}
        initial={{ opacity: 0.4, scale: 1.08 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden
      />

      {/* Soft floating orbs — atmosphere only, not a second loader */}
      <motion.span
        className="pointer-events-none absolute left-[18%] top-[28%] h-28 w-28 rounded-full bg-cyan/20 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        aria-hidden
      />
      <motion.span
        className="pointer-events-none absolute bottom-[22%] right-[16%] h-36 w-36 rounded-full bg-magenta/20 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
        aria-hidden
      />
      <motion.span
        className="pointer-events-none absolute right-[30%] top-[20%] h-20 w-20 rounded-full bg-amber/15 blur-2xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
        aria-hidden
      />

      <div className="relative flex flex-col items-center">
        <motion.h1
          className="flex font-display text-4xl font-bold tracking-tight sm:text-5xl"
          aria-label="Sultan"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              className="inline-block"
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.45,
                delay: 0.08 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            className="gradient-text inline-block"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: [0.4, 1.25, 1] }}
            transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
          >
            .
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-3 text-sm font-medium tracking-[0.22em] text-muted-foreground uppercase"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          Portfolio
        </motion.p>

        <div
          className="relative mt-10 h-1.5 w-52 overflow-hidden rounded-full bg-muted/80 sm:w-64"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={100}
        >
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan via-amber to-magenta shadow-[0_0_18px_hsl(var(--cyan)/0.55)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.85, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 w-16 rounded-full bg-white/35 blur-[2px]"
            initial={{ left: "-20%" }}
            animate={{ left: "110%" }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.15,
            }}
            aria-hidden
          />
        </div>
      </div>
    </motion.div>
  );
}
