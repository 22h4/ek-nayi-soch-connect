
import React from 'react';
import SpatialNavigation from '@/components/SpatialNavigation';
import SpatialHero from '@/components/SpatialHero';
import SpatialAbout from '@/components/SpatialAbout';
import SpatialPrograms from '@/components/SpatialPrograms';
import SpatialImpact from '@/components/SpatialImpact';
import SpatialStories from '@/components/SpatialStories';
import SpatialContact from '@/components/SpatialContact';
import SpatialFooter from '@/components/SpatialFooter';

const Index = () => {
  return (
    <div className="min-h-screen w-full spatial-container">
      <SpatialNavigation />
      <main className="w-full">
        <SpatialHero />
        <SpatialAbout />
        <SpatialPrograms />
        <SpatialImpact />
        <SpatialStories />
        <SpatialContact />
      </main>
      <SpatialFooter />
    </div>
  );
};

export default Index;
