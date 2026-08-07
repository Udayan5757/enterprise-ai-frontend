import { BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2">
            <BrainCircuit className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Enterprise AI
            </h1>

            <p className="text-xs text-slate-400">
              Knowledge Assistant
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-slate-300 hover:text-white transition">
            Features
          </a>

          <a href="#architecture" className="text-slate-300 hover:text-white transition">
            Architecture
          </a>

          <a href="#technology" className="text-slate-300 hover:text-white transition">
            Tech Stack
          </a>
        </nav>

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-500"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}