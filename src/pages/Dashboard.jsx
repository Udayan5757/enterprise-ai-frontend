import DashboardLayout from "../components/layout/DashboardLayout";

import ActivityCard from "../components/dashboard/ActivityCard";
import StatsCard from "../components/dashboard/StatsCard";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";

import ChatWindow from "../components/chat/ChatWindow";
import UploadSection from "../components/upload/UploadSection";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <WelcomeBanner />

        <StatsCard />

        <div className="grid gap-6 xl:grid-cols-3">

          <div className="space-y-6 xl:col-span-2">

            <UploadSection />

            <ChatWindow />

          </div>

          <ActivityCard />

        </div>

      </div>
    </DashboardLayout>
  );
}