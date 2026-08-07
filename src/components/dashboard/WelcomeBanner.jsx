import { Sparkles } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-8">
      <div className="flex items-center gap-3">
        <Sparkles className="text-blue-400" />
        <span className="text-blue-300 text-sm font-medium">
          Enterprise AI Workspace
        </span>
      </div>

      <h1 className="mt-4 text-4xl font-bold text-white">
        Welcome Back 👋
      </h1>

      <p className="mt-3 max-w-2xl text-slate-400">
        Upload enterprise documents, ask contextual questions and receive
        grounded AI responses using your private knowledge base.
      </p>
    </div>
  );
}