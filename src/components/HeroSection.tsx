
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Share2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="flex items-center justify-center mb-2">
            <Globe className="h-10 w-10 text-purple-600 mr-2" />
            <Share2 className="h-10 w-10 text-blue-500" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tighter text-balance max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500">
            Uniting Minds to Transform Global Healthcare
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl text-balance">
            A collaborative laboratory accelerating healthcare innovation across borders, 
            cultures, and disciplines to create lasting solutions for the world's most pressing 
            health challenges aligned with UN SDGs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button 
              className="bg-purple-600 hover:bg-purple-700 transition-colors"
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Vision
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors group"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Our Movement
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
