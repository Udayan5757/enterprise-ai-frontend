import clsx from "clsx";

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white",

    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-500 text-white",
  };

  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl px-4 py-2 font-medium transition duration-300",
        styles[variant],
        className
      )}
    >
      {children}
    </button>
  );
}