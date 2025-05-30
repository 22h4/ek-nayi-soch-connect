
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every community with empathy and understanding, ensuring our support truly meets their needs.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong partnerships with local communities to create sustainable, long-lasting positive change.'
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Believing that quality education is the foundation for breaking cycles of poverty and creating opportunities.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Using creative solutions and modern approaches to address traditional challenges in new ways.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-warm-orange/10 rounded-full text-warm-orange font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              About Our Mission
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Transforming Lives Through
              <span className="block text-gradient">Education & Care</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded with the belief that every child deserves access to quality education and healthcare, 
              Ek Nayi Soch has been working tirelessly to bridge the gap between privilege and possibility.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  It all began with a simple observation: talented children in rural communities 
                  were being held back not by lack of ability, but by lack of opportunity. In 2015, 
                  our founders visited a small village in Rajasthan and met children who walked 
                  miles to attend a school with no proper infrastructure.
                </p>
                <p>
                  That day, we made a promise. We would work to ensure that geography, economic 
                  status, or social barriers would never again prevent a child from reaching 
                  their full potential. Today, we've grown into a movement of educators, 
                  healthcare workers, and passionate volunteers.
                </p>
                <p>
                  Every program we run, every school we build, and every child we support 
                  brings us closer to a future where opportunity is a right, not a privilege.
                </p>
              </div>
            </div>

            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-warm-blue to-blue-600 rounded-3xl h-80 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">8+ Years</div>
                    <div className="text-xl">of Dedicated Service</div>
                    <div className="text-lg mt-4 opacity-90">Building brighter futures together</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={value.title} className="floating-card p-6 text-center hover-glow group">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
