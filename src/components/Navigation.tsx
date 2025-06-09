
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';

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
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl scale-95' 
        : 'bg-white/70 backdrop-blur-lg shadow-lg scale-100'
    } rounded-full border border-white/30`}>
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium text-sm px-4 py-2 rounded-full hover:bg-orange-50 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-6"></span>
              </button>
            ))}
            
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="ml-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold text-sm py-2 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-4 h-4 mr-1" />
              Donate
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-lg font-bold text-gradient">Ek Nayi Soch</span>
            <button
              className="p-2 text-gray-700 hover:text-orange-500 transition-colors rounded-full hover:bg-orange-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200/50">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all rounded-lg text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="w-full mt-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold text-sm py-3"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
