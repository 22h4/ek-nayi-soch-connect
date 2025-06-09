
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Heart, ArrowLeft, ArrowRight, Star, Sparkles } from 'lucide-react';

const SpatialStories = () => {
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
      name: 'Aria Sharma',
      age: '12 years old',
      location: 'Neo-Rajasthan',
      story: "Through the holographic learning pods, I've mastered quantum physics and created my first AI assistant. What seemed impossible yesterday is my reality today. I'm designing solutions for water scarcity in my village using biomimetic technology.",
      achievement: 'Youngest Quantum Developer',
      image: 'from-emerald-400 to-green-500',
      futuristic: 'Building quantum solutions'
    },
    {
      name: 'Kiran Kumar',
      age: '45 years old',
      location: 'Smart Bihar',
      story: "The regenerative agriculture program transformed not just my farm, but my entire understanding of what's possible. Using precision biotech, I've increased yield by 400% while restoring the ecosystem.",
      achievement: 'Carbon-Negative Pioneer',
      image: 'from-green-500 to-emerald-600',
      futuristic: 'Healing the earth'
    },
    {
      name: 'Maya Devi',
      age: '28 years old',
      location: 'Digital Uttar Pradesh',
      story: "The women's innovation lab gave me access to neural-link design tools. I've created inclusive technology that empowers differently-abled individuals. My inventions are now used globally in accessibility applications.",
      achievement: 'Neural Interface Pioneer',
      image: 'from-emerald-600 to-green-700',
      futuristic: 'Bridging minds and machines'
    },
    {
      name: 'Arjun Singh',
      age: '16 years old',
      location: 'Cyber Madhya Pradesh',
      story: "Using the climate prediction AI I developed in our innovation hub, we've prevented three natural disasters and saved thousands of lives. The future felt scary, but now I'm building it with purpose.",
      achievement: 'Climate Oracle Creator',
      image: 'from-green-400 to-emerald-500',
      futuristic: 'Predicting tomorrow, protecting today'
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" ref={sectionRef} className="content-section bg-spatial-2">
      <div className="container-spatial">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 glass-morphism text-emerald-600 font-semibold rounded-full mb-8">
            <Heart className="w-5 h-5 mr-2" />
            Future Stories
          </div>
          <h2 className="heading-spatial-lg mb-6">
            <span className="block text-slate-800">Lives Reimagined</span>
            <span className="block text-emerald-600">Through Innovation</span>
          </h2>
          <p className="text-spatial max-w-3xl mx-auto">
            Meet the pioneers who are not just living in the future, but actively creating it 
            through our revolutionary programs and technologies.
          </p>
        </div>

        {/* Featured Story */}
        <div className={`mb-12 ${isVisible ? 'animate-spatial-float' : 'opacity-0'}`}>
          <Card className="spatial-card overflow-hidden">
            <CardContent className="p-0">
              <div className="spatial-grid lg:grid-cols-2">
                {/* Story Content */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Quote className="w-8 h-8 text-emerald-500" />
                    <Sparkles className="w-6 h-6 text-emerald-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {stories[currentStory].name}
                    </h3>
                    <div className="text-slate-600 space-y-1">
                      <div className="font-medium">{stories[currentStory].age}</div>
                      <div>{stories[currentStory].location}</div>
                      <div className="text-emerald-600 font-semibold text-sm">
                        {stories[currentStory].futuristic}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-spatial italic leading-relaxed">
                    "{stories[currentStory].story}"
                  </p>
                  
                  <div className="glass-morphism p-4 rounded-2xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-emerald-600 font-medium">Achievement</span>
                    </div>
                    <div className="text-slate-800 font-bold">{stories[currentStory].achievement}</div>
                  </div>
                </div>
                
                {/* Story Visual */}
                <div className={`bg-gradient-to-br ${stories[currentStory].image} relative min-h-64 lg:min-h-full`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 glass-morphism rounded-3xl flex items-center justify-center mx-auto mb-6 animate-spatial-glow">
                        <Heart className="w-12 h-12" />
                      </div>
                      <div className="text-2xl font-bold mb-2">
                        {stories[currentStory].name}
                      </div>
                      <div className="text-lg opacity-90 mb-2">
                        Future Pioneer
                      </div>
                      <div className="text-sm opacity-75">
                        {stories[currentStory].achievement}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className={`flex items-center justify-center space-x-6 mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Button 
            onClick={prevStory}
            variant="outline" 
            size="icon" 
            className="rounded-full hover:bg-emerald-50 hover:border-emerald-300 w-12 h-12"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory 
                    ? 'bg-emerald-500 scale-125' 
                    : 'bg-emerald-200 hover:bg-emerald-300'
                }`}
              />
            ))}
          </div>
          
          <Button 
            onClick={nextStory}
            variant="outline" 
            size="icon" 
            className="rounded-full hover:bg-emerald-50 hover:border-emerald-300 w-12 h-12"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Story Grid */}
        <div className={`spatial-grid md:grid-cols-2 lg:grid-cols-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {stories.map((story, index) => (
            <Card 
              key={story.name}
              className={`spatial-card p-6 cursor-pointer transition-all duration-500 ${
                index === currentStory ? 'ring-2 ring-emerald-500 shadow-xl scale-105' : ''
              }`}
              onClick={() => setCurrentStory(index)}
            >
              <CardContent className="p-0 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${story.image} rounded-3xl mx-auto mb-4 flex items-center justify-center animate-spatial-glow`}>
                  <span className="text-white font-bold text-2xl">
                    {story.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-slate-800 mb-1">{story.name}</h4>
                <p className="text-sm text-slate-600 mb-2">{story.location}</p>
                <div className="text-xs text-emerald-600 font-medium mb-1">{story.achievement}</div>
                <div className="text-xs text-slate-500">{story.futuristic}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpatialStories;
