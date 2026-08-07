import { FileText, Trash2 } from "lucide-react";

export default function UploadPreview({ file }) {
  if (!file) return null;

  return (
    <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
            <FileText
              size={22}
              className="text-blue-400"
            />
          </div>

          <div>

            <h4 className="font-medium text-white">
              {file.name}
            </h4>

            <p className="text-sm text-slate-400">
              {(file.size / 1024).toFixed(2)} KB
            </p>

          </div>

        </div>

        <button
          className="
            rounded-xl
            p-3
            text-slate-400
            transition
            hover:bg-red-500/10
            hover:text-red-400
          "
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}