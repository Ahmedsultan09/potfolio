import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function AnimatedBackground() {
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10, // Size in pixels
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        >
          <Star
            size={star.size}
            className="text-black dark:text-white fill-black dark:fill-white"
          />
        </motion.div>
      ))}
      {/* Add some larger stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          <Star
            size={Math.random() * 30 + 20}
            className="text-black dark:text-white fill-black dark:fill-white"
          />
        </motion.div>
      ))}
    </div>
  );
}
