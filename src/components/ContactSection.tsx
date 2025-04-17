
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MessageSquare, Send, Globe, Handshake } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 section-animate">
          <div className="inline-flex items-center justify-center mb-4">
            <Handshake className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600">Join Our Global Movement</h2>
          <p className="text-lg text-gray-700">
            Be part of a worldwide community working to transform healthcare through collaborative 
            innovation. Whether you're a healthcare professional, engineer, designer, policymaker, 
            or passionate about making a difference, we invite you to connect and contribute to our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 section-animate">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Globe className="h-6 w-6 text-purple-600 mr-2" />
              <span>Connect With Us</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  required 
                  className="border-purple-100 focus:border-purple-300 focus:ring-purple-200"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Your email address" 
                  required 
                  className="border-purple-100 focus:border-purple-300 focus:ring-purple-200"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                  Organization (Optional)
                </label>
                <Input 
                  id="organization" 
                  name="organization" 
                  placeholder="Your organization or institution" 
                  className="border-purple-100 focus:border-purple-300 focus:ring-purple-200"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  How would you like to collaborate?
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Share your ideas, expertise, or interest areas" 
                  required 
                  rows={4}
                  className="border-purple-100 focus:border-purple-300 focus:ring-purple-200" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                <Send size={16} className="mr-2" />
                Join Our Network
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="mr-4 mt-1 bg-purple-100 p-3 rounded-lg">
                  <Mail className="text-purple-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Global Inquiries</h4>
                  <p className="mt-1 text-gray-600">
                    For collaboration opportunities, partnerships, or questions about our mission:
                  </p>
                  <a 
                    href="mailto:info@innovationglobalhealth.org" 
                    className="mt-1 inline-block text-blue-600 hover:text-purple-600 transition-colors hover:underline"
                  >
                    info@innovationglobalhealth.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="mr-4 mt-1 bg-blue-100 p-3 rounded-lg">
                  <MessageSquare className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Knowledge Exchange</h4>
                  <p className="mt-1 text-gray-600">
                    Join our global community of innovators, practitioners, and thought leaders. 
                    Share your expertise, learn from others, and contribute to building solutions 
                    that can transform healthcare access worldwide.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="mr-4 mt-1 bg-teal-100 p-3 rounded-lg">
                  <Handshake className="text-teal-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">UN SDG Alignment</h4>
                  <p className="mt-1 text-gray-600">
                    Our lab is committed to supporting the United Nations Sustainable Development Goals. 
                    We welcome partnerships with organizations and individuals working toward these shared 
                    global objectives, particularly in healthcare innovation and equity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
