
import React from 'react';
import { Shield, Clock, DollarSign, Users } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-softsell-blue" />,
      title: "Best Market Value",
      description: "Our network of buyers ensures you get the highest price for your unused software licenses."
    },
    {
      icon: <Clock className="h-6 w-6 text-softsell-blue" />,
      title: "Quick Turnaround",
      description: "Receive payment within 48 hours of accepting our offer, not weeks or months."
    },
    {
      icon: <Shield className="h-6 w-6 text-softsell-blue" />,
      title: "Secure & Compliant",
      description: "Our platform ensures all transactions are legally compliant and data is kept secure."
    },
    {
      icon: <Users className="h-6 w-6 text-softsell-blue" />,
      title: "Expert Support",
      description: "Our team of license specialists will guide you through every step of the process."
    }
  ];

  return (
    <section id="why-choose-us" className="section bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Why Choose <span className="text-softsell-blue">SoftSell</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We've helped thousands of businesses recover value from their unused software licenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-600 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-block p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4">
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

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <p className="text-4xl font-bold text-softsell-blue">1000+</p>
              <p className="text-gray-600 dark:text-gray-300">Licenses Sold</p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <p className="text-4xl font-bold text-softsell-blue">$10M+</p>
              <p className="text-gray-600 dark:text-gray-300">Value Recovered</p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: '450ms' }}>
              <p className="text-4xl font-bold text-softsell-blue">500+</p>
              <p className="text-gray-600 dark:text-gray-300">Happy Customers</p>
            </div>
            <div className="p-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <p className="text-4xl font-bold text-softsell-blue">24h</p>
              <p className="text-gray-600 dark:text-gray-300">Avg. Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
