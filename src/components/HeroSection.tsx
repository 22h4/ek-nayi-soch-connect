
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, BookOpen, Sparkles, Star, Target, Globe } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: Users, label: 'Lives Impacted', value: '10,000+', color: 'from-warm-orange to-pink-500' },
    { icon: BookOpen, label: 'Students Educated', value: '5,000+', color: 'from-warm-blue to-blue-500' },
    { icon: Heart, label: 'Communities Served', value: '50+', color: 'from-soft-green to-emerald-500' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg gradient-bg pt-20 md:pt-32">
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-warm-orange via-pink-500 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-float premium-glow"
          style={{
            top: `${20 + mousePosition.y * 0.15 - scrollY * 0.3}%`,
            left: `${10 + mousePosition.x * 0.15}%`,
          }}
        ></div>
        <div 
          className="absolute w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-warm-blue via-blue-500 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{
            top: `${40 + mousePosition.y * -0.15 - scrollY * 0.2}%`,
            right: `${10 + mousePosition.x * 0.15}%`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-soft-green via-emerald-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{
            bottom: `${20 + mousePosition.y * 0.15 - scrollY * 0.1}%`,
            left: `${33 + mousePosition.x * -0.15}%`,
            animationDelay: '2s'
          }}
        ></div>
      </div>

      {/* Interactive 3D Floating Shapes with enhanced parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${i % 2 === 0 ? 'interactive-sphere' : 'interactive-cube'} opacity-30 parallax-element`}
            style={{
              width: `${40 + Math.random() * 30}px`,
              height: `${40 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              transform: `translate(${mousePosition.x * 0.03 - scrollY * 0.1}px, ${mousePosition.y * 0.03 - scrollY * 0.2}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            {i % 3 === 0 && <Sparkles className="w-full h-full text-white/60" />}
            {i % 3 === 1 && <Star className="w-full h-full text-white/60" />}
            {i % 3 === 2 && <Target className="w-full h-full text-white/60" />}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Content with parallax */}
            <div className="space-y-6 md:space-y-10" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <div className={`space-y-6 md:space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 glass-card neon-glow text-warm-orange font-medium rounded-full text-sm md:text-lg">
                  <Heart className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3 animate-pulse premium-glow" />
                  <span className="text-gradient">Transforming Lives Through Education</span>
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 animate-bounce" />
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="text-gray-800">Empowering</span>
                  <span className="block text-gradient premium-glow">Communities</span>
                  <span className="block text-gradient-blue premium-glow">One Child at a Time</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
                  Join us in our mission to provide quality education, healthcare, and sustainable development 
                  to underprivileged communities across India. Together, we can create lasting change.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <Button 
                  onClick={() => scrollToSection('#donate')}
                  className="btn-primary group premium-glow text-base md:text-lg px-8 md:px-10 py-4 md:py-6"
                >
                  <Star className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 animate-spin" />
                  Start Donating
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-500" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('#about')}
                  className="btn-secondary text-base md:text-lg px-8 md:px-10 py-4 md:py-6"
                >
                  <Globe className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                  Learn More
                </Button>
              </div>

              {/* Enhanced Stats with 3D effects and mobile optimization */}
              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center group cursor-pointer">
                    <div className="floating-card p-4 md:p-6 rounded-3xl premium-glow group-hover:scale-125 transition-all duration-500 shape-3d">
                      <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 interactive-sphere`}>
                        <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced 3D Image with parallax */}
            <div 
              className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} 
              style={{ 
                animationDelay: '0.3s',
                transform: `translateY(${scrollY * -0.1}px)`
              }}
            >
              <div className="relative">
                <div className="w-full h-[400px] md:h-[600px] bg-gradient-to-br from-warm-orange via-pink-500 to-purple-600 rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden premium-glow shape-3d">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 glass-card"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6 md:p-12">
                      <div className="w-20 h-20 md:w-32 md:h-32 glass-card rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 interactive-sphere premium-glow">
                        <BookOpen className="w-10 h-10 md:w-16 md:h-16" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Education Changes Everything</h3>
                      <p className="text-lg md:text-xl opacity-90 leading-relaxed">Every donation brings us closer to a brighter future for our children.</p>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Floating Cards with 3D effects and mobile optimization */}
                <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 glass-card p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl animate-float premium-glow shape-3d">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-soft-green to-emerald-500 rounded-full flex items-center justify-center interactive-sphere">
                      <Users className="w-4 h-4 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg md:text-xl text-gradient-green">2,500+</div>
                      <div className="text-xs md:text-sm text-gray-600">Volunteers</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 glass-card p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl animate-float premium-glow shape-3d" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-warm-blue to-blue-500 rounded-full flex items-center justify-center interactive-sphere">
                      <Heart className="w-4 h-4 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg md:text-xl text-gradient-blue">100%</div>
                      <div className="text-xs md:text-sm text-gray-600">Transparency</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-6 md:-right-12 glass-card p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl animate-float interactive-cube premium-glow" style={{ animationDelay: '2s' }}>
                  <Star className="w-8 h-8 md:w-12 md:h-12 text-warm-orange animate-pulse" />
                </div>

                <div className="absolute top-1/4 -left-3 md:-left-6 glass-card p-2 md:p-3 rounded-lg md:rounded-xl shadow-2xl animate-float interactive-sphere premium-glow" style={{ animationDelay: '3s' }}>
                  <Target className="w-6 h-6 md:w-10 md:h-10 text-purple-500 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with mobile optimization */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <div className="glass-card w-8 h-12 md:w-12 md:h-16 rounded-full flex justify-center premium-glow interactive-sphere">
          <div className="w-1 h-4 md:w-2 md:h-6 bg-gradient-to-b from-warm-orange to-pink-500 rounded-full mt-2 md:mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
