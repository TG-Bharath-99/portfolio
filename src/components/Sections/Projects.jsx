import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { projects } from "../../data/portfolio";
import SectionHeading from "../UI/SectionHeading";
import GlassCard from "../UI/GlassCard";
import Badge from "../UI/Badge";
import Button from "../UI/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-accent-purple/[0.05] blur-[120px]" />

      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of projects that demonstrate my skills and passion for development"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <GlassCard className="group flex h-full flex-col overflow-hidden" gradient>
                {/* Project Header */}
                <div className="border-b border-white/5 p-6 sm:p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-lg shadow-accent-indigo/20">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 transition-colors group-hover:text-white sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 p-6 sm:p-7">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent-indigo" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-5">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border-t border-white/5 p-6 sm:p-7">
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="primary"
                      icon={Github}
                      href={project.github}
                      className="text-sm"
                    >
                      Source Code
                    </Button>
                    <Button
                      variant="outline"
                      icon={ExternalLink}
                      href={project.live}
                      className="text-sm"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
