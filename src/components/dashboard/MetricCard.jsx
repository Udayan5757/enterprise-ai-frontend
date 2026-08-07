import Card from "../ui/Card";

export default function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconClassName = "text-blue-400",
}) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>

        </div>

        <div
          className={`rounded-2xl bg-slate-900 p-4 ${iconClassName}`}
        >
          <Icon size={24} />
        </div>

      </div>

    </Card>
  );
}