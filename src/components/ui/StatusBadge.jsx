export default function StatusBadge({
  status = "online",
  text = "Online",
}) {
  const color =
    status === "online"
      ? "bg-green-500"
      : "bg-red-500";

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span className="text-sm">{text}</span>
    </div>
  );
}