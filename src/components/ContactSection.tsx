
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MessageSquare, Send } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 section-animate">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Stay in Touch</h2>
          <p className="text-lg text-gray-600">
            We're at the beginning of our journey and would love to connect with you. 
            Whether you're interested in collaboration, have questions, or want to stay updated 
            on our progress, please reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 section-animate">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Get Involved</h3>
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
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message" 
                  required 
                  rows={4} 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-health-blue hover:bg-health-blue-700 transition-colors"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-health-blue-50 p-2 rounded-full">
                  <Mail className="text-health-blue h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="mt-1 text-gray-600">
                    For inquiries, partnerships, or just to say hello:
                  </p>
                  <a 
                    href="mailto:info@innovationglobalhealth.org" 
                    className="mt-1 inline-block text-health-blue hover:underline"
                  >
                    info@innovationglobalhealth.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-health-blue-50 p-2 rounded-full">
                  <MessageSquare className="text-health-blue h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Stay Updated</h4>
                  <p className="mt-1 text-gray-600">
                    Follow our journey as we develop innovative solutions for global health challenges.
                    We'll keep you informed about our progress, opportunities for collaboration, and
                    upcoming initiatives.
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
