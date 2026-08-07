import { useState } from "react";
import toast from "react-hot-toast";

import { askQuestion } from "../services/chatService";

export default function useChat() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm your Enterprise AI assistant. How can I help you today?",
      sources: [],
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (question) => {

    if (!question.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const response = await askQuestion(question);

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: response.answer,
        sources: response.sources ?? [],
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);

    } catch (err) {

      console.error(err);

      toast.error(
        err?.response?.data?.message ||
        "Unable to get AI response."
      );

    } finally {

      setLoading(false);

    }

  };

  const clearConversation = () => {

    setMessages([
      {
        id: 1,
        role: "assistant",
        content: "Hello! I'm your Enterprise AI assistant. How can I help you today?",
        sources: [],
      },
    ]);

  };

  return {
    messages,
    loading,
    sendMessage,
    clearConversation,
  };

}