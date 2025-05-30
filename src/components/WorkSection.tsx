import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users, Lightbulb, ArrowRight, CheckCircle, TreePine, Shield, GraduationCap } from 'lucide-react';

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = (sectionRef.current as HTMLElement).getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const programs = [
    {
      icon: BookOpen,
      title: 'Free Tuition Classes',
      description: 'We offer free educational support to students in Village Hazipur and surrounding areas, ensuring quality education regardless of financial background.',
      features: [
        'Modern classroom facilities',
        'Qualified teaching staff',
        'Digital learning tools',
        'Scholarship programs'
      ],
      impact: '5,000+ students educated',
      color: 'from-warm-blue to-blue-600',
      bgIcon: GraduationCap
    },
    {
      icon: Heart,
      title: 'Awareness Programs',
      description: 'We conduct awareness campaigns on key issues like health, environmental conservation, and women\'s rights to inspire informed communities.',
      features: [
        'Health awareness campaigns',
        'Women\'s rights education',
        'Environmental conservation',
        'Community workshops'
      ],
      impact: '15,000+ people reached',
      color: 'from-pink-500 to-red-500',
      bgIcon: Users
    },
    {
      icon: TreePine,
      title: 'Environmental Initiatives',
      description: 'Our initiatives like tree planting and river cleanups promote sustainability and conservation, involving communities in protecting the environment.',
      features: [
        'Tree plantation drives',
        'River cleanup campaigns',
        'Waste management programs',
        'Sustainability workshops'
      ],
      impact: '50+ communities transformed',
      color: 'from-soft-green to-green-600',
      bgIcon: TreePine
    },
    {
      icon: Shield,
      title: 'Sanitary Pad Distribution',
      description: 'We support women\'s health by distributing sanitary pads and breaking the stigma around menstruation to promote dignity and hygiene.',
      features: [
        'Free sanitary pad distribution',
        'Menstrual hygiene education',
        'Breaking social stigma',
        'Women\'s health workshops'
      ],
      impact: '2,000+ women supported',
      color: 'from-warm-orange to-pink-500',
      bgIcon: Shield
    }
  ];

  return (
    <section id="work" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Interactive Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float premium-glow"
          style={{
            top: `${30 + mousePosition.y * 0.03}%`,
            left: `${20 + mousePosition.x * 0.03}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-soft-green to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{
            bottom: `${20 + mousePosition.y * -0.03}%`,
            right: `${25 + mousePosition.x * 0.03}%`,
            animationDelay: '3s'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 glass-card neon-glow text-soft-green font-medium mb-8 rounded-full">
              <Lightbulb className="w-5 h-5 mr-3 animate-pulse" />
              Our Programs
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-8">
              Creating Change Through
              <span className="block text-gradient premium-glow">Focused Action</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive programs address the root causes of inequality, providing 
              sustainable solutions that create lasting positive impact.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {programs.map((program, index) => (
              <Card 
                key={program.title}
                className={`floating-card premium-glow group cursor-pointer transition-all duration-500 shape-3d ${
                  activeProgram === index ? 'ring-4 ring-warm-orange shadow-3xl scale-105' : ''
                } ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setActiveProgram(index)}
              >
                <CardContent className="p-10 relative overflow-hidden">
                  {/* Background Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <program.bgIcon className="w-32 h-32 text-gray-400" />
                  </div>
                  
                  <div className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-3xl flex items-center justify-center mb-8 interactive-sphere group-hover:scale-125 transition-all duration-500 premium-glow`}>
                    <program.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">{program.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{program.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-soft-green to-emerald-500 rounded-full flex items-center justify-center interactive-sphere">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-warm-orange font-bold text-xl">{program.impact}</div>
                    <Button variant="ghost" className="text-warm-orange hover:text-warm-orange hover:bg-warm-orange/10 hover:scale-110 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <Card className="floating-card bg-gradient-to-br from-warm-orange/10 to-pink-500/10 border-warm-orange/30 premium-glow max-w-5xl mx-auto shape-3d">
              <CardContent className="p-16">
                <h3 className="text-4xl font-bold text-gray-800 mb-6">Want to Get Involved?</h3>
                <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join us in making a difference. Whether through volunteering, donating, or 
                  partnering with us, every action counts towards building a better future.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button className="btn-primary text-lg px-10 py-6">
                    <Users className="w-6 h-6 mr-3" />
                    Become a Volunteer
                  </Button>
                  <Button className="btn-secondary text-lg px-10 py-6">
                    <Heart className="w-6 h-6 mr-3" />
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
