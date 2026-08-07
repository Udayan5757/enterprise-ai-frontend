import { motion } from "framer-motion";
import {
    Atom,
    Boxes,
    BrainCircuit,
    Cloud,
    Cpu,
    Database,
    Server,
    Shield,
} from "lucide-react";

const tech = [
  {
    title: "React",
    desc: "Modern Frontend",
    icon: Atom,
  },
  {
    title: "Spring Boot",
    desc: "REST Backend",
    icon: Server,
  },
  {
    title: "FastAPI",
    desc: "AI Service",
    icon: Cpu,
  },
  {
    title: "PostgreSQL",
    desc: "Relational Database",
    icon: Database,
  },
  {
    title: "ChromaDB",
    desc: "Vector Database",
    icon: Boxes,
  },
  {
    title: "LangChain",
    desc: "RAG Pipeline",
    icon: BrainCircuit,
  },
  {
    title: "JWT",
    desc: "Authentication",
    icon: Shield,
  },
  {
    title: "AWS",
    desc: "Deployment",
    icon: Cloud,
  },
];

export default function TechStack() {
  return (
    <section
      id="technology"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          TECHNOLOGY STACK
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Built With Modern Technologies
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
          A production-ready stack designed for scalable enterprise AI applications.
        </p>

      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {tech.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .07 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">

                <Icon className="h-8 w-8 text-blue-400" />

              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.desc}
              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}