import { motion } from "framer-motion";
import {
    BrainCircuit,
    Database,
    FileText,
    Search,
    ShieldCheck,
    Zap,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Find relevant knowledge using semantic embeddings instead of keyword matching.",
  },
  {
    icon: Database,
    title: "Vector Database",
    description:
      "Store document embeddings for lightning-fast contextual retrieval.",
  },
  {
    icon: BrainCircuit,
    title: "RAG Powered AI",
    description:
      "Generate grounded answers using Retrieval-Augmented Generation.",
  },
  {
    icon: FileText,
    title: "Private Documents",
    description:
      "Upload PDFs and TXT files to create your own enterprise knowledge base.",
  },
  {
    icon: ShieldCheck,
    title: "JWT Security",
    description:
      "Secure authentication with protected APIs and role-based access.",
  },
  {
    icon: Zap,
    title: "Fast Responses",
    description:
      "Optimized backend architecture for responsive AI interactions.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-16 text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          FEATURES
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Built for Enterprise AI
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
          Everything required to build a secure, scalable and intelligent
          enterprise knowledge platform.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {features.map((feature, index) => {

          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10">

                <Icon className="h-7 w-7 text-blue-400" />

              </div>

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}