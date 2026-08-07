import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">

      <div className="rounded-[32px] border border-slate-800 bg-gradient-to-r from-blue-600 to-indigo-700 p-16 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Experience Enterprise AI?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Upload your knowledge base, ask intelligent questions,
          and unlock contextual AI insights in seconds.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/register"
            className="rounded-xl bg-white px-6 py-4 font-semibold text-slate-900"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-white/30 px-6 py-4 text-white"
          >
            Login
          </Link>

        </div>

      </div>

    </section>
  );
}