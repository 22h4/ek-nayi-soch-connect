
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

const StoriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
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

  const stories = [
    {
      name: 'Priya Sharma',
      age: '12 years old',
      location: 'Rajasthan',
      story: "I used to walk 10 kilometers to school every day. When Ek Nayi Soch built a school in our village, everything changed. Now I can focus on my studies and dream of becoming a doctor to help my community.",
      achievement: 'Now ranks 1st in her class',
      image: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Ramesh Kumar',
      age: '45 years old',
      location: 'Bihar',
      story: "As a farmer, I struggled to support my family. The skill development program taught me new agricultural techniques and helped me start a small business. My income has tripled in just two years.",
      achievement: 'Increased income by 300%',
      image: 'from-green-400 to-green-600'
    },
    {
      name: 'Anita Devi',
      age: '28 years old',
      location: 'Uttar Pradesh',
      story: "The women empowerment workshop gave me the confidence to start my own tailoring business. Today, I employ 5 other women from my village and we're all financially independent.",
      achievement: 'Empowered 5+ women',
      image: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Arjun Singh',
      age: '16 years old',
      location: 'Madhya Pradesh',
      story: "The Innovation Lab introduced me to coding and technology. I created an app to help farmers in my region get weather updates. Now I'm preparing for engineering entrance exams.",
      achievement: 'Built farming app',
      image: 'from-blue-400 to-blue-600'
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" ref={sectionRef} className="section-spacing bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-spacing">
        <div className="max-w-6xl mx-auto content-spacing">
          {/* Header */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 rounded-full text-pink-500 font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="heading-lg mb-6">
              Lives We've
              <span className="block text-gradient">Transformed</span>
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Behind every statistic is a real person with dreams, struggles, and hope. 
              These are their stories of transformation and success.
            </p>
          </div>

          {/* Featured Story */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <Card className="floating-card overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Story Content */}
                  <div className="mobile-padding lg:p-12 space-y-6">
                    <Quote className="w-12 h-12 text-warm-orange opacity-50" />
                    
                    <div className="space-y-4">
                      <h3 className="heading-md">
                        {stories[currentStory].name}
                      </h3>
                      <div className="text-gray-500 space-y-1">
                        <div>{stories[currentStory].age}</div>
                        <div>{stories[currentStory].location}</div>
                      </div>
                    </div>
                    
                    <p className="text-body italic">
                      "{stories[currentStory].story}"
                    </p>
                    
                    <div className="bg-warm-orange/10 rounded-lg p-4">
                      <div className="mobile-text text-warm-orange font-medium">Impact</div>
                      <div className="text-gray-800 font-semibold">{stories[currentStory].achievement}</div>
                    </div>
                  </div>
                  
                  {/* Story Image */}
                  <div className={`bg-gradient-to-br ${stories[currentStory].image} relative min-h-64 lg:min-h-full`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white mobile-padding">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Heart className="w-10 h-10" />
                        </div>
                        <div className="text-xl font-semibold">
                          {stories[currentStory].name}
                        </div>
                        <div className="text-lg opacity-90">
                          Success Story
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story Navigation */}
          <div className={`flex items-center justify-center space-x-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={prevStory}
              variant="outline" 
              size="icon" 
              className="rounded-full hover:bg-warm-orange hover:text-white hover:border-warm-orange transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentStory ? 'bg-warm-orange scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              onClick={nextStory}
              variant="outline" 
              size="icon" 
              className="rounded-full hover:bg-warm-orange hover:text-white hover:border-warm-orange transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Story Grid */}
          <div className={`grid-cards ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            {stories.map((story, index) => (
              <Card 
                key={story.name}
                className={`floating-card cursor-pointer transition-all ${
                  index === currentStory ? 'ring-2 ring-warm-orange shadow-xl' : ''
                }`}
                onClick={() => setCurrentStory(index)}
              >
                <CardContent className="mobile-padding text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${story.image} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{story.name}</h4>
                  <p className="mobile-text text-gray-500 mb-2">{story.location}</p>
                  <div className="text-xs text-warm-orange font-medium">{story.achievement}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
