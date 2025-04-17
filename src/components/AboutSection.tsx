
import React from 'react';
import { Users, Lightbulb, Recycle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
    <div className="rounded-full bg-health-blue-50 p-3 inline-flex mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 section-animate">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 text-balance">
            The Innovation for Global Health Lab is founded on the belief that healthcare is a basic human 
            right that should be accessible to all, regardless of geographic or economic circumstances. 
            We're at the beginning of our journey to bridge healthcare inequalities through innovative, 
            context-specific solutions that prioritize sustainability and user involvement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 section-animate">
          <FeatureCard 
            icon={<Users className="h-6 w-6 text-health-blue" />}
            title="Co-Creation & User-Centered Design"
            description="We believe that the most effective solutions come from working directly with users and communities, ensuring technologies truly meet their needs and context."
          />
          <FeatureCard 
            icon={<Lightbulb className="h-6 w-6 text-health-blue" />}
            title="Innovative Technology"
            description="We focus on developing context-specific technologies that address real challenges in healthcare access and delivery in diverse settings."
          />
          <FeatureCard 
            icon={<Recycle className="h-6 w-6 text-health-blue" />}
            title="Sustainability"
            description="Our solutions prioritize both environmental sustainability and long-term viability, with attention to product lifecycle and material considerations."
          />
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center section-animate">
          <h3 className="text-2xl font-heading font-semibold mb-4">Our Vision</h3>
          <p className="text-lg text-gray-600 text-balance">
            We envision a world where innovative healthcare solutions are accessible to all communities, 
            designed with and for the people who need them most. By bringing together diverse stakeholders 
            from healthcare, engineering, design, and local communities, we aim to create a collaborative 
            ecosystem that generates sustainable, impactful solutions to global health challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
