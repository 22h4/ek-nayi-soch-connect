
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, Heart, Zap, Globe } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const SpatialContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please complete all fields",
        description: "Name, email, and message are required to connect with our future.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Welcome to the future! 🚀",
      description: "Your message has been transmitted. Our innovation team will respond within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Innovation Hub',
      details: ['Ek Nayi Soch Future Campus', 'Sector 104, Neo-Noida', 'Uttar Pradesh - 201301'],
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Phone,
      title: 'Neural Link',
      details: ['+91 98990900197', 'Emergency: +91 11 2345 6789'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Quantum Comm',
      details: ['future@eknayisoch.org', 'innovation@eknayisoch.org'],
      color: 'from-emerald-600 to-green-700'
    },
    {
      icon: Clock,
      title: 'Time Portal',
      details: ['24/7 Global Support', 'Real-time Response System'],
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="content-section bg-spatial-3">
      <div className="container-spatial">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 glass-morphism text-emerald-600 font-semibold rounded-full mb-8">
            <Zap className="w-5 h-5 mr-2" />
            Connect to the Future
          </div>
          <h2 className="heading-spatial-lg mb-6">
            <span className="block text-slate-800">Join the Innovation</span>
            <span className="block text-emerald-600">Revolution</span>
          </h2>
          <p className="text-spatial max-w-3xl mx-auto">
            Ready to be part of something extraordinary? Connect with us and help shape 
            the future of human potential and planetary well-being.
          </p>
        </div>

        <div className="spatial-grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}>
            <Card className="spatial-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="spatial-grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your vision for the future..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-spatial">
                    <Send className="w-5 h-5 mr-2" />
                    Transmit Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`space-y-6 ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}>
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="spatial-card p-6 group">
                <CardContent className="p-0">
                  <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">{info.title}</h4>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-slate-600">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action Card */}
            <Card className="spatial-card p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
              <CardContent className="p-0 text-center">
                <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4 animate-spatial-glow" />
                <h4 className="text-lg font-bold text-slate-800 mb-3">Ready for Takeoff?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Join our constellation of innovators and help us terraform the future of humanity.
                </p>
                <div className="space-y-3">
                  <Button className="w-full btn-spatial text-sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Become an Innovator
                  </Button>
                  <Button className="w-full btn-secondary-spatial text-sm">
                    <Zap className="w-4 h-4 mr-2" />
                    Support the Mission
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpatialContact;
