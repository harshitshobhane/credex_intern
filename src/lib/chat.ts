import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { LLMChain } from 'langchain/chains';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

// Initialize ChatOpenAI with your API key
const model = new ChatOpenAI({
  openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
  temperature: 0.7,
  modelName: 'gpt-3.5-turbo',
});

// Create a prompt template for the chat
const promptTemplate = new PromptTemplate({
  template: `You are a helpful customer support assistant for SoftSell, a platform for selling software licenses.
Context: {context}
User Question: {question}

Please provide a helpful and accurate response. If you're not sure about something, say so and suggest contacting support.
Response:`,
  inputVariables: ['context', 'question'],
});

// Create the chain
const chain = new LLMChain({
  llm: model,
  prompt: promptTemplate,
});

// Fallback responses in case the API call fails
const fallbackResponses: Record<string, string> = {
  default: "I apologize, but I'm having trouble connecting to our AI system right now. Please try again in a moment or contact our support team directly.",
  license: "We support most major software licenses including Microsoft, Adobe, Oracle, SAP, Autodesk, VMware, and many more. You can get started by filling out our valuation form.",
  process: "Our process is simple: 1) Submit your license details through our secure form, 2) Receive an instant valuation, 3) Accept the offer and get paid within 48 hours. We handle all compliance and transfer paperwork.",
  payment: "We offer multiple payment methods including bank transfer, PayPal, and wire transfer. Most customers receive payment within 48 hours of accepting our offer.",
  compliance: "Yes, our process is fully compliant with software license agreements. We work with our legal team to ensure all transfers meet the requirements of the original license terms.",
  value: "The value of your licenses depends on several factors including software type, version, remaining subscription time, and current market demand. Our AI-powered pricing engine provides accurate real-time valuations."
};

// Expanded and more detailed predefined responses for common questions
const predefinedResponses: Record<string, string> = {
  greeting: "Hello! 👋 I'm your SoftSell assistant. Ask me anything about selling your unused software licenses!",
  pricing: "Our pricing is based on current market rates and the type of license you have. You can get an instant valuation by clicking 'Sell My Licenses' or 'Get a Quote' on the homepage.",
  support: "Our support team is available 24/7. If you have any questions or need help, just ask here or use the contact form.",
  security: "Your security is our priority. All your information is encrypted and handled with strict confidentiality.",
  verification: "We verify all licenses through official channels to ensure authenticity and compliance with software vendors.",
  transfer: "The transfer process is simple: submit your license details, get a valuation, accept the offer, and we handle all paperwork and transfer steps.",
  timeline: "Most sales are completed within 48-72 hours from your acceptance of our offer. Payment is usually processed within this time frame.",
  requirements: "You'll need proof of ownership and license details. We'll guide you through every step after you start the process.",
  fees: "We charge a small commission only on successful sales. The exact amount depends on your license type and value, and will be shown in your offer.",
  refund: "If you're not satisfied, let us know! We offer a satisfaction guarantee and will work to resolve any issues.",
  licenses: "We accept most major software licenses, including Microsoft, Adobe, Oracle, SAP, Autodesk, VMware, and more. If you're unsure, just ask!",
  process: "1. Submit your license details. 2. Get an instant valuation. 3. Accept the offer. 4. Get paid. We handle all compliance and paperwork.",
  payment: "We pay via bank transfer, PayPal, or wire transfer. Most payments are completed within 48 hours after you accept our offer."
};

// Helper: keyword groups for flexible matching
const keywordGroups = [
  { keys: ['hi', 'hello', 'hey', 'greetings'], response: 'greeting' },
  { keys: ['price', 'cost', 'fee', 'charge', 'commission', 'worth', 'value'], response: 'pricing' },
  { keys: ['help', 'support', 'assist', 'question', 'contact'], response: 'support' },
  { keys: ['secure', 'safe', 'security', 'protect', 'privacy', 'confidential'], response: 'security' },
  { keys: ['verify', 'verification', 'authentic', 'real', 'genuine'], response: 'verification' },
  { keys: ['transfer', 'move', 'change', 'ownership', 'handover'], response: 'transfer' },
  { keys: ['time', 'long', 'duration', 'how soon', 'when', 'timeline', 'fast', 'quick'], response: 'timeline' },
  { keys: ['need', 'require', 'document', 'proof', 'ownership', 'info', 'information'], response: 'requirements' },
  { keys: ['fee', 'commission', 'charge', 'cost'], response: 'fees' },
  { keys: ['refund', 'return', 'money back', 'cancel'], response: 'refund' },
  { keys: ['license', 'licenses', 'software', 'accept', 'supported'], response: 'licenses' },
  { keys: ['process', 'steps', 'how', 'work', 'procedure'], response: 'process' },
  { keys: ['pay', 'payment', 'paid', 'money', 'receive'], response: 'payment' },
];

export const getAIResponse = async (question: string): Promise<string> => {
  try {
    const lowerQuestion = question.toLowerCase();
    // Flexible keyword matching
    for (const group of keywordGroups) {
      if (group.keys.some(key => lowerQuestion.includes(key))) {
        return predefinedResponses[group.response];
      }
    }
    // Friendly fallback
    return "I'm here to help with anything about selling your software licenses! You can ask about pricing, process, security, payment, or anything else. Or, click 'Sell My Licenses' to get started.";
  } catch (error) {
    console.error('Error getting response:', error);
    return "Sorry, something went wrong. Please try again or contact support.";
  }
}; 