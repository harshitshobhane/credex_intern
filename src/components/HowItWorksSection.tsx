
import React from 'react';
import { Upload, DollarSign, FileText } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-softsell-blue" />,
      title: "Upload Your License",
      description: "Submit your software license details through our secure platform. We support all major enterprise software vendors."
    },
    {
      icon: <FileText className="h-10 w-10 text-softsell-blue" />,
      title: "Get an Instant Valuation",
      description: "Our AI-powered pricing engine evaluates your licenses based on current market demand and provides an instant quote."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-softsell-blue" />,
      title: "Get Paid Quickly",
      description: "Accept our offer and receive payment within 48 hours. We handle all the transfer paperwork and compliance requirements."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            How It <span className="text-softsell-blue">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-4 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
              <div className="mt-6 relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-12 w-6 h-6 transform rotate-45 border-t-2 border-r-2 border-dashed border-softsell-blue/50 dark:border-softsell-teal/50"></div>
                )}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-softsell-blue text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
