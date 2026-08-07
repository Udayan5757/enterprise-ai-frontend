import Card from "../ui/Card";

export default function MetricCard({
    title,
    value,
    subtitle,
    icon: Icon,
    iconClassName = "text-blue-400",
}) {
    return (

        <Card>

            <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">

                    <p className="text-sm text-slate-400">
                        {title}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                        {value}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 break-words">
                        {subtitle}
                    </p>

                </div>

                <div
                    className={`shrink-0 rounded-2xl bg-slate-900 p-3 md:p-4 ${iconClassName}`}
                >
                    <Icon size={22} />
                </div>

            </div>

        </Card>

    );
}