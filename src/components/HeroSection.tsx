
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, BookOpen, Star } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      
      {/* Simplified Background Elements for Mobile */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-warm-orange/20 to-pink-500/20 rounded-full blur-3xl top-20 left-10 animate-float"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease-out' }}>
              <div className="inline-flex items-center px-4 py-2 glass-card text-warm-orange font-medium rounded-full text-sm">
                <Heart className="w-4 h-4 mr-2 animate-pulse" />
                Transforming Lives Through Education
              </div>
              
              <h1 className="heading-responsive font-bold leading-tight">
                <span className="text-gray-800">Empowering</span>
                <span className="block text-gradient">Communities</span>
                <span className="block text-gradient">One Child at a Time</span>
              </h1>
              
              <p className="text-responsive text-gray-600 leading-relaxed max-w-2xl">
                Join us in our mission to provide quality education, healthcare, and sustainable development 
                to underprivileged communities across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('#donate')}
                  className="btn-modern group"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Start Donating
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('#about')}
                  className="border-2 border-warm-orange text-warm-orange px-6 py-3 rounded-full font-semibold hover:bg-warm-orange hover:text-white transition-all"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="neomorphic-card p-4 lg:p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xl lg:text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs lg:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.8s ease-out 0.3s' }}>
              <div className="relative">
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] gradient-primary rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="w-16 h-16 lg:w-24 lg:h-24 glass-card rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                        <BookOpen className="w-8 h-8 lg:w-12 lg:h-12" />
                      </div>
                      <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-4">Education Changes Everything</h3>
                      <p className="text-sm lg:text-lg opacity-90">Every donation brings us closer to a brighter future.</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Cards - Hidden on mobile for performance */}
                {!isMobile && (
                  <>
                    <div className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl animate-float">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gradient">2,500+</div>
                          <div className="text-xs text-gray-600">Volunteers</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gradient">100%</div>
                          <div className="text-xs text-gray-600">Transparency</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-warm-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warm-orange rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
