
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center space-x-2">
            <span className="font-heading font-semibold text-xl md:text-2xl bg-gradient-to-r from-health-blue to-health-green bg-clip-text text-transparent">
              Innovation for Global Health Lab
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 hover:text-health-blue-600 transition-colors font-medium">
            About
          </a>
          <a href="#founder" className="text-gray-600 hover:text-health-blue-600 transition-colors font-medium">
            Founder
          </a>
          <a href="#contact" className="text-gray-600 hover:text-health-blue-600 transition-colors font-medium">
            Contact
          </a>
          <Button 
            className="bg-health-blue hover:bg-health-blue-700 transition-colors" 
            size="sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Stay in Touch
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
            className="text-xl font-medium text-gray-800 hover:text-health-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#founder" 
            className="text-xl font-medium text-gray-800 hover:text-health-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Founder
          </a>
          <a 
            href="#contact" 
            className="text-xl font-medium text-gray-800 hover:text-health-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Button 
            className="bg-health-blue hover:bg-health-blue-700 transition-colors w-full"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Stay in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
