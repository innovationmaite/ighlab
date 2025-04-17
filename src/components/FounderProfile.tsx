
import React from 'react';
import { Award, Mic, Newspaper, Globe, Users } from 'lucide-react';

const FounderProfile = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="section-animate">
            <div className="rounded-lg overflow-hidden shadow-lg relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium">Driving healthcare innovation across continents</p>
                </div>
              </div>
              <img 
                src="/images/maite-gieskes.jpg" 
                alt="Maite Gieskes" 
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          
          <div className="section-animate">
            <div className="inline-flex items-center mb-2">
              <Globe className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">Global Health Innovator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Maite Gieskes</h2>
            <h3 className="text-xl text-blue-600 mb-6">Founder & Medical Device Engineer</h3>
            
            <p className="text-gray-700 mb-6">
              Maite Gieskes is an award-winning medical device engineer with extensive experience 
              developing innovative healthcare technologies for low and middle-income countries. 
              Her vision is to create a global laboratory where diverse stakeholders collaborate to 
              develop context-appropriate solutions that address critical healthcare inequalities worldwide.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Award className="text-purple-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Global Impact</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Developed multiple medical devices specifically designed for low-resource settings across continents</li>
                    <li>• Led international cross-functional teams in designing healthcare solutions for diverse cultural contexts</li>
                    <li>• Received international recognition for innovative approaches to global health challenges</li>
                    <li>• Successfully implemented user-centered design methodologies with communities worldwide</li>
                    <li>• Pioneered sustainable design practices in medical device development for global scaling</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mic className="text-blue-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">International Advocacy</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Speaker at United Nations forums on healthcare innovation and sustainable development</li>
                    <li>• Presented at global health conferences across five continents</li>
                    <li>• Conducted workshops on collaborative design methodologies for healthcare solutions</li>
                    <li>• Participated in international panel discussions on addressing healthcare inequalities</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Users className="text-teal-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Collaborative Leadership</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Built partnerships with healthcare institutions across 20+ countries</li>
                    <li>• Established knowledge-sharing networks between medical professionals worldwide</li>
                    <li>• Mentored young innovators from diverse backgrounds in healthcare technology</li>
                    <li>• Facilitated cross-cultural collaboration to ensure inclusive healthcare solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
