import { motion } from "framer-motion";
import {
    Bot,
    BrainCircuit,
    Database,
    FileText,
    MessageSquareText,
    Search,
} from "lucide-react";

const flow = [
  {
    icon: FileText,
    title: "Upload",
    subtitle: "PDF / TXT Documents",
  },
  {
    icon: BrainCircuit,
    title: "Embedding",
    subtitle: "Sentence Transformers",
  },
  {
    icon: Database,
    title: "Vector Store",
    subtitle: "ChromaDB",
  },
  {
    icon: Search,
    title: "Retriever",
    subtitle: "Semantic Search",
  },
  {
    icon: Bot,
    title: "LLM",
    subtitle: "Groq",
  },
  {
    icon: MessageSquareText,
    title: "AI Response",
    subtitle: "Grounded Answer",
  },
];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          SYSTEM ARCHITECTURE
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          How Your Documents Become Intelligence
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
          Every uploaded document is transformed into semantic embeddings,
          indexed inside a vector database and retrieved before the LLM
          generates a grounded answer.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-6">

        {flow.map((step, index) => {

          const Icon = step.icon;

          return (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .1 }}
              className="relative rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center"
            >

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">

                <Icon className="h-8 w-8 text-blue-400" />

              </div>

              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {step.subtitle}
              </p>

              {index !== flow.length - 1 && (

                <div className="absolute -right-6 top-1/2 hidden h-[2px] w-12 bg-blue-500 xl:block" />

              )}

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}