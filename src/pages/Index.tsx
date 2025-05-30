
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ImpactSection from '@/components/ImpactSection';
import StoriesSection from '@/components/StoriesSection';
import DonationSection from '@/components/DonationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParallaxWrapper from '@/components/ParallaxWrapper';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ParallaxWrapper speed={0.05}>
          <AboutSection />
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.08}>
          <WorkSection />
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.03}>
          <ImpactSection />
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.06}>
          <StoriesSection />
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.04}>
          <DonationSection />
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.02}>
          <ContactSection />
        </ParallaxWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
