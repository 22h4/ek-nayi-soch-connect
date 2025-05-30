
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Users, BookOpen, Home, CheckCircle, Gift } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const DonationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
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

  const donationOptions = [
    {
      amount: 500,
      impact: 'Provides school supplies for 1 child',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600'
    },
    {
      amount: 1000,
      impact: 'Sponsors a child\'s education for 1 month',
      icon: Heart,
      color: 'from-pink-500 to-red-500'
    },
    {
      amount: 2500,
      impact: 'Supports a family\'s healthcare needs',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      amount: 5000,
      impact: 'Helps build classroom infrastructure',
      icon: Home,
      color: 'from-warm-orange to-pink-500'
    }
  ];

  const handleDonation = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    
    if (!donorName || !donorEmail) {
      toast({
        title: "Please fill in your details",
        description: "We need your name and email to process the donation.",
        variant: "destructive",
      });
      return;
    }

    if (amount < 100) {
      toast({
        title: "Minimum donation amount",
        description: "Please donate at least ₹100 to support our cause.",
        variant: "destructive",
      });
      return;
    }

    // Simulate payment processing
    toast({
      title: "Thank you for your generosity! 🙏",
      description: `Your donation of ₹${amount.toLocaleString()} will make a real difference.`,
    });

    // Reset form
    setDonorName('');
    setDonorEmail('');
    setCustomAmount('');
    setSelectedAmount(1000);
  };

  return (
    <section id="donate" ref={sectionRef} className="py-20 bg-gradient-to-br from-warm-orange/5 via-pink-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-warm-orange/10 rounded-full text-warm-orange font-medium mb-6">
              <Gift className="w-4 h-4 mr-2" />
              Make a Donation
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Help Us Create
              <span className="block text-gradient">Lasting Change</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your donation directly impacts lives. Every rupee counts towards building a 
              brighter future for children and communities in need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Donation Form */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <Card className="floating-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Impact</h3>
                  
                  {/* Donation Amount Options */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {donationOptions.map((option) => (
                      <button
                        key={option.amount}
                        onClick={() => {
                          setSelectedAmount(option.amount);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-xl border-2 transition-all text-left hover:scale-105 ${
                          selectedAmount === option.amount && !customAmount
                            ? 'border-warm-orange bg-warm-orange/10 shadow-lg'
                            : 'border-gray-200 hover:border-warm-orange/50'
                        }`}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-3`}>
                          <option.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="font-bold text-gray-800">₹{option.amount.toLocaleString()}</div>
                        <div className="text-sm text-gray-600 mt-1">{option.impact}</div>
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Or enter custom amount
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleDonation}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Donate ₹{(customAmount ? parseInt(customAmount) || 0 : selectedAmount).toLocaleString()}
                    <Heart className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Tax Exemption</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              {/* Monthly Impact */}
              <Card className="floating-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">This Month's Impact</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700">Students Sponsored</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-800">247</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700">Families Helped</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-800">89</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-warm-orange to-pink-500 rounded-lg flex items-center justify-center">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700">Health Checkups</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-800">156</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transparency */}
              <Card className="floating-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Transparency</h3>
                  <p className="text-gray-600 mb-6">
                    We believe in complete transparency. Here's how your donations are utilized:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Direct Program Support</span>
                      <span className="font-semibold text-gray-800">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-warm-orange to-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Administrative Costs</span>
                      <span className="font-semibold text-gray-800">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Future Growth</span>
                      <span className="font-semibold text-gray-800">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
