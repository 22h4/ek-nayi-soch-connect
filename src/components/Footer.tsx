
import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    'Quality Education',
    'Healthcare Initiative',
    'Community Development',
    'Innovation Labs',
    'Women Empowerment'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-warm-orange to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white animate-pulse-slow" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ek Nayi Soch</h3>
                  <p className="text-gray-400 text-sm">Empowering Communities</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Transforming lives through education, healthcare, and sustainable development. 
                Join us in creating lasting positive change in communities across India.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-warm-orange transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-warm-orange transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold">Our Programs</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program}>
                    <span className="text-gray-300 hover:text-warm-orange transition-colors duration-300 cursor-pointer">
                      {program}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-warm-orange mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>123 NGO Street, Social Sector</p>
                    <p>New Delhi, India - 110001</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-warm-orange flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-warm-orange flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>hello@eknayisoch.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
                <p className="text-gray-300">
                  Subscribe to our newsletter for updates on our impact and upcoming events.
                </p>
              </div>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-warm-orange transition-colors"
                />
                <button className="btn-primary px-6">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Ek Nayi Soch. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-warm-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-warm-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-warm-orange transition-colors">Annual Reports</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
