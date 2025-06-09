
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, BookOpen, Star } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: 'Lives Impacted', value: '10,000+' },
    { icon: BookOpen, label: 'Students Educated', value: '5,000+' },
    { icon: Heart, label: 'Communities Served', value: '50+' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-20 mobile-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-warm-orange/30 to-pink-500/30 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-spacing relative z-10 section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 glass-card text-warm-orange font-medium rounded-full text-sm">
                <Heart className="w-4 h-4 mr-2 animate-pulse" />
                Transforming Lives Through Education
              </div>
              
              <h1 className="heading-xl">
                <span className="text-gray-800">Empowering</span>
                <span className="block text-gradient">Communities</span>
                <span className="block text-gradient">One Child at a Time</span>
              </h1>
              
              <p className="text-body max-w-2xl">
                Join us in our mission to provide quality education, healthcare, and sustainable development 
                to underprivileged communities across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary group"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Start Donating
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('#about')}
                  className="btn-secondary"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="modern-card mobile-padding">
                      <div className="w-12 h-12 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="mobile-text text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className={`relative ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-full h-[400px] lg:h-[500px] gradient-primary rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white mobile-padding">
                      <div className="w-16 h-16 lg:w-24 lg:h-24 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-8 h-8 lg:w-12 lg:h-12" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-4">Education Changes Everything</h3>
                      <p className="text-base lg:text-lg opacity-90">Every donation brings us closer to a brighter future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mobile-hidden">
        <div className="w-6 h-10 border-2 border-warm-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warm-orange rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
