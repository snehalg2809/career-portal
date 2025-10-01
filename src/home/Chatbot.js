
import React, { useRef,useState, useEffect } from "react";
import "./Chatbot.css";
import SendIcon from "@mui/icons-material/Send";

function Chatbot({ chatOpen, setChatOpen }) {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Predefined Q&A list
  const faq = {
    hi: "hello! how can i help you today?",
    hey: "hello! ask me anything?",
    "what is your name": "I am CareerBot, your career assistant!",
    "how can i get cap round assistance":
      "Please fill out the inquiry form, Our team will get in touch with you as soon as possible",
    "how can i apply for personal guidance":
      "You can apply by filling out the inquiry form below.",
    "what courses do you offer":
      "We offer Engineering, Management, and Pharmacy courses.",
    "top medical colleges in pune": "D. Y. Patil",
    "how to get my preference-list":
      "Please use our 'Preference List Generator' feature and you will get your preference list, also you can download for your reference",
    default: "Sorry, I don't have an answer for that. Please rephrase.",
  };

  const getBestMatch = (input) => {
    const normalizedInput = input.trim().toLowerCase();
    let bestMatch = "default";
    let highestScore = 0;

    for (const question in faq) {
      if (question === "default") continue;

      const questionWords = question.split(" ");
      const inputWords = normalizedInput.split(" ");
      const commonWords = inputWords.filter((word) =>
        questionWords.includes(word)
      );
      const score = commonWords.length / questionWords.length;

      if (score > highestScore) {
        highestScore = score;
        bestMatch = question;
      }
    }

    return highestScore >= 0.3 ? faq[bestMatch] : faq.default;
  };

  const handleSend = () => {
    if (!input.trim() || typing) return;

    // Add user message
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Get bot response
    const botResponse = getBestMatch(input);
    typeBotMessage(botResponse);
  };

  const typeBotMessage = (text) => {
    setTyping(true);
    let index = 0;
    const tempMessage = { text: "", sender: "bot" };
    setMessages((prev) => [...prev, tempMessage]);

    const interval = setInterval(() => {
      index++;
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = text.slice(0, index);
        return newMessages;
      });

      if (index >= text.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 50); // typing speed in ms
  };
useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);
  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <span>CareerBot</span>
        {chatOpen && (
          <button className="close-btn" onClick={() => setChatOpen(false)}>
            ×
          </button>
        )}
      </div>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="chatbot-input-container">
        <input
          className="chatbot-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={typing} // disable input while typing
        />
        <button
          className="send-icon-container"
          onClick={handleSend}
          style={{
            width: "50px",
            height: "40px",
            border: "none",
            background: "#fff",
          }}
          disabled={typing}
        >
          <SendIcon className="send-icon" />
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
