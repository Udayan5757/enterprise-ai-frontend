import { useRef, useState } from "react";

import Button from "../ui/Button";
import Card from "../ui/Card";

import UploadDropzone from "./UploadDropzone";
import UploadPreview from "./UploadPreview";
import UploadProgress from "./UploadProgress";

import { uploadDocument } from "../../services/uploadService";

import toast from "react-hot-toast";

export default function UploadSection() {

    const inputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const openFilePicker = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e) => {

        const file = e.target.files?.[0];

        if (!file) return;

        setSelectedFile(file);

    };

    const handleUpload = async () => {

        if (!selectedFile) {
            toast.error("Please select a document.");
            return;
        }

        try {

            setUploading(true);
            setProgress(30);

            await uploadDocument(selectedFile);

            setProgress(100);

            toast.success("Document uploaded successfully.");

            setSelectedFile(null);

            inputRef.current.value = "";

        } catch (err) {

            console.error(err);

            toast.error(
                err?.response?.data?.message ||
                "Upload failed."
            );

        } finally {

            setUploading(false);

            setTimeout(() => {

                setProgress(0);

            }, 500);

        }

    };

    return (

        <Card>

            <div className="mb-6">

                <h2 className="text-xl font-semibold text-white md:text-2xl">
                    Upload Documents
                </h2>

                <p className="mt-2 text-sm text-slate-400 md:text-base">
                    Upload PDF or TXT documents to your knowledge base.
                </p>

            </div>

            <input
                ref={inputRef}
                hidden
                type="file"
                accept=".pdf,.txt"
                onChange={handleFileChange}
            />

            <UploadDropzone
                selectedFile={selectedFile}
                onBrowse={openFilePicker}
            />

            <UploadPreview
                file={selectedFile}
            />

            {uploading && (

                <UploadProgress
                    progress={progress}
                />

            )}

            <div className="mt-6 flex justify-stretch md:justify-end">

                <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || uploading}
                    className="w-full md:w-auto"
                >
                    {uploading
                        ? "Uploading..."
                        : "Upload Document"}
                </Button>

            </div>

        </Card>

    );

}