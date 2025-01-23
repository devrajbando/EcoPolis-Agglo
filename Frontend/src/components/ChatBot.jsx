import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { sendMsgToOpenAI } from "../utils/OpenAI";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "mychatapp-76ac5.firebaseapp.com",
  projectId: "mychatapp-76ac5",
  storageBucket: "mychatapp-76ac5.firebasestorage.app",
  messagingSenderId: "179708938136",
  appId: "1:179708938136:web:4eb58def43500699a08ded",
  measurementId: "G-NS1P4HL7Z4",
};

const app = initializeApp(firebaseConfig);

const Chat = ({setIsSidebarOpen,isSidebarOpen}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSend = async () => {
      if (!input.trim()) return;
  
      try {
        const updatedMessages = [...messages, { text: input, isBot: false }];
        setMessages(updatedMessages);
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  
        const res = await sendMsgToOpenAI(input);
  
        const finalMessages = [...updatedMessages, { text: res, isBot: true }];
        setMessages(finalMessages);
        localStorage.setItem("chatMessages", JSON.stringify(finalMessages));
  
        setInput("");
      } catch (error) {
        console.error("Error in handleSend:", error);
        const errorMessages = [
          ...messages,
          {
            text: "Sorry, there was an error processing your request.",
            isBot: true,
          },
        ];
        setMessages(errorMessages);
        localStorage.setItem("chatMessages", JSON.stringify(errorMessages));
      }
    };
  
    return (
      <div
        className={`z-10 fixed top-16 right-0 bottom-0 w-4/12 bg-green-300 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <X
          size={24}
          onClick={toggleSidebar}
          className="absolute top-5 left-5 text-black"
        />
  
        <div
          className="overflow-y-auto p-4"
          style={{ height: "calc(100% - 230px)" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`rounded-lg p-3 mb-2 shadow-sm max-w-[80%] ${
                msg.isBot
                  ? "bg-[#0f162b] text-white ml-0"
                  : "bg-[#17a34b] text-white ml-auto"
              }`}
            >
              <p>{msg.text}</p>
              <span
                className={`text-xs ${
                  msg.isBot ? "text-gray-300" : "text-white"
                }`}
              >
                {new Date().toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
  
        <div className="p-4 absolute bottom-0 w-full">
          <textarea
            className="w-full h-32 p-2 border rounded-md resize-none focus:outline-none bg-gray-200 text-black"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <div className="flex gap-5">
            <button
              onClick={handleSend}
              className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors" onClick={()=>{
              localStorage.removeItem("chatMessages");
              setMessages([]);
            }}>
              Clear Chat
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Chat;