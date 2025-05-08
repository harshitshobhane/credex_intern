
import React from 'react';
import { Upload, DollarSign, FileText, ChevronRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-softsell-blue" />,
      title: "Upload Your License",
      description: "Submit your software license details through our secure platform. We support all major enterprise software vendors popular in India."
    },
    {
      icon: <FileText className="h-10 w-10 text-softsell-blue" />,
      title: "Get an Instant Valuation",
      description: "Our AI-powered pricing engine evaluates your licenses based on current Indian market demand and provides an instant quote."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-softsell-blue" />,
      title: "Get Paid Quickly",
      description: "Accept our offer and receive payment within 48 hours. We handle all the transfer paperwork and GST compliance requirements."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-white dark:bg-gray-900 py-24">
      <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900 -z-10 top-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-softsell-blue font-medium mb-2 animate-fade-in">OUR PROCESS</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4 animate-reveal">
            How It <span className="text-softsell-blue">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 animate-fade-in animation-delay-200">
            Our streamlined process makes selling your unused software licenses quick and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connecting line - improved positioning */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-softsell-blue/10 via-softsell-blue/30 to-softsell-blue/10 -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in relative z-10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-5 rounded-full bg-blue-50 dark:bg-blue-900/20 mb-6 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
              <div className="mt-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-softsell-blue text-white font-bold text-lg shadow-md">
                  {index + 1}
                </div>
              </div>
              
              {/* Fixed arrow positioning between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-5 top-1/2 transform translate-x-0 -translate-y-1/2 z-20">
                  <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
                    <ChevronRight className="w-5 h-5 text-softsell-blue" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Better mobile arrow indicators */}
        <div className="md:hidden flex flex-col items-center mt-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-900 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
            <ChevronRight className="w-5 h-5 text-softsell-blue transform rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
