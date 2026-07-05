export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:bg-accent-indigo/10 hover:text-accent-indigo hover:ring-accent-indigo/30 sm:text-sm ${className}`}
    >
      {children}
    </span>
  );
}
