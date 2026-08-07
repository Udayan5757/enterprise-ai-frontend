import Card from "../ui/Card";

import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

import useChat from "../../hooks/useChat";

export default function ChatWindow() {

  const {
    messages,
    loading,
    sendMessage,
  } = useChat();

  return (

    <Card>

      <div className="border-b border-slate-800 pb-5">

        <h2 className="text-xl font-semibold text-white">
          AI Assistant
        </h2>

        <p className="mt-1 text-slate-400">
          Ask questions about your enterprise knowledge.
        </p>

      </div>

      <div className="my-6 flex h-[400px] flex-col gap-6 overflow-y-auto pr-2">

        {messages.map((message) => (

          <MessageBubble
            key={message.id}
            role={message.role}
            content={message.content}
            sources={message.sources}
          />

        ))}

        {loading && <TypingIndicator />}

      </div>

      <ChatInput
        onSend={sendMessage}
      />

    </Card>

  );

}