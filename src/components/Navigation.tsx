
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-warm-orange/10 via-pink-500/10 to-purple-600/10 backdrop-blur-xl border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2 hover:text-warm-orange transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>eknayisochfoundation.noida@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-warm-orange transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+91 98990900197</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600">Follow Us:</span>
              <div className="flex space-x-2">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <button
                    key={social}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-warm-orange to-pink-500 text-white text-xs hover:scale-110 transition-transform duration-300 premium-glow"
                  >
                    {social[0].toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with 3D effect */}
            <div className="flex items-center space-x-3 animate-slide-in-left">
              <div className="w-14 h-14 interactive-sphere flex items-center justify-center premium-glow shape-3d">
                <Heart className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gradient">Ek Nayi Soch</span>
                <div className="text-xs text-gray-500">Empowering Communities</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-gray-700 hover:text-warm-orange transition-all duration-500 font-medium relative group hover:scale-110 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-warm-orange to-pink-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
                </button>
              ))}
              
              <Button 
                onClick={() => scrollToSection('#donate')}
                className="btn-primary animate-scale-in premium-glow"
                style={{ animationDelay: '0.6s' }}
              >
                <Heart className="w-5 h-5 mr-2 animate-pulse" />
                Donate Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 text-gray-700 hover:text-warm-orange transition-colors glass-card hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden glass-card border-t border-white/30 animate-fade-in rounded-b-3xl overflow-hidden">
              <div className="px-6 pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-warm-orange hover:bg-white/20 transition-all duration-300 rounded-xl hover:scale-105"
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('#donate')}
                  className="w-full mt-4 btn-primary"
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
