
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Heart, Home, Award, Globe, TrendingUp } from 'lucide-react';

const SpatialImpact = () => {
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
    const duration = 2000;
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
      label: 'Future Learners',
      value: counters.students,
      suffix: '+',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Globe,
      label: 'Smart Communities',
      value: counters.communities,
      suffix: '+',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      label: 'Digital Natives',
      value: counters.volunteers,
      suffix: '+',
      color: 'from-emerald-600 to-green-700'
    },
    {
      icon: Home,
      label: 'Innovation Hubs',
      value: counters.schools,
      suffix: '',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Heart,
      label: 'Impact Initiatives',
      value: counters.programs,
      suffix: '',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Award,
      label: 'Global Recognition',
      value: counters.awards,
      suffix: '',
      color: 'from-green-600 to-emerald-700'
    }
  ];

  return (
    <section id="impact" ref={sectionRef} className="content-section bg-spatial-1">
      <div className="container-spatial">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 glass-morphism text-emerald-600 font-semibold rounded-full mb-8">
            <TrendingUp className="w-5 h-5 mr-2" />
            Our Global Impact
          </div>
          <h2 className="heading-spatial-lg mb-6">
            <span className="block text-slate-800">Measurable Change</span>
            <span className="block text-emerald-600">Across Dimensions</span>
          </h2>
          <p className="text-spatial max-w-3xl mx-auto">
            Every metric represents a breakthrough, every number tells a story of transformation 
            powered by innovation and driven by compassion.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className={`spatial-card p-6 text-center group cursor-pointer ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="spatial-grid lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}>
            <Card className="spatial-card p-8 h-full">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Revolutionary Transformation</h3>
                <div className="space-y-6">
                  <p className="text-spatial">
                    "The quantum leap in our community began when Ek Nayi Soch introduced their 
                    AI-powered learning ecosystem. Children who couldn't access education before 
                    are now coding, creating, and dreaming of futures we never imagined possible."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 emerald-gradient rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">R</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Raj Patel</div>
                      <div className="text-sm text-slate-600">Community Innovation Lead, Gujarat</div>
                      <div className="text-xs text-emerald-600 font-medium">Digital Transformation Pioneer</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className={`space-y-6 ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}>
            <Card className="spatial-card p-6 bg-gradient-to-br from-emerald-50 to-green-50">
              <CardContent className="p-0 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">98.7%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
                <div className="text-xs text-emerald-600 font-medium mt-1">AI-Verified</div>
              </CardContent>
            </Card>
            
            <Card className="spatial-card p-6 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-0 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">₹2.5Cr+</div>
                <div className="text-sm text-slate-600">Impact Investment</div>
                <div className="text-xs text-emerald-600 font-medium mt-1">This Quarter</div>
              </CardContent>
            </Card>

            <Card className="spatial-card p-6 bg-gradient-to-br from-emerald-50 to-green-50">
              <CardContent className="p-0 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Global Support</div>
                <div className="text-xs text-emerald-600 font-medium mt-1">Always Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpatialImpact;
