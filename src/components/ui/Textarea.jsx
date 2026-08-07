import clsx from "clsx";

export default function Textarea({
  className = "",
  ...props
}) {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full resize-none rounded-2xl border border-slate-700 bg-slate-900",
        "px-4 py-3 text-white placeholder:text-slate-500",
        "outline-none transition-all duration-200",
        "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
        className
      )}
    />
  );
}