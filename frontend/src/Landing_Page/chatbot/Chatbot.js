// src/Landing_Page/chatbot/Chatbot.js
import React, { useState } from "react";
import "./Chatbot.css";
import { FaCommentDots, FaTimes } from "react-icons/fa";
const backendURL = process.env.REACT_APP_BACKEND_URL;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setChat((prev) => [...prev, newMessage]);

    try {
      const response = await fetch(`${backendURL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botReply = { sender: "bot", text: data.reply };

      setChat((prev) => [...prev, botReply]);
      setInput("");
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I couldn't respond. Please try again." },
      ]);
    }
  };
  

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>AYUSH Assistant</span>
            <FaTimes onClick={toggleChat} className="chat-close" />
          </div>
          <div className="chat-messages">
            {chat.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      {!isOpen && (
        <div className="chat-icon" onClick={toggleChat}>
          <FaCommentDots />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
