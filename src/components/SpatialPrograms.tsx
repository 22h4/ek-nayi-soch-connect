
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, TreePine, Shield, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const SpatialPrograms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
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

  const programs = [
    {
      icon: BookOpen,
      title: 'Future Learning Hub',
      description: 'Revolutionary education platform combining AI-powered personalized learning with hands-on experiences.',
      features: [
        'AI-adaptive learning paths',
        'Virtual reality classrooms',
        'Holographic teachers',
        'Quantum computing basics'
      ],
      impact: '5,000+ future-ready students',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Heart,
      title: 'Wellness Beyond',
      description: 'Comprehensive health ecosystem integrating mental, physical, and spiritual well-being.',
      features: [
        'Biometric health monitoring',
        'Mental wellness apps',
        'Community health networks',
        'Preventive care programs'
      ],
      impact: '15,000+ healthier lives',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TreePine,
      title: 'Earth Regeneration',
      description: 'Advanced environmental restoration using breakthrough biotechnology and sustainable practices.',
      features: [
        'Carbon capture forests',
        'Biodegradable innovations',
        'Climate adaptation tech',
        'Ecosystem restoration'
      ],
      impact: '50+ ecosystems revived',
      color: 'from-emerald-600 to-green-700'
    },
    {
      icon: Shield,
      title: 'Dignity Tech',
      description: 'Privacy-first technology solutions ensuring human dignity and rights in the digital age.',
      features: [
        'Secure health platforms',
        'Digital identity protection',
        'Inclusive design systems',
        'Rights advocacy tools'
      ],
      impact: '2,000+ lives dignified',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="programs" ref={sectionRef} className="content-section bg-spatial-3">
      <div className="container-spatial">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 glass-morphism text-emerald-600 font-semibold rounded-full mb-8">
            <Lightbulb className="w-5 h-5 mr-2" />
            Innovation Programs
          </div>
          <h2 className="heading-spatial-lg mb-6">
            <span className="block text-slate-800">Pioneering the Future of</span>
            <span className="block text-emerald-600">Social Impact</span>
          </h2>
          <p className="text-spatial max-w-3xl mx-auto">
            Our programs blend cutting-edge technology with human-centered design to create 
            unprecedented solutions for global challenges.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="spatial-grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={program.title}
              className={`spatial-card p-8 cursor-pointer transition-all duration-500 ${
                activeProgram === index ? 'ring-2 ring-emerald-500 shadow-2xl' : ''
              } ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setActiveProgram(index)}
            >
              <CardContent className="p-0">
                <div className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500`}>
                  <program.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{program.title}</h3>
                <p className="text-spatial mb-6">{program.description}</p>
                
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-emerald-600 font-bold">{program.impact}</div>
                  <Button variant="ghost" className="text-emerald-600 hover:bg-emerald-50 p-2">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}>
          <Card className="spatial-card max-w-4xl mx-auto p-12 bg-gradient-to-br from-emerald-50 to-green-50">
            <CardContent className="p-0 text-center">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Ready to Shape Tomorrow?</h3>
              <p className="text-spatial mb-8 max-w-2xl mx-auto">
                Join our innovation community and help us build solutions that will define 
                the future of human development and planetary healing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-spatial">
                  <Heart className="w-5 h-5 mr-2" />
                  Become an Innovator
                </Button>
                <Button className="btn-secondary-spatial">
                  <TreePine className="w-5 h-5 mr-2" />
                  Partner With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpatialPrograms;
