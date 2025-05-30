
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, BookOpen, Sparkles, Star } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg gradient-bg">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-warm-orange via-pink-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-warm-blue via-blue-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-soft-green via-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20 dark:opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-warm-orange" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center px-6 py-3 glass-card neon-glow text-warm-orange font-medium">
                  <Heart className="w-5 h-5 mr-3 animate-pulse" />
                  <span className="text-gradient">Transforming Lives Through Education</span>
                  <Sparkles className="w-4 h-4 ml-3 animate-bounce" />
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-800 dark:text-white">Empowering</span>
                  <span className="block text-gradient">Communities</span>
                  <span className="block text-gradient-blue">One Child at a Time</span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Join us in our mission to provide quality education, healthcare, and sustainable development 
                  to underprivileged communities across India. Together, we can create lasting change.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <Button 
                  onClick={() => scrollToSection('#donate')}
                  className="btn-primary group neon-glow"
                >
                  <Star className="w-5 h-5 mr-2 animate-spin" />
                  Start Donating
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('#about')}
                  className="btn-secondary"
                >
                  Learn More
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className={`grid grid-cols-3 gap-6 pt-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center group cursor-pointer">
                    <div className="glass-card p-4 rounded-2xl neon-glow group-hover:scale-110 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-warm-orange via-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced Image */}
            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-warm-orange via-pink-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden neon-glow">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 glass-card"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-light neon-glow">
                        <BookOpen className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Education Changes Everything</h3>
                      <p className="text-lg opacity-90">Every donation brings us closer to a brighter future for our children.</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Floating Cards */}
                <div className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl shadow-lg animate-float neon-glow">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-soft-green to-emerald-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">2,500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Volunteers</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-lg animate-float neon-glow" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-warm-blue to-blue-500 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">100%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Transparency</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 glass-card p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <Star className="w-8 h-8 text-warm-orange animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <div className="glass-card w-8 h-12 rounded-full flex justify-center neon-glow">
          <div className="w-1 h-4 bg-gradient-to-b from-warm-orange to-pink-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
