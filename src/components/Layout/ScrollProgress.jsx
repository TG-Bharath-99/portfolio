import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-accent-gradient"
      style={{ scaleX: progress / 100 }}
    />
  );
}
