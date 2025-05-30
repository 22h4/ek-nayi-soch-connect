
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Heart, Home, Award, Globe } from 'lucide-react';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    communities: 0,
    volunteers: 0,
    schools: 0,
    programs: 0,
    awards: 0
  });
  const sectionRef = useRef(null);

  const targetNumbers = {
    students: 5247,
    communities: 52,
    volunteers: 2500,
    schools: 25,
    programs: 15,
    awards: 8
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.floor(targetNumbers.students * progress),
        communities: Math.floor(targetNumbers.communities * progress),
        volunteers: Math.floor(targetNumbers.volunteers * progress),
        schools: Math.floor(targetNumbers.schools * progress),
        programs: Math.floor(targetNumbers.programs * progress),
        awards: Math.floor(targetNumbers.awards * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetNumbers);
      }
    }, stepDuration);
  };

  const stats = [
    {
      icon: BookOpen,
      label: 'Students Educated',
      value: counters.students,
      suffix: '+',
      color: 'from-warm-blue to-blue-600'
    },
    {
      icon: Globe,
      label: 'Communities Served',
      value: counters.communities,
      suffix: '+',
      color: 'from-soft-green to-green-600'
    },
    {
      icon: Users,
      label: 'Active Volunteers',
      value: counters.volunteers,
      suffix: '+',
      color: 'from-warm-orange to-pink-500'
    },
    {
      icon: Home,
      label: 'Schools Built',
      value: counters.schools,
      suffix: '',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Heart,
      label: 'Active Programs',
      value: counters.programs,
      suffix: '',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Award,
      label: 'Recognition Awards',
      value: counters.awards,
      suffix: '',
      color: 'from-warm-yellow to-yellow-600'
    }
  ];

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-gradient-to-br from-warm-blue/5 via-white to-warm-orange/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-warm-blue/10 rounded-full text-warm-blue font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Impact
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Numbers That Tell
              <span className="block text-gradient">Our Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every number represents a life touched, a dream fulfilled, and a step towards 
              a more equitable world. Here's the impact we've made together.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className={`floating-card hover-glow group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Stories */}
          <div className={`mt-20 grid lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="lg:col-span-2">
              <Card className="floating-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Making Real Difference</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      "Before Ek Nayi Soch came to our village, many children had to walk 8 kilometers 
                      to reach the nearest school. Today, we have a beautiful school right here, with 
                      qualified teachers and modern facilities."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">R</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Ram Singh</div>
                        <div className="text-sm text-gray-500">Village Sarpanch, Rajasthan</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="floating-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-warm-orange mb-2">98%</div>
                  <div className="text-gray-600">Student Retention Rate</div>
                </CardContent>
              </Card>
              
              <Card className="floating-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-soft-green mb-2">₹50L+</div>
                  <div className="text-gray-600">Funds Raised This Year</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
