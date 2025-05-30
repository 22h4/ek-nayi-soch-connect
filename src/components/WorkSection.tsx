
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const WorkSection = () => {
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
      title: 'Quality Education',
      description: 'Building schools and providing quality education to children in remote areas.',
      features: [
        'Modern classroom facilities',
        'Qualified teaching staff',
        'Digital learning tools',
        'Scholarship programs'
      ],
      impact: '5,000+ students educated',
      color: 'from-warm-blue to-blue-600'
    },
    {
      icon: Heart,
      title: 'Healthcare Initiative',
      description: 'Providing healthcare services and medical support to underserved communities.',
      features: [
        'Mobile health clinics',
        'Free medical checkups',
        'Vaccination programs',
        'Health awareness campaigns'
      ],
      impact: '15,000+ people treated',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Empowering communities through sustainable development programs.',
      features: [
        'Women empowerment workshops',
        'Skill development training',
        'Microfinance support',
        'Clean water projects'
      ],
      impact: '50+ communities transformed',
      color: 'from-soft-green to-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Teaching technology and innovation to prepare youth for the future.',
      features: [
        'Computer literacy programs',
        'STEM education',
        'Entrepreneurship training',
        'Innovation challenges'
      ],
      impact: '2,000+ youth trained',
      color: 'from-warm-orange to-pink-500'
    }
  ];

  return (
    <section id="work" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-soft-green/10 rounded-full text-soft-green font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Programs
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Creating Change Through
              <span className="block text-gradient">Focused Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive programs address the root causes of inequality, providing 
              sustainable solutions that create lasting positive impact.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card 
                key={program.title}
                className={`floating-card hover-glow group cursor-pointer transition-all duration-300 ${
                  activeProgram === index ? 'ring-2 ring-warm-orange shadow-2xl' : ''
                } ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setActiveProgram(index)}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-soft-green" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-warm-orange font-semibold">{program.impact}</div>
                    <Button variant="ghost" className="text-warm-orange hover:text-warm-orange hover:bg-warm-orange/10">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <Card className="floating-card bg-gradient-to-br from-warm-orange/10 to-pink-500/10 border-warm-orange/20">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Want to Get Involved?</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join us in making a difference. Whether through volunteering, donating, or 
                  partnering with us, every action counts towards building a better future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-primary">
                    Become a Volunteer
                  </Button>
                  <Button className="btn-secondary">
                    Partner With Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
