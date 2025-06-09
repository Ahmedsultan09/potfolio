import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { useEffect } from "react";

export function LoadingScreen({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mb-4"
        >
          <Code2 className="w-16 h-16 text-primary mx-auto" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          Ahmed Sultan
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground"
        >
          Frontend Developer
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
