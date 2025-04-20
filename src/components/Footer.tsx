
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-xl font-heading font-semibold text-white mb-4">
              Innovation for Global Health Lab
            </h3>
            <p className="text-gray-400 max-w-md">
              Bridging healthcare inequalities through innovative, 
              context-specific solutions that prioritize sustainability 
              and user involvement.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/maitegieskes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a> */}
              <a 
                href="mailto:info@ighlab.org" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Navigate</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#founder" className="text-gray-400 hover:text-white transition-colors">Founder</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get Involved</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Stay in Touch
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ighlab.org" className="text-gray-400 hover:text-white transition-colors">
                    Partner With Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Innovation for Global Health Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
