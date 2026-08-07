import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">

      {/* Fixed Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-72">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="ml-72 min-h-screen">

        <Header />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}