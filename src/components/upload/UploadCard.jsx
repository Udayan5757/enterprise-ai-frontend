import Card from "../ui/Card";

export default function UploadCard({ children }) {
  return (
    <Card className="overflow-hidden">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Upload Documents
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Upload PDF or TXT files to build your private knowledge base.
        </p>
      </div>

      {children}
    </Card>
  );
}