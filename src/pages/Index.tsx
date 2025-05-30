
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ImpactSection />
        <StoriesSection />
        <DonationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
