import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <aside className="hidden lg:block fixed inset-y-0 left-0 w-72">
        <Sidebar />
      </aside>

      <div className="min-h-screen lg:ml-72">

        <Header />

        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}