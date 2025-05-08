import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getAIResponse } from '@/lib/chat';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isLoading?: boolean;
}

const initialMessage: Message = {
  id: 1,
  text: "👋 Welcome to SoftSell! I'm your AI assistant. Ask me anything about selling your software licenses!",
  sender: 'bot',
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    const loadingMessage: Message = {
      id: messages.length + 2,
      text: 'Thinking...',
      sender: 'bot',
      isLoading: true,
    };
    setMessages(prev => [...prev, loadingMessage]);
    try {
      const response = await getAIResponse(input);
      setMessages(prev => [
        ...prev.filter(msg => !msg.isLoading),
        {
          id: messages.length + 2,
          text: response,
          sender: 'bot',
        },
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev.filter(msg => !msg.isLoading),
        {
          id: messages.length + 2,
          text: 'I apologize, but I am having trouble connecting right now. Please try again in a moment.',
          sender: 'bot',
        },
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  const exampleQuestions = [
    'What software licenses can I sell?',
    'How does the selling process work?',
    'How much can I get for my licenses?',
    'Is my data secure?',
    'How long does it take to get paid?',
    'What documents do I need?',
    'What are your fees?',
    'Can I get a refund if I change my mind?',
    'How do I get started?',
    'How do I contact support?',
  ];

  const handleExampleClick = (question: string) => {
    setInput(question);
  };

  const handleNewChat = () => {
    setMessages([initialMessage]);
    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed right-4 bottom-4 bg-softsell-blue text-white rounded-full p-3 shadow-lg hover:bg-softsell-blue/90 transition-all z-50 flex items-center gap-2"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>

      {/* Chat Widget */}
      <div
        className={`fixed right-4 bottom-20 w-72 sm:w-80 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ height: '384px', maxHeight: '90vh' }} // h-96 = 384px
      >
        {/* Header */}
        <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-softsell-blue/90 to-softsell-teal/80 text-white rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white/80 p-1 rounded-full mr-1">
              <Sparkles className="h-4 w-4 text-softsell-blue" />
            </div>
            <span className="font-semibold text-sm tracking-tight">AI Assistant</span>
          </div>
          <button
            onClick={handleNewChat}
            className="ml-2 p-1 rounded-full hover:bg-white/30 transition"
            title="Start a new chat"
          >
            <RefreshCw className="h-4 w-4 text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs sm:text-sm shadow-sm ${
                  message.sender === 'user'
                    ? 'bg-softsell-blue text-white rounded-tr-md'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 rounded-tl-md border border-gray-100 dark:border-gray-700'
                }`}
                style={{ fontFamily: 'inherit' }}
              >
                {message.isLoading ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    <p className="text-xs">{message.text}</p>
                  </div>
                ) : (
                  <p className="whitespace-pre-wrap">{message.text}</p>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Example Questions */}
        {messages.length < 3 && (
          <div className="px-3 py-1 border-t border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Try asking:</p>
            <div className="flex gap-2 overflow-x-auto flex-nowrap scrollbar-thin scrollbar-thumb-softsell-blue/30 scrollbar-track-transparent pb-1" style={{ WebkitOverflowScrolling: 'touch' }}>
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(question)}
                  className="text-xs bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 hover:bg-softsell-blue/10 dark:hover:bg-softsell-blue/20 transition whitespace-nowrap flex-shrink-0 border border-gray-200 dark:border-gray-700 shadow-sm"
                  style={{ fontFamily: 'inherit' }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700" />

        {/* Input */}
        <form onSubmit={handleSubmit} className="px-3 py-2 flex gap-2 items-center bg-white/60 dark:bg-gray-900/60 rounded-b-2xl">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 text-xs sm:text-sm bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1 focus:ring-2 focus:ring-softsell-blue/30"
            disabled={isProcessing}
            style={{ fontFamily: 'inherit' }}
          />
          <Button
            type="submit"
            size="icon"
            className="bg-softsell-blue hover:bg-softsell-teal text-white rounded-full p-2 shadow-md"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
