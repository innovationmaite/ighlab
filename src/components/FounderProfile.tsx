
import React from 'react';
import { Award, Mic, Newspaper } from 'lucide-react';

const FounderProfile = () => {
  return (
    <section id="founder" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="section-animate">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Maite Gieskes" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="section-animate">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Maite Gieskes</h2>
            <h3 className="text-xl text-health-blue mb-6">Founder & Medical Device Engineer</h3>
            
            <p className="text-gray-600 mb-6">
              Maite Gieskes is an award-winning medical device engineer with extensive experience 
              developing innovative healthcare technologies for low and middle-income countries. 
              Her passion for creating context-appropriate solutions has led to multiple successful 
              medical devices that address critical healthcare needs in underserved communities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Award className="text-health-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Achievements</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Developed multiple medical devices specifically designed for low-resource settings</li>
                    <li>• Led cross-functional teams in the design and implementation of healthcare solutions</li>
                    <li>• Received international recognition for innovative approaches to global health challenges</li>
                    <li>• Successfully implemented user-centered design methodologies in diverse healthcare contexts</li>
                    <li>• Pioneered sustainable design practices in medical device development</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mic className="text-health-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Public Speaking</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Guest speaker at various global health conferences and forums</li>
                    <li>• Presented at TEDx on innovative approaches to healthcare accessibility</li>
                    <li>• Conducted workshops on user-centered design for medical technologies</li>
                    <li>• Panel discussions on technology solutions for global health challenges</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Newspaper className="text-health-blue h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Media Coverage</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Featured in healthcare technology journals and publications</li>
                    <li>• Interviews with major media outlets on global health innovation</li>
                    <li>• Recognized in industry reports for contributions to medical device engineering</li>
                    <li>• Spotlighted for work on sustainable healthcare solutions</li>
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
