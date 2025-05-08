
import React from 'react';
import { Shield, Clock, DollarSign, Users } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-softsell-blue" />,
      title: "Best Market Value",
      description: "Our network of buyers ensures you get the highest price for your unused software licenses across India."
    },
    {
      icon: <Clock className="h-6 w-6 text-softsell-blue" />,
      title: "Quick Turnaround",
      description: "Receive payment within 48 hours of accepting our offer, not weeks or months."
    },
    {
      icon: <Shield className="h-6 w-6 text-softsell-blue" />,
      title: "Secure & Compliant",
      description: "Our platform ensures all transactions comply with Indian IT laws and your data is kept secure."
    },
    {
      icon: <Users className="h-6 w-6 text-softsell-blue" />,
      title: "Expert Support",
      description: "Our team of license specialists in Bangalore, Delhi and Mumbai will guide you through every step."
    }
  ];

  return (
    <section id="why-choose-us" className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Why Choose <span className="text-softsell-blue">SoftSell</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We've helped thousands of businesses across India recover value from their unused software licenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 animate-fade-in transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-block p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4 animate-pulse-subtle">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

       
    
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
