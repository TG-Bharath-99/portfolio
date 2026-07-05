import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  icon: Icon,
  onClick,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-indigo/50 focus:ring-offset-2 focus:ring-offset-primary";

  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
  };

  const content = (
    <>
      {Icon && <Icon size={18} />}
      {children}
    </>
  );

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={combinedClass}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      {content}
    </motion.button>
  );
}
