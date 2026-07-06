import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Github, Linkedin } from "../UI/BrandIcons";
import { personalInfo, contactInfo, stats } from "../../data/portfolio";
import { useTypewriter } from "../../hooks/useTypewriter";
import Button from "../UI/Button";

export default function Hero() {
  const typedRole = useTypewriter(personalInfo.roles, 100, 60, 2000);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-indigo/[0.07] blur-[120px]" />

      <div className="container-custom px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-indigo/20 bg-accent-indigo/5 px-4 py-1.5 text-sm font-medium text-accent-indigo">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-indigo opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-indigo" />
              </span>
              Available for Opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 text-lg font-medium text-slate-400 sm:text-xl"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Typewriter Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-5 flex items-center gap-2 text-xl font-semibold text-slate-200 sm:text-2xl md:text-3xl"
          >
            <span className="text-accent-purple">&lt;</span>
            <span className="typewriter-cursor">{typedRole}</span>
            <span className="text-accent-purple">/&gt;</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              icon={Github}
              href={contactInfo.github}
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              icon={Linkedin}
              href={contactInfo.linkedin}
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              icon={FileText}
              href={`mailto:${contactInfo.email}`}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="mt-16 grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                className="glass group rounded-xl px-4 py-4 text-center transition-all duration-300 hover:border-accent-indigo/30 hover:bg-white/[0.04]"
              >
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            onClick={scrollToAbout}
            className="mt-16 flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-accent-indigo"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
