import { SendHorizontal } from "lucide-react";
import { useState } from "react";

import Button from "../ui/Button";
import Textarea from "../ui/Textarea";

export default function ChatInput({ onSend }) {

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {

    if (!message.trim()) return;

    const question = message;

    setMessage("");

    await onSend(question);

  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

      e.preventDefault();

      handleSubmit();

    }

  };

  return (

    <div className="border-t border-slate-800 pt-5">

      <div className="flex items-end gap-4">

        <Textarea
          rows={2}
          value={message}
          placeholder="Ask anything about your documents..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[64px] max-h-40"
        />

        <Button
          onClick={handleSubmit}
          disabled={!message.trim()}
          className="h-16 w-16 rounded-2xl"
        >
          <SendHorizontal size={20} />
        </Button>

      </div>

      <p className="mt-3 text-xs text-slate-500">
        Press <span className="font-semibold">Enter</span> to send · <span className="font-semibold">Shift + Enter</span> for a new line
      </p>

    </div>

  );

}