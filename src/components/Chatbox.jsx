import { useState } from "react";
import { askQuestion } from "../services/api";

function ChatBox() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [sources, setSources] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const sendQuestion = async () => {

        if (!question.trim()) {
            return;
        }

        setLoading(true);
        setError("");
        setAnswer("");
        setSources([]);

        try {

            const data = await askQuestion(question.trim());

            setAnswer(data.answer);
            setSources(data.sources || []);

        } catch (err) {

            console.error(err);

            setError(
                err.response?.data?.message ||
                "Something went wrong. Upload a document first, then try again."
            );

        } finally {

            setLoading(false);

        }

    };

    const handleKeyDown = (event) => {

        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendQuestion();
        }

    };

    return (

        <div className="chat-box">

            <h3>Ask AI</h3>

            <p className="chat-hint">
                Ask questions about your uploaded documents.
            </p>

            <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about your documents..."
                disabled={loading}
            />

            <button onClick={sendQuestion} disabled={loading || !question.trim()}>
                {loading ? "Thinking..." : "Send"}
            </button>

            {error && (
                <p className="status-message error">{error}</p>
            )}

            {answer && (

                <div className="answer-box">

                    <h4>Answer</h4>

                    <p>{answer}</p>

                    {sources.length > 0 && (

                        <div className="sources-box">

                            <h5>Sources</h5>

                            <ul>
                                {sources.map((source, index) => (
                                    <li key={index}>{source}</li>
                                ))}
                            </ul>

                        </div>

                    )}

                </div>

            )}

        </div>

    );

}

export default ChatBox;
