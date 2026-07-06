import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "../UI/BrandIcons";
import { contactInfo } from "../../data/portfolio";
import SectionHeading from "../UI/SectionHeading";
import GlassCard from "../UI/GlassCard";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: "text-accent-indigo",
    bgColor: "bg-accent-indigo/10",
    borderColor: "hover:border-accent-indigo/30",
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
    borderColor: "hover:border-accent-purple/30",
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.location)}`,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    borderColor: "hover:border-accent-cyan/30",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: contactInfo.github,
    username: "@TG-Bharath-99",
    description: "Check out my repositories",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: contactInfo.linkedin,
    username: "Bharath Ummadi",
    description: "Let's connect professionally",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-indigo/[0.05] blur-[120px]" />

      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to new opportunities, collaborations, and conversations"
        />

        <div className="mx-auto max-w-4xl">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <GlassCard className="relative overflow-hidden p-8 text-center sm:p-10" gradient>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-indigo/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent-purple/10 blur-3xl" />

              <div className="relative">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-lg shadow-accent-indigo/20">
                  <Send size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Let&apos;s Build Something{" "}
                  <span className="gradient-text">Amazing Together</span>
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-slate-400">
                  Whether you have a project in mind, want to collaborate, or just
                  want to say hello — feel free to reach out!
                </p>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={`mailto:${contactInfo.email}`}
                  className="btn-primary mt-6 inline-flex items-center gap-2 text-sm"
                >
                  <Mail size={18} />
                  Say Hello
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {contactCards.map((card) => (
              <motion.a
                key={card.label}
                variants={itemVariants}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <GlassCard
                  className={`group p-5 text-center transition-all duration-300 ${card.borderColor}`}
                >
                  <div
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${card.bgColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <card.icon size={22} className={card.color} />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {card.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-200 transition-colors group-hover:text-white">
                    {card.value}
                  </p>
                </GlassCard>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlassCard className="group flex items-center gap-4 p-5 transition-all duration-300 hover:border-accent-indigo/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-lg shadow-accent-indigo/20 transition-transform duration-300 group-hover:scale-110">
                    <link.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                      {link.label}
                    </p>
                    <p className="text-xs text-slate-500">{link.description}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-indigo"
                  />
                </GlassCard>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
