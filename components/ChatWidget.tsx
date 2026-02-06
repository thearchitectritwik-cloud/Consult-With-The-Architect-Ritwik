import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Greetings. I am the Architect\'s digital twin. Ask me about our pricing protocols or consultancy philosophy.',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for Gemini context
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(userMsg.text, history);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-brand-dark border border-brand-gold/30 rounded-lg shadow-2xl shadow-black overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-slate-900 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold font-serif">Architect AI</h4>
                <p className="text-xs text-green-400 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/95">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-gold text-brand-dark rounded-br-none font-medium'
                      : 'bg-slate-800 text-gray-200 rounded-bl-none border border-white/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-lg rounded-bl-none border border-white/10">
                  <Loader2 className="h-4 w-4 text-brand-gold animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-slate-900 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about T.A.R..."
                className="w-full bg-slate-800 text-white pl-4 pr-10 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-gold/50 text-sm placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-brand-gold hover:text-white transition-colors disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-brand-gold rounded-full shadow-lg hover:bg-white transition-all duration-300"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-brand-dark" />
        ) : (
          <MessageSquare className="h-6 w-6 text-brand-dark group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;