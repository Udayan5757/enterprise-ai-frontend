import { UploadCloud } from "lucide-react";
import Button from "../ui/Button";

export default function UploadDropzone({
  selectedFile,
  onBrowse,
}) {
  return (
    <div
      className="
        rounded-2xl
        border-2
        border-dashed
        border-slate-700
        bg-slate-900/40
        p-10
        transition-all
        duration-300
        hover:border-blue-500
        hover:bg-slate-900
      "
    >
      <div className="flex flex-col items-center text-center">

        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/10">
          <UploadCloud
            size={42}
            className="text-blue-400"
          />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          Drag & Drop your documents
        </h3>

        <p className="mt-3 max-w-lg text-slate-400">
          Upload PDF or TXT documents to create your enterprise knowledge base.
        </p>

        <div className="mt-8">
          <Button onClick={onBrowse}>
            Browse Files
          </Button>
        </div>

        {!selectedFile && (
          <p className="mt-6 text-sm text-slate-500">
            Supported formats: PDF • TXT
          </p>
        )}

      </div>
    </div>
  );
}