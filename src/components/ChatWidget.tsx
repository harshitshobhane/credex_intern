
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const sampleResponses: Record<string, string> = {
  default: "I'm here to help answer any questions about selling your software licenses with SoftSell. What would you like to know?",
  greeting: "Hello! How can I help you with selling your unused software licenses today?",
  license: "SoftSell supports most major software licenses including Microsoft, Adobe, Oracle, SAP, Autodesk, VMware, and many more. You can get started by filling out our valuation form.",
  process: "Our process is simple: 1) Submit your license details through our secure form, 2) Receive an instant valuation, 3) Accept the offer and get paid within 48 hours. We handle all compliance and transfer paperwork.",
  payment: "We offer multiple payment methods including bank transfer, PayPal, and wire transfer. Most customers receive payment within 48 hours of accepting our offer.",
  compliance: "Yes, our process is fully compliant with software license agreements. We work with our legal team to ensure all transfers meet the requirements of the original license terms.",
  value: "The value of your licenses depends on several factors including software type, version, remaining subscription time, and current market demand. Our AI-powered pricing engine provides accurate real-time valuations."
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! How can I help you with selling your software licenses today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let responseText = sampleResponses.default;
      
      // Check for matching keywords
      if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        responseText = sampleResponses.greeting;
      } else if (lowerInput.includes('license') || lowerInput.includes('software')) {
        responseText = sampleResponses.license;
      } else if (lowerInput.includes('process') || lowerInput.includes('how') || lowerInput.includes('work')) {
        responseText = sampleResponses.process;
      } else if (lowerInput.includes('pay') || lowerInput.includes('payment') || lowerInput.includes('money')) {
        responseText = sampleResponses.payment;
      } else if (lowerInput.includes('legal') || lowerInput.includes('compliance') || lowerInput.includes('allowed')) {
        responseText = sampleResponses.compliance;
      } else if (lowerInput.includes('worth') || lowerInput.includes('value') || lowerInput.includes('price')) {
        responseText = sampleResponses.value;
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot'
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };
  
  const exampleQuestions = [
    "How does the process work?",
    "What software licenses do you accept?",
    "How much are my licenses worth?",
    "Is this process legally compliant?"
  ];
  
  const handleExampleClick = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={toggleChat}
        className="fixed right-6 bottom-6 bg-softsell-blue text-white rounded-full p-4 shadow-lg hover:bg-softsell-blue/90 transition-all z-50"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
      
      {/* Chat Widget */}
      <div 
        className={`fixed right-6 bottom-20 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '70vh' }}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-softsell-blue text-white rounded-t-xl">
          <div className="flex items-center">
            <div className="bg-white p-1.5 rounded-full mr-3">
              <MessageSquare className="h-5 w-5 text-softsell-blue" />
            </div>
            <div>
              <h3 className="font-medium">SoftSell Support</h3>
              <p className="text-xs text-blue-100">Ask us anything about selling licenses</p>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] rounded-2xl p-3 ${
                  message.sender === 'user' 
                    ? 'bg-softsell-blue text-white rounded-tr-none' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Example Questions */}
        {messages.length < 3 && (
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">You can ask:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(question)}
                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-softsell-blue hover:bg-softsell-blue/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;
