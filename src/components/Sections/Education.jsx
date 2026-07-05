import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { education } from "../../data/portfolio";
import SectionHeading from "../UI/SectionHeading";
import GlassCard from "../UI/GlassCard";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-accent-cyan/[0.04] blur-[120px]" />

      <div className="container-custom">
        <SectionHeading
          title="Education"
          subtitle="My academic journey and qualifications"
        />

        <div className="mx-auto max-w-3xl">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-accent-indigo/50 via-accent-purple/50 to-transparent sm:block" />

            <GlassCard className="relative overflow-hidden p-6 sm:ml-14 sm:p-8" gradient>
              {/* Timeline dot */}
              <div className="absolute left-[-2.25rem] top-8 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-accent-indigo bg-primary sm:flex">
                <div className="h-2 w-2 rounded-full bg-accent-indigo" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-lg shadow-accent-indigo/20">
                  <GraduationCap size={28} />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {education.university}
                    </h3>
                  </div>

                  <p className="text-base font-medium text-accent-purple sm:text-lg">
                    {education.degree}
                  </p>

                  {/* Info Grid */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/5">
                      <Calendar size={16} className="text-accent-indigo" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                          Year
                        </p>
                        <p className="text-sm font-semibold text-slate-200">
                          {education.year}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/5">
                      <Award size={16} className="text-accent-purple" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                          CGPA
                        </p>
                        <p className="text-sm font-semibold text-slate-200">
                          {education.cgpa}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/5">
                      <BookOpen size={16} className="text-accent-cyan" />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                          Branch
                        </p>
                        <p className="text-sm font-semibold text-slate-200">
                          CSE
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div className="mt-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Object-Oriented Programming",
                        "Database Management Systems",
                        "Operating Systems",
                        "Computer Networks",
                      ].map((course) => (
                        <span
                          key={course}
                          className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
