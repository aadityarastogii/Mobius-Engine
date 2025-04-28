import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-500 p-4 text-white">
            <div className="flex items-center gap-3">
              <img
                src="https://i.imgur.com/1X4xvlp.png"  // You can replace this with your CEO image
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-bold">Ashwin</div>
                <div className="text-sm">CEO</div>
              </div>
            </div>
            <button onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div className="bg-gray-100 p-4 text-sm space-y-2">
            <div className="bg-white p-3 rounded-lg shadow text-gray-700">
              Hi! Share any question you have about the service here and we'll respond within 5 minutes.
            </div>
            <div className="text-gray-500 text-xs">2 hours ago</div>
          </div>

          {/* Footer */}
          <div className="p-3">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg">
              START CHAT
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
