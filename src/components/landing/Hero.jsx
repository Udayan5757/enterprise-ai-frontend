import { motion } from "framer-motion";
import { ArrowRight, Database, MessageSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="flex-1"
        >

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">

            <Sparkles size={16} />

            AI Powered Enterprise Knowledge Assistant

          </div>

          <h1 className="max-w-3xl text-6xl font-black leading-tight text-white">

            Chat with your

            <span className="block text-blue-400">

              Enterprise Knowledge

            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">

            Upload documents.

            Build a semantic knowledge base.

            Ask questions naturally.

            Get grounded AI answers powered by RAG.

          </p>

          <div className="mt-10 flex gap-4">

            <Link
              to="/register"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
            >

              Get Started

              <ArrowRight size={18} />

            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-slate-700 px-6 py-4 text-slate-300 transition hover:border-blue-500 hover:text-white"
            >

              Login

            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="hidden flex-1 items-center justify-center lg:flex"
        >

          <div className="relative">

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

              <div className="space-y-5">

                <div className="flex items-center gap-3">

                  <Database className="text-blue-400" />

                  <span className="text-white">

                    PDF Indexed

                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <MessageSquare className="text-green-400" />

                  <span className="text-white">

                    AI Response Generated

                  </span>

                </div>

                <div className="mt-8 rounded-xl bg-slate-800 p-5 text-slate-300">

                  "Explain the onboarding policy"

                </div>

                <div className="rounded-xl bg-blue-600/10 p-5 text-blue-300">

                  AI found relevant sections across your documents and generated a grounded response.

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}