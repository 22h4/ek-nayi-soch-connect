
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
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
      {/* Top Contact Bar - Only visible on desktop when not scrolled */}
      <div className={`fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300 ${isScrolled ? 'translate-y-[-100%]' : 'translate-y-0'} hidden md:block`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2 hover:text-warm-orange transition-colors">
                <Mail className="w-3 h-3" />
                <span>eknayisochfoundation.noida@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-warm-orange transition-colors">
                <Phone className="w-3 h-3" />
                <span>+91 98990900197</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 text-xs">Follow Us:</span>
              <div className="flex space-x-2">
                {['F', 'T', 'I', 'L'].map((social) => (
                  <button
                    key={social}
                    className="w-5 h-5 rounded-full bg-gradient-to-r from-warm-orange to-pink-500 text-white text-xs font-bold hover:scale-110 transition-transform"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Floating Navigation */}
      <nav className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-4 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 px-6 py-3' 
          : 'top-12 md:top-20 bg-transparent px-4 py-2'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo - Only visible when not scrolled */}
          {!isScrolled && (
            <div className="flex items-center space-x-2 mr-8">
              <div className="w-8 h-8 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-warm-orange to-pink-500 bg-clip-text text-transparent">
                Ek Nayi Soch
              </span>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-warm-orange transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-orange transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <Button 
              onClick={() => scrollToSection('#donate')}
              className="bg-gradient-to-r from-warm-orange to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all"
            >
              <Heart className="w-4 h-4 mr-1" />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-warm-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-warm-orange hover:bg-gray-50 transition-all rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#donate')}
                className="w-full mt-3 bg-gradient-to-r from-warm-orange to-pink-500 text-white"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
