import {
  BrainCircuit,
  FileText,
  LayoutDashboard,
  LogOut,
  MessageSquare,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

export default function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    window.location.href = "/";

  };

  return (

    <aside className="h-screen w-72 border-r border-slate-800 bg-slate-950 flex flex-col">

      <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-6">

        <div className="rounded-xl bg-blue-600 p-2">
          <BrainCircuit size={22} />
        </div>

        <div>
          <h1 className="text-lg font-bold">
            Enterprise AI
          </h1>

          <p className="text-xs text-slate-400">
            Knowledge Assistant
          </p>
        </div>

      </div>

      <nav className="flex-1 space-y-2 px-4 py-6">

        <button className="flex w-full items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 text-left transition hover:bg-slate-700">
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <FileText size={18} />
          Documents
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <MessageSquare size={18} />
          AI Chat
        </button>

      </nav>

      <div className="border-t border-slate-800 p-4">

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>

  );

}