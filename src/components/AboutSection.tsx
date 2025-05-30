
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Globe, Lightbulb, ArrowRight, CheckCircle, Target, Award } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every situation with empathy and understanding.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating meaningful change that lasts for generations.',
      color: 'from-warm-blue to-blue-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building stronger communities through collaboration.',
      color: 'from-soft-green to-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Finding creative solutions to complex challenges.',
      color: 'from-warm-orange to-pink-500'
    }
  ];

  const achievements = [
    { number: '2022', label: 'Founded', icon: Award },
    { number: '50+', label: 'Communities', icon: Globe },
    { number: '10K+', label: 'Lives Changed', icon: Heart },
    { number: '2.5K+', label: 'Volunteers', icon: Users }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float premium-glow"
          style={{
            top: `${20 + mousePosition.y * 0.05}%`,
            left: `${10 + mousePosition.x * 0.05}%`,
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 bg-gradient-to-r from-soft-green to-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{
            bottom: `${20 + mousePosition.y * -0.05}%`,
            right: `${15 + mousePosition.x * 0.05}%`,
            animationDelay: '2s'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 glass-card neon-glow text-warm-orange font-medium mb-8 rounded-full">
              <Target className="w-5 h-5 mr-3 animate-pulse" />
              About Our Foundation
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-8">
              <span className="text-gradient premium-glow">Ek Nayi Soch</span>
              <span className="block text-gray-800">Foundation</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded in 2022, we are dedicated to creating sustainable positive change through education, 
              awareness, and community empowerment across India.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <Card className="floating-card premium-glow shape-3d">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-gradient mb-6">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    To empower underprivileged communities through accessible education, social awareness, 
                    and sustainable practices. We believe in creating a healthier, more informed, and equitable future for all.
                  </p>
                  <div className="flex items-center space-x-3 text-warm-orange">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-semibold">Registered NGO since 2022</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="floating-card premium-glow shape-3d">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-gradient-blue mb-6">Our Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    A world where every individual, regardless of their background, has access to quality education, 
                    healthcare, and the resources needed to lead a dignified life.
                  </p>
                  <div className="flex items-center space-x-3 text-warm-blue">
                    <Globe className="w-6 h-6" />
                    <span className="font-semibold">Serving communities across India</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Content - Interactive 3D Stats */}
            <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <Card 
                    key={achievement.label}
                    className="floating-card premium-glow text-center group cursor-pointer shape-3d"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-warm-orange via-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 interactive-sphere group-hover:scale-125 transition-all duration-500">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gradient mb-2">{achievement.number}</div>
                      <div className="text-gray-600 font-medium">{achievement.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Our <span className="text-gradient">Core Values</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="floating-card premium-glow group text-center shape-3d"
                >
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 interactive-sphere group-hover:scale-125 transition-all duration-500`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className={`text-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <Card className="floating-card bg-gradient-to-br from-warm-orange/10 to-pink-500/10 border-warm-orange/20 premium-glow max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 interactive-sphere premium-glow">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Address</h4>
                    <p className="text-gray-600">
                      Ek Nayi Soch<br />
                      Hazipur, Sector 104 Noida,<br />
                      Uttar Pradesh - 201301
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-warm-blue to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 interactive-sphere premium-glow">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Contact</h4>
                    <p className="text-gray-600">
                      Phone: +91 98990900197<br />
                      Email: eknayisochfoundation.noida@gmail.com
                    </p>
                  </div>
                </div>
                <Button className="btn-primary text-lg px-8 py-4">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
