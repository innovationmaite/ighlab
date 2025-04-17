
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 hero-gradient">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tighter text-balance max-w-4xl">
            Bridging Healthcare Inequalities Through Innovative Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl text-balance">
            We bring stakeholders together to create context-specific, sustainable healthcare 
            technologies through user-centered design and collaborative innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button 
              className="bg-health-blue hover:bg-health-blue-700 transition-colors"
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Mission
            </Button>
            <Button 
              variant="outline" 
              className="border-health-blue text-health-blue hover:bg-health-blue-50 transition-colors group"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Involved
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
