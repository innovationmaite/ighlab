
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 backdrop-blur-sm py-4 transition-all duration-300",
      scrolled ? "bg-white/95 shadow-sm" : "bg-transparent"
    )}>
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-purple-600" />
            <span className="font-heading font-semibold text-xl md:text-2xl bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              Innovation for Global Health Lab
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
            Our Vision
          </a>
          <a href="#founder" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
            Leadership
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
            Collaborate
          </a>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors" 
            size="sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Network
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[76px] bg-white z-40 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-8 space-y-6">
          <a 
            href="#about" 
            className="text-xl font-medium text-gray-800 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Our Vision
          </a>
          <a 
            href="#founder" 
            className="text-xl font-medium text-gray-800 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Leadership
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium text-gray-800 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Collaborate
          </a>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors w-full"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Join Our Network
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
