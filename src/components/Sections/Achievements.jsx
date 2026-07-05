import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { achievements } from "../../data/portfolio";
import SectionHeading from "../UI/SectionHeading";
import GlassCard from "../UI/GlassCard";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericTarget)) return;

    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones and accomplishments that define my journey"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, i) => (
            <motion.div key={achievement.title} variants={cardVariants}>
              <GlassCard className="group relative h-full overflow-hidden p-6" gradient>
                {/* Background number */}
                <span className="pointer-events-none absolute -right-2 -top-2 text-7xl font-black text-white/[0.02] transition-all group-hover:text-white/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-lg shadow-accent-indigo/20 transition-transform duration-300 group-hover:scale-110">
                  <achievement.icon size={22} />
                </div>

                {/* Title */}
                <h3 className="relative mb-2 text-lg font-bold text-slate-100">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm leading-relaxed text-slate-400">
                  {achievement.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Counter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { value: "296", suffix: "+", label: "LeetCode Problems" },
            { value: "1481", suffix: "", label: "LeetCode Rating" },
            { value: "2", suffix: "×", label: "Competition Wins" },
            { value: "60", suffix: "", label: "Day Coding Streak" },
          ].map((stat) => (
            <GlassCard
              key={stat.label}
              className="py-6 text-center"
              hover
            >
              <p className="text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
