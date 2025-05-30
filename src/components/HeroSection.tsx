
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-warm-orange rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-warm-blue rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-soft-green rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-warm-orange/10 rounded-full text-warm-orange font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Transforming Lives Through Education
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                  Empowering
                  <span className="block text-gradient">Communities</span>
                  <span className="block">One Child at a Time</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join us in our mission to provide quality education, healthcare, and sustainable development 
                  to underprivileged communities across India. Together, we can create lasting change.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <Button 
                  onClick={() => scrollToSection('#donate')}
                  className="btn-primary group"
                >
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

              {/* Stats */}
              <div className={`grid grid-cols-3 gap-6 pt-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image */}
            <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-warm-orange to-pink-500 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-light">
                        <BookOpen className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Education Changes Everything</h3>
                      <p className="text-lg opacity-90">Every donation brings us closer to a brighter future for our children.</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-soft-green rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">2,500+</div>
                      <div className="text-sm text-gray-600">Volunteers</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-warm-blue rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">100%</div>
                      <div className="text-sm text-gray-600">Transparency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-light">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
