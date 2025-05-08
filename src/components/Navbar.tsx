import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/components/ThemeProvider';
import { scrollToSection } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-softsell-dark/90 shadow-md backdrop-blur' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-softsell-blue to-softsell-teal bg-clip-text text-transparent animate-pulse-subtle">SoftSell</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('how-it-works')}
              className="text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavClick('why-choose-us')}
              className="text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className="text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
            >
              Contact
            </button>
            <Toggle 
              pressed={theme === 'dark'} 
              onPressedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="mr-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1.5"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Toggle>
            <Button variant="default" className="bg-softsell-blue hover:bg-softsell-blue/90 transition-transform hover:scale-105">
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <Toggle 
              pressed={theme === 'dark'} 
              onPressedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="mr-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1.5"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Toggle>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-softsell-dark shadow-lg">
            <button 
              onClick={() => handleNavClick('how-it-works')}
              className="block w-full text-left text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal px-3 py-2 rounded-md text-base font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavClick('why-choose-us')}
              className="block w-full text-left text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal px-3 py-2 rounded-md text-base font-medium"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className="block w-full text-left text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left text-gray-800 dark:text-gray-200 hover:text-softsell-blue dark:hover:text-softsell-teal px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </button>
            <Button variant="default" className="w-full bg-softsell-blue hover:bg-softsell-blue/90">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
