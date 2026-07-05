import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="gradient-underline inline-block text-3xl font-bold text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
