
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-slide-in-left">
            <div className="w-10 h-10 bg-gradient-to-r from-warm-orange via-pink-500 to-purple-600 rounded-full flex items-center justify-center neon-glow">
              <Heart className="w-6 h-6 text-white animate-pulse-slow" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">Ek Nayi Soch</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-gray-700 dark:text-gray-300 hover:text-warm-orange dark:hover:text-warm-orange transition-all duration-300 font-medium relative group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-warm-orange to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="icon"
              className="glass-card hover:neon-glow transition-all duration-300"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-warm-orange" />
              ) : (
                <Moon className="w-5 h-5 text-warm-orange" />
              )}
            </Button>
            
            <Button 
              onClick={() => scrollToSection('#donate')}
              className="btn-primary animate-scale-in neon-glow"
              style={{ animationDelay: '0.6s' }}
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-warm-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card border-t border-white/20 dark:border-gray-700/20 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-warm-orange hover:bg-white/10 dark:hover:bg-gray-700/20 transition-colors rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-between mt-4 px-3">
                <Button
                  onClick={toggleDarkMode}
                  variant="ghost"
                  size="sm"
                  className="glass-card"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
              <Button 
                onClick={() => scrollToSection('#donate')}
                className="w-full mt-2 btn-primary"
              >
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
