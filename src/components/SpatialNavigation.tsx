
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';

const SpatialNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'py-4' 
        : 'py-6'
    }`}>
      <div className={`mx-auto transition-all duration-700 ${
        isScrolled 
          ? 'max-w-6xl px-6' 
          : 'max-w-7xl px-8'
      }`}>
        <div className={`glass-morphism transition-all duration-700 ${
          isScrolled 
            ? 'px-6 py-3 rounded-2xl backdrop-blur-2xl' 
            : 'px-8 py-4 rounded-3xl backdrop-blur-xl'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 emerald-gradient rounded-2xl flex items-center justify-center animate-spatial-glow">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold heading-spatial-lg">Ek Nayi Soch</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 hover:text-emerald-600 transition-all duration-300 font-medium px-4 py-2 rounded-xl hover:bg-emerald-50 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 rounded-full transition-all duration-300 group-hover:w-6"></span>
                </button>
              ))}
              
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="ml-4 btn-spatial"
              >
                <Leaf className="w-4 h-4 mr-2" />
                Get Involved
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="p-2 text-slate-700 hover:text-emerald-600 transition-colors rounded-xl hover:bg-emerald-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-6 pt-6 border-t border-emerald-200/50">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all rounded-xl font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full mt-4 btn-spatial"
                >
                  <Leaf className="w-4 h-4 mr-2" />
                  Get Involved
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SpatialNavigation;
