import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "../UI/BrandIcons";
import { contactInfo } from "../../data/portfolio";

const socialLinks = [
  { icon: Github, href: contactInfo.github, label: "GitHub" },
  { icon: Linkedin, href: contactInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-primary-50/50">
      <div className="container-custom px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#hero" className="text-lg font-bold tracking-tight">
            <span className="gradient-text">&lt;</span>
            <span className="text-slate-200">Bharath</span>
            <span className="gradient-text"> /&gt;</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-all duration-300 hover:border-accent-indigo/30 hover:bg-accent-indigo/10"
                aria-label={link.label}
              >
                <link.icon
                  size={18}
                  className="text-slate-400 transition-colors group-hover:text-accent-indigo"
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <p className="flex items-center gap-1.5 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Designed & Built with
            <Heart size={14} className="fill-accent-purple text-accent-purple" />
            by Ummadi Bharath
          </p>
        </div>
      </div>
    </footer>
  );
}
