
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Target, Globe, Users, Heart, Award, ArrowRight, Lightbulb } from 'lucide-react';

const SpatialAbout = () => {
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
      description: 'Leading with empathy in every initiative',
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering solutions for tomorrow',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating lasting global change',
      color: 'from-emerald-600 to-green-700'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building stronger connections',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="content-section bg-spatial-2">
      <div className="container-spatial">
        <div className="spatial-grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 glass-morphism text-emerald-600 font-semibold rounded-full">
              <Target className="w-5 h-5 mr-2" />
              About Our Mission
            </div>
            
            <h2 className="heading-spatial-lg">
              <span className="block text-slate-800">Ek Nayi Soch</span>
              <span className="block text-emerald-600">Foundation</span>
            </h2>
            
            <div className="space-y-6">
              <Card className="spatial-card p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Vision</h3>
                  <p className="text-spatial">
                    A world where technology and compassion converge to eliminate inequality, 
                    providing every individual with access to quality education, healthcare, 
                    and opportunities for growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="spatial-card p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-4">Our Mission</h3>
                  <p className="text-spatial">
                    To leverage cutting-edge solutions and grassroots initiatives to empower 
                    underprivileged communities, fostering sustainable development and creating 
                    lasting positive impact across India and beyond.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button className="btn-spatial group">
              Join Our Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Values */}
          <div className={`space-y-8 ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Core Values</h3>
              <p className="text-spatial">Principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="spatial-card p-6 text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h4>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement Stats */}
            <Card className="spatial-card p-8 bg-gradient-to-br from-emerald-50 to-green-50">
              <CardContent className="p-0">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">2022</div>
                    <div className="text-sm text-slate-600">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">50+</div>
                    <div className="text-sm text-slate-600">Communities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">10K+</div>
                    <div className="text-sm text-slate-600">Lives Changed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpatialAbout;
