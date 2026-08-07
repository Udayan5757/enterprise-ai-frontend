export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-600/10">

        🤖

      </div>

      <div className="flex items-center gap-2 rounded-3xl border border-slate-800 bg-slate-900 px-6 py-5">

        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />

        <span
          className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
          style={{ animationDelay: "150ms" }}
        />

        <span
          className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
          style={{ animationDelay: "300ms" }}
        />

      </div>

    </div>
  );
}