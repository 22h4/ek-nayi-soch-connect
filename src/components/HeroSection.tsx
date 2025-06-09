
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden no-spacing bg-gradient-1">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/60 to-orange-50/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-30 mobile-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-orange-400/40 to-pink-500/40 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-pink-400/30 to-violet-500/30 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-spacing relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-6 py-3 glass-card text-orange-600 font-semibold rounded-full text-sm animate-pulse-glow">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Transforming Lives Through Education
              </div>
              
              <h1 className="heading-xl">
                <span className="text-gray-800">Empowering</span>
                <span className="block text-gradient mt-2">Communities</span>
                <span className="block text-gradient mt-2">One Child at a Time</span>
              </h1>
              
              <p className="text-body max-w-2xl leading-loose">
                Join us in our mission to provide quality education, healthcare, and sustainable development 
                to underprivileged communities across India. Together, we can create lasting change.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary group text-lg py-4 px-8"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Start Donating
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('#about')}
                  className="btn-secondary text-lg py-4 px-8"
                >
                  Learn More
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
                {stats.map((stat, index) => (
                  <div key={stat.label} className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="floating-card mobile-padding">
                      <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <stat.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-3xl font-black text-gradient mb-2">{stat.value}</div>
                      <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className={`relative ${isVisible ? 'animate-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="w-full h-[500px] lg:h-[600px] gradient-primary rounded-3xl shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating elements inside the card */}
                  <div className="absolute top-8 right-8 w-16 h-16 glass-card rounded-full flex items-center justify-center animate-float">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 glass-card rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white mobile-padding">
                      <div className="w-24 h-24 lg:w-32 lg:h-32 glass-card rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                        <BookOpen className="w-12 h-12 lg:w-16 lg:h-16" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-6">Education Changes Everything</h3>
                      <p className="text-lg lg:text-xl opacity-90 leading-relaxed">Every donation brings us closer to a brighter future for children across India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mobile-hidden">
        <div className="w-8 h-12 border-2 border-orange-500 rounded-full flex justify-center animate-pulse-glow">
          <div className="w-2 h-4 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
