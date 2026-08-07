export default function UploadProgress({ progress }) {
  return (
    <div className="mt-6">

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm font-medium text-slate-300">
          Uploading...
        </span>

        <span className="text-sm font-semibold text-blue-400">
          {progress}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}