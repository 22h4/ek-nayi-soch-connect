
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Zap, Globe, Heart } from 'lucide-react';

const SpatialFooter = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Future Hub', href: '#about' },
    { name: 'Innovation Labs', href: '#programs' },
    { name: 'Impact Metrics', href: '#impact' },
    { name: 'Pioneer Stories', href: '#stories' },
    { name: 'Connect', href: '#contact' }
  ];

  const programs = [
    'Future Learning Hub',
    'Wellness Beyond',
    'Earth Regeneration',
    'Dignity Tech',
    'Neural Networks'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-emerald-500 rounded-full blur-3xl top-10 left-10 animate-float-gentle"></div>
        <div className="absolute w-80 h-80 bg-green-400 rounded-full blur-3xl bottom-10 right-10 animate-float-delayed"></div>
      </div>

      <div className="container-spatial relative z-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="spatial-grid lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 emerald-gradient rounded-2xl flex items-center justify-center animate-spatial-glow">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Ek Nayi Soch</h3>
                  <p className="text-emerald-300 text-sm">Pioneering Tomorrow</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed">
                Transcending boundaries between technology and humanity to create 
                sustainable solutions for a thriving planet and empowered communities.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 glass-morphism rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-emerald-300">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-emerald-300 transition-all duration-300 hover:translate-x-2 transform flex items-center group"
                    >
                      <Zap className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-emerald-300">Future Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program}>
                    <span className="text-slate-300 hover:text-emerald-300 transition-colors duration-300 cursor-pointer flex items-center group">
                      <Globe className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {program}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-emerald-300">Connect</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="text-slate-300">
                    <p>Ek Nayi Soch Future Campus</p>
                    <p>Sector 104, Neo-Noida</p>
                    <p>Uttar Pradesh - 201301</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <div className="text-slate-300">
                    <p>+91 98990900197</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <div className="text-slate-300">
                    <p>future@eknayisoch.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-emerald-800/50">
            <div className="spatial-grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-3 text-emerald-300">Join the Future</h4>
                <p className="text-slate-300">
                  Subscribe to receive updates on breakthrough innovations and transformation stories.
                </p>
              </div>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your neural link address"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-lg border border-emerald-500/30 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 transition-colors"
                />
                <button className="btn-spatial px-8">
                  <Heart className="w-5 h-5 mr-2" />
                  Connect
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-emerald-800/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Ek Nayi Soch Foundation. Pioneering the future of humanity.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-emerald-300 transition-colors">Quantum Privacy</a>
              <a href="#" className="hover:text-emerald-300 transition-colors">Neural Terms</a>
              <a href="#" className="hover:text-emerald-300 transition-colors">Impact Reports</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SpatialFooter;
