import { useState } from "react";
import { uploadDocument } from "../services/api";

function UploadBox() {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {

        setFile(event.target.files[0] || null);
        setMessage("");
        setStatus("");
    };

    const uploadFile = async () => {

        if (!file) {
            setMessage("Please select a PDF or TXT file.");
            setStatus("error");
            return;
        }

        setLoading(true);
        setMessage("");
        setStatus("");

        try {

            const data = await uploadDocument(file);

            setMessage(data.message);
            setStatus(data.duplicate ? "warning" : data.indexed ? "success" : "error");

            if (data.indexed) {
                setFile(null);
            }

        } catch (error) {

            console.error(error);

            setMessage(
                error.response?.data?.message ||
                "Upload failed. Make sure the backend is running on port 8080."
            );
            setStatus("error");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="upload-box">

            <h3>Upload Document</h3>

            <p className="upload-hint">
                Upload a PDF or TXT file. It will be indexed immediately — no rebuild needed.
            </p>

            <input
                type="file"
                accept=".pdf,.txt"
                onChange={handleFileChange}
                disabled={loading}
            />

            {file && (
                <p className="file-name">Selected: {file.name}</p>
            )}

            <button onClick={uploadFile} disabled={loading || !file}>
                {loading ? "Uploading & Indexing..." : "Upload"}
            </button>

            {message && (
                <p className={`status-message ${status}`}>{message}</p>
            )}

        </div>

    );

}

export default UploadBox;
