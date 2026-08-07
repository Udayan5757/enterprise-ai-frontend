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

            <div className="border-b border-slate-800 pb-4">

                <h2 className="text-xl font-semibold text-white md:text-2xl">
                    AI Assistant
                </h2>

                <p className="mt-1 text-sm text-slate-400 md:text-base">
                    Ask questions about your enterprise knowledge.
                </p>

            </div>

            <div className="my-6 flex h-[50vh] min-h-[320px] flex-col gap-5 overflow-y-auto pr-1 md:h-[400px] md:pr-2">

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