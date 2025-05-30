
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Impact', href: '#impact' },
    { name: 'Stories', href: '#stories' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile when scrolled */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-warm-orange/20 via-pink-500/20 to-purple-600/20 backdrop-blur-xl border-b border-white/30 transition-all duration-500 ${isScrolled ? 'translate-y-[-100%] md:translate-y-0' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8 md:h-10 text-xs md:text-sm">
            <div className="flex items-center space-x-2 md:space-x-6 text-gray-600">
              <div className="hidden md:flex items-center space-x-2 hover:text-warm-orange transition-colors duration-300">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs">eknayisochfoundation.noida@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-warm-orange transition-colors duration-300">
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs">+91 98990900197</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <span className="text-gray-600 text-xs hidden md:inline">Follow Us:</span>
              <div className="flex space-x-1 md:space-x-2">
                {['F', 'T', 'I', 'L'].map((social, index) => (
                  <button
                    key={social}
                    className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-warm-orange to-pink-500 text-white text-xs font-bold hover:scale-110 transition-transform duration-300 premium-glow"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Navigation */}
      <nav className={`floating-nav transition-all duration-700 ${
        isScrolled 
          ? 'glass-nav shadow-2xl rounded-full max-w-5xl mx-auto' 
          : 'bg-transparent max-w-7xl'
      }`}
      style={{ 
        marginTop: isScrolled ? '0px' : '40px',
        transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`,
      }}>
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with enhanced 3D effect and parallax */}
            <div 
              className="flex items-center space-x-2 md:space-x-3 animate-slide-in-left"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 interactive-sphere flex items-center justify-center premium-glow shape-3d">
                <Heart className="w-5 h-5 md:w-8 md:h-8 text-white animate-pulse" />
              </div>
              <div>
                <span className="text-lg md:text-2xl font-bold text-gradient">Ek Nayi Soch</span>
                <div className="text-xs text-gray-500 hidden md:block">Empowering Communities</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-gray-700 hover:text-warm-orange transition-all duration-700 font-medium relative group hover:scale-110 animate-fade-in`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: `translateY(${scrollY * 0.02}px)`
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-warm-orange to-pink-500 transition-all duration-700 group-hover:w-full rounded-full"></span>
                </button>
              ))}
              
              <Button 
                onClick={() => scrollToSection('#donate')}
                className="btn-primary animate-scale-in premium-glow text-sm md:text-base"
                style={{ 
                  animationDelay: '0.6s',
                  transform: `translateY(${scrollY * 0.03}px)`
                }}
              >
                <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2 animate-pulse" />
                Donate Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 md:p-3 text-gray-700 hover:text-warm-orange transition-colors glass-card hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden glass-card border-t border-white/30 animate-fade-in rounded-b-3xl overflow-hidden mt-2">
              <div className="px-4 md:px-6 pt-3 pb-4 md:pb-6 space-y-1 md:space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 md:px-4 py-2 md:py-3 text-gray-700 hover:text-warm-orange hover:bg-white/20 transition-all duration-300 rounded-xl hover:scale-105 text-sm md:text-base"
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('#donate')}
                  className="w-full mt-3 md:mt-4 btn-primary text-sm md:text-base"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
