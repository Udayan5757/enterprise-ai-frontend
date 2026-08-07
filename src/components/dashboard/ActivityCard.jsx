import {
    Clock3,
    FileText,
    Sparkles,
    UserRound,
} from "lucide-react";

import Card from "../ui/Card";

const activities = [
  {
    icon: FileText,
    title: "Employee-Handbook.pdf",
    subtitle: "Indexed successfully",
  },
  {
    icon: Sparkles,
    title: "What is the leave policy?",
    subtitle: "Latest conversation",
  },
  {
    icon: Clock3,
    title: "Average response time",
    subtitle: "1.2 seconds",
  },
  {
    icon: UserRound,
    title: "Current session",
    subtitle: "Java Full Stack Developer",
  },
];

export default function ActivityCard() {
  return (
    <Card>

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-white">
          Workspace Overview
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Recent activity and workspace insights.
        </p>

      </div>

      <div className="space-y-4">

        {activities.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition hover:border-slate-700"
            >

              <div className="rounded-xl bg-slate-800 p-3">
                <Icon
                  size={18}
                  className="text-blue-400"
                />
              </div>

              <div className="min-w-0">

                <h4 className="truncate font-medium text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  {item.subtitle}
                </p>

              </div>

            </div>
          );

        })}

      </div>

    </Card>
  );
}