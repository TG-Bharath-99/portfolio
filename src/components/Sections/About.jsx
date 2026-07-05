import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2, Zap } from "lucide-react";
import { personalInfo, education, contactInfo } from "../../data/portfolio";
import SectionHeading from "../UI/SectionHeading";
import GlassCard from "../UI/GlassCard";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: `${education.year} • ${education.university}`,
  },
  {
    icon: Code2,
    label: "Specialization",
    value: "Full Stack MERN Development",
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.location,
  },
  {
    icon: Zap,
    label: "Focus",
    value: "DSA & Problem Solving",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassCard className="h-full p-6 sm:p-8" gradient>
              <h3 className="mb-4 text-xl font-semibold text-slate-100 sm:text-2xl">
                Passionate{" "}
                <span className="gradient-text">Developer</span> &{" "}
                <span className="gradient-text">Problem Solver</span>
              </h3>
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
                {personalInfo.about}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["MERN Stack", "React.js", "Node.js", "DSA", "Problem Solving"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-indigo/10 px-3 py-1 text-xs font-medium text-accent-indigo ring-1 ring-accent-indigo/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <GlassCard className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-200">
                      {item.value}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
