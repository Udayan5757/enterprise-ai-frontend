import {
  Database,
  FileText,
  HardDrive,
  MessageSquare,
} from "lucide-react";

import MetricCard from "./MetricCard";

export default function StatsCard() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <MetricCard
        title="Documents"
        value="12"
        subtitle="+2 uploaded today"
        icon={FileText}
        iconClassName="text-sky-400"
      />

      <MetricCard
        title="Questions"
        value="248"
        subtitle="Asked this week"
        icon={MessageSquare}
        iconClassName="text-violet-400"
      />

      <MetricCard
        title="Knowledge Base"
        value="98%"
        subtitle="Successfully indexed"
        icon={Database}
        iconClassName="text-emerald-400"
      />

      <MetricCard
        title="Storage"
        value="18.4 MB"
        subtitle="Used by documents"
        icon={HardDrive}
        iconClassName="text-amber-400"
      />

    </div>
  );
}