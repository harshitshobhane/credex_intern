
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/50 -z-10"></div>
      
      {/* Improved background elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_25%_25%,rgba(37,99,235,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_75%_75%,rgba(14,165,233,0.15),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-softsell-blue/5 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-softsell-teal/5 animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <p className="text-softsell-blue font-medium mb-4 animate-slide-in-left">MAXIMIZE YOUR SOFTWARE INVESTMENTS</p>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl bg-gradient-to-r from-softsell-blue to-softsell-teal bg-clip-text text-transparent mb-6 animate-reveal">
            Convert Your Unused Software Licenses Into Cash
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg animate-fade-in animation-delay-300">
            SoftSell helps businesses across India maximize the value of their unused software licenses. 
            Get an instant valuation and sell in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
            <Button 
              size="lg" 
              className="group bg-softsell-blue hover:bg-softsell-blue/90 text-white font-medium px-8 shadow-lg transition-all relative overflow-hidden"
              onClick={scrollToContact}>
              <span className="relative z-10">Sell My Licenses</span>
              <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-softsell-blue text-softsell-blue hover:bg-softsell-blue/10 shadow-sm hover:shadow-md transition-all">
              Get a Quote
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative flex justify-center animate-fade-in animation-delay-700">
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-softsell-blue/80 to-softsell-teal/80 rounded-full opacity-10 absolute blur-3xl"></div>
          <div className="relative animate-float" style={{ animationDuration: '6s' }}>
            <svg className="w-72 h-72 sm:w-96 sm:h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path 
                fill="#2563EB" 
                d="M50.2,-58.9C63.9,-45.4,73,-28.6,77.4,-9.7C81.8,9.3,81.5,30.4,72.2,47.1C62.8,63.8,44.4,76.1,25.1,79.9C5.8,83.7,-14.4,78.9,-32.1,69.4C-49.8,59.9,-65,45.7,-75.5,26.5C-86,7.4,-91.7,-16.7,-84.6,-35.7C-77.5,-54.7,-57.5,-68.7,-38.2,-79C-19,-89.3,-0.7,-95.9,15.1,-89.3C30.9,-82.7,36.5,-72.3,50.2,-58.9Z" 
                transform="translate(100 100)" 
                opacity="0.8"
                className="animate-glow"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 w-52 h-64 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 flex flex-col animate-scale-in hover-lift">
                <div className="flex justify-between mb-4">
                  <div className="h-10 w-20 bg-softsell-blue/10 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-softsell-blue">SoftSell</span>
                  </div>
                  <div className="h-10 w-10 bg-softsell-teal/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-softsell-teal">₹</span>
                  </div>
                </div>
                <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                <div className="h-5 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
                <div className="h-20 w-full bg-softsell-blue/10 rounded mb-4 flex items-center justify-center">
                  <span className="text-softsell-blue font-semibold">License Value:<br/>₹4,25,000</span>
                </div>
                <div className="h-8 w-full bg-softsell-teal rounded mt-auto flex items-center justify-center text-white text-xs font-bold hover:bg-softsell-teal/90 transition-colors cursor-pointer">
                  SELL NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#how-it-works" 
          className="text-gray-500 dark:text-gray-400 hover:text-softsell-blue dark:hover:text-softsell-blue transition-colors group"
        >
          <div className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 group-hover:bg-white dark:group-hover:bg-gray-800 transition-colors">
            <ArrowDown className="h-5 w-5" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
