import { useRef, useState } from "react";
import { uploadDocument } from "../services/api";

function UploadBox() {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {

        const selectedFile = event.target.files[0] || null;

        setFile(selectedFile);
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
            setStatus(
                data.duplicate
                    ? "warning"
                    : data.indexed
                    ? "success"
                    : "error"
            );

            if (data.indexed) {
                setFile(null);

                // Reset file input
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }

        } catch (error) {

            console.error(error);

            setMessage(
                error.response?.data?.message ||
                "Upload failed. Make sure the backend is running."
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

            <div className="file-upload-container">

                <input
                    ref={fileInputRef}
                    id="document-upload"
                    className="file-input"
                    type="file"
                    accept=".pdf,.txt"
                    onChange={handleFileChange}
                    disabled={loading}
                />

                <label
                    htmlFor="document-upload"
                    className={`choose-file-button ${loading ? "disabled" : ""}`}
                >
                    Choose File
                </label>

                <span className="selected-file-name">
                    {file ? file.name : "No file chosen"}
                </span>

            </div>

            <button
                className="upload-button"
                onClick={uploadFile}
                disabled={loading || !file}
            >
                {loading ? "Uploading & Indexing..." : "Upload"}
            </button>

            {message && (
                <p className={`status-message ${status}`}>
                    {message}
                </p>
            )}

        </div>

    );
}

export default UploadBox;