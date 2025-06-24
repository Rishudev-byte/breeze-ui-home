
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PredictionsMarket from '@/components/PredictionsMarket';
import TournamentsSection from '@/components/TournamentsSection';
import GamesSection from '@/components/GamesSection';
import PlayEarn from '@/components/PlayEarnSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-gradient">
      <Header />
      <HeroSection />
      <PredictionsMarket />
      <TournamentsSection />
      <GamesSection />
      <PlayEarn />
      <Footer />
    </div>
  );
};

export default Index;
