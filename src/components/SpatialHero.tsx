
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Users, BookOpen, Sparkles, Play } from 'lucide-react';

const SpatialHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="content-section bg-spatial-1 spatial-container overflow-hidden min-h-screen flex items-center">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 emerald-gradient rounded-full blur-3xl top-20 left-10 animate-float-gentle"></div>
        <div className="absolute w-80 h-80 green-spatial-gradient rounded-full blur-3xl bottom-20 right-10 animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-morph"></div>
      </div>

      <div className="container-spatial relative z-10 w-full">
        <div className="spatial-grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className={`element-spacing ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 glass-morphism text-emerald-600 font-semibold rounded-full animate-spatial-pulse">
              <Sparkles className="w-5 h-5 mr-2" />
              Transforming Lives Through Innovation
            </div>
            
            <div className="space-y-4">
              <h1 className="heading-spatial-xl">
                <span className="block">Empowering</span>
                <span className="block">Communities</span>
                <span className="block text-emerald-600">One Life at a Time</span>
              </h1>
            </div>
            
            <p className="text-spatial max-w-2xl">
              Experience the future of community development with our innovative approach to education, 
              healthcare, and sustainable growth. Join us in creating lasting change through technology 
              and compassion.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="btn-spatial group"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                onClick={() => scrollToSection('#about')}
                className="btn-secondary-spatial group"
              >
                <Play className="w-5 h-5 mr-2" />
                Discover More
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12">
              {[
                { icon: Users, value: '10,000+', label: 'Lives Impacted' },
                { icon: BookOpen, value: '5,000+', label: 'Students' },
                { icon: Leaf, value: '50+', label: 'Communities' }
              ].map((stat, index) => (
                <div key={stat.label} className="spatial-card text-center interactive-element">
                  <div className="w-12 h-12 emerald-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className={`relative ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}>
            <div className="spatial-card h-[500px] lg:h-[600px] flex items-center justify-center relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-400 to-emerald-600"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)`
                }}></div>
              </div>
              
              {/* Central element */}
              <div className="relative z-10 text-center card-content">
                <div className="w-32 h-32 lg:w-40 lg:h-40 emerald-gradient rounded-3xl flex items-center justify-center mx-auto mb-8 animate-depth-shift">
                  <Leaf className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-emerald-700 mb-4">Innovation Meets Impact</h3>
                <p className="text-slate-600 max-w-md">
                  Where cutting-edge technology meets grassroots community development for unprecedented results.
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-16 h-16 glass-morphism rounded-2xl flex items-center justify-center animate-float-gentle">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="absolute bottom-8 left-8 w-14 h-14 glass-morphism rounded-2xl flex items-center justify-center animate-float-delayed">
                <BookOpen className="w-7 h-7 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default SpatialHero;
