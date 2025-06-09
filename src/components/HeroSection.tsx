
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, BookOpen, Star, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: 'Lives Impacted', value: '10,000+', color: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, label: 'Students Educated', value: '5,000+', color: 'from-green-500 to-emerald-500' },
    { icon: Heart, label: 'Communities Served', value: '50+', color: 'from-pink-500 to-rose-500' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-gradient-1 no-spacing">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-orange-50/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20 mobile-hidden">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-orange-400/30 to-pink-500/30 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-spacing relative z-10 w-full">
        <div className="section-content">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-4 py-2 glass-card text-orange-600 font-semibold rounded-full text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Transforming Lives Through Education
              </div>
              
              <h1 className="heading-xl">
                <span className="text-gray-800">Empowering</span>
                <span className="block text-gradient mt-2">Communities</span>
                <span className="block text-gradient mt-2">One Child at a Time</span>
              </h1>
              
              <p className="text-body max-w-2xl">
                Join us in our mission to provide quality education, healthcare, and sustainable development 
                to underprivileged communities across India. Together, we can create lasting change.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary group"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Start Donating
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('#about')}
                  className="btn-secondary"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="floating-card mobile-padding">
                      <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xl font-bold text-gradient mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className={`relative ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl shadow-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 w-10 h-10 glass-card rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white mobile-padding">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-10 h-10 lg:w-12 lg:h-12" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-4">Education Changes Everything</h3>
                      <p className="text-sm lg:text-base opacity-90">Every donation brings us closer to a brighter future for children across India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 mobile-hidden">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
