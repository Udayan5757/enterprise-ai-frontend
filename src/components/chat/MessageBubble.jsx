import {
    Bot,
    Copy,
    RotateCcw,
    ThumbsDown,
    ThumbsUp,
    User,
} from "lucide-react";

export default function MessageBubble({
  role,
  content,
  sources = [],
}) {

  const isUser = role === "user";

  return (

    <div
      className={`flex gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      {!isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-600/10">
          <Bot
            size={20}
            className="text-blue-400"
          />
        </div>
      )}

      <div className="max-w-[78%]">

        <div
          className={`rounded-3xl px-6 py-5 ${
            isUser
              ? "bg-blue-600 text-white"
              : "border border-slate-800 bg-slate-900 text-slate-100"
          }`}
        >

          <p className="whitespace-pre-wrap leading-8">
            {content}
          </p>

          {!isUser && sources.length > 0 && (

            <div className="mt-5">

              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Sources
              </p>

              <div className="flex flex-wrap gap-2">

                {sources.map((source) => (

                  <span
                    key={source}
                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {source}
                  </span>

                ))}

              </div>

            </div>

          )}

        </div>

        {!isUser && (

          <div className="mt-3 flex items-center gap-2">

            <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white">
              <Copy size={16} />
            </button>

            <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white">
              <RotateCcw size={16} />
            </button>

            <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-800 hover:text-green-400">
              <ThumbsUp size={16} />
            </button>

            <button className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-800 hover:text-red-400">
              <ThumbsDown size={16} />
            </button>

          </div>

        )}

      </div>

      {isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900">
          <User
            size={20}
            className="text-slate-300"
          />
        </div>
      )}

    </div>

  );

}