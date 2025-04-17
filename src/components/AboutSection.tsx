
import React from 'react';
import { Globe, Users, Lightbulb, Recycle, Share2 } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md hover:translate-y-[-5px] duration-300">
    <div className="rounded-full bg-purple-100 p-3 inline-flex mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 section-animate">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Our Global Vision</h2>
          <p className="text-lg text-gray-700 text-balance">
            The Innovation for Global Health Lab is built on the fundamental belief that healthcare innovation 
            should transcend geographical, economic, and cultural boundaries. We're creating a global movement 
            that brings diverse stakeholders together to solve health inequalities through collaborative innovation, 
            supporting the UN Sustainable Development Goals for health and wellbeing worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 section-animate">
          <FeatureCard 
            icon={<Users className="h-6 w-6 text-purple-600" />}
            title="Global Collaboration"
            description="We unite healthcare professionals, engineers, designers, policymakers, and communities across continents to co-create solutions that are truly universal yet locally adaptable."
          />
          <FeatureCard 
            icon={<Lightbulb className="h-6 w-6 text-blue-600" />}
            title="Transformative Innovation"
            description="Our lab fosters breakthrough ideas that challenge conventional approaches, focusing on context-specific technologies that can scale across diverse healthcare settings worldwide."
          />
          <FeatureCard 
            icon={<Share2 className="h-6 w-6 text-teal-600" />}
            title="Knowledge Exchange"
            description="We facilitate the open sharing of insights, methodologies and learning across disciplines and borders, creating a global repository of healthcare innovation practices."
          />
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center section-animate">
          <div className="inline-flex items-center justify-center mb-4">
            <Globe className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-heading font-semibold mb-4">Supporting UN Sustainable Development Goals</h3>
          <p className="text-lg text-gray-700 text-balance">
            Our work directly contributes to SDG 3 (Good Health and Well-being), while supporting 
            SDG 10 (Reduced Inequalities) and SDG 17 (Partnerships for the Goals). By bringing together 
            diverse stakeholders from around the world, we're building a collaborative ecosystem for 
            healthcare innovation that transcends borders and creates lasting impact where it's needed most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
