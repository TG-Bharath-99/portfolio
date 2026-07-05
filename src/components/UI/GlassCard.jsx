export default function GlassCard({
  children,
  className = "",
  hover = true,
  gradient = false,
  ...props
}) {
  return (
    <div
      className={`glass rounded-2xl ${hover ? "glass-hover" : ""} ${
        gradient ? "gradient-border-top" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
