import * as React from 'react';
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

interface Message {
    text: string;
    sender: "user" | "bot";
}

const FloatingChat: React.FunctionComponent = () => {
    const [chatOpen, setChatOpen] = React.useState(false);
    const [messages, setMessages] = React.useState<Message[]>([
        { text: "Hello! How can I help you?", sender: "bot" }
    ]);
    const [input, setInput] = React.useState("");

    const sendMessage = () => {
        if (input.trim()) {
            const userMessage: Message = { text: input, sender: "user" };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInput("");

            // Simular respuesta del bot después de un corto retraso
            setTimeout(() => {
                const botResponse: Message = { text: "Thanks for reaching out! How can I assist you today?", sender: "bot" };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 1000);
        }
    };

    return (
        <>
            {/* Botón flotante */}
            <button 
                className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-pink-400 transition z-50"
                onClick={() => setChatOpen(!chatOpen)}
            >
                {chatOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
            </button>

            {/* Chat flotante */}
            {chatOpen && (
                <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col z-50">
                    {/* Header del Chat */}
                    <div className="bg-primary text-white p-3 rounded-t-lg flex justify-between items-center">
                        <h3 className="text-lg font-bold">Live Chat</h3>
                        <button onClick={() => setChatOpen(false)} className="text-white hover:text-gray-200">
                            <FaTimes size={18} />
                        </button>
                    </div>

                    {/* Mensajes del chat */}
                    <div className="flex-1 p-3 overflow-y-auto bg-gray-100 space-y-2">
                        {messages.map((msg, index) => (
                            <div 
                                key={index} 
                                className={`p-2 rounded-md text-sm max-w-[70%] ${
                                    msg.sender === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black self-start"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input para enviar mensajes */}
                    <div className="p-2 border-t flex flex-row space-x-3 items-center">
                        <input
                            type="text"
                            className="flex-1 p-2 border rounded-l focus:outline-none"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button 
                            className="bg-primary text-white p-2 rounded-lg hover:bg-pink-400 transition"
                            onClick={sendMessage}>
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingChat;
