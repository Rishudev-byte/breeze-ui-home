
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Trophy, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-blue/20 via-transparent to-gaming-purple/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-white">Arena</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                The ultimate gaming platform where skill meets opportunity. Compete, predict, and earn in the world's most exciting esports arena.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="glow-button flex items-center gap-2">
                <Play className="h-5 w-5" />
                Start Playing
              </Button>
              <Button variant="outline" className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark">
                Watch Tournament
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-cyan">50K+</div>
                <div className="text-sm text-gray-400">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-cyan">$2M+</div>
                <div className="text-sm text-gray-400">Prize Pool</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-cyan">100+</div>
                <div className="text-sm text-gray-400">Tournaments</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="gaming-card p-8 animate-glow">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Live Arena</h3>
                  <div className="flex items-center gap-2 text-gaming-cyan">
                    <div className="w-2 h-2 bg-gaming-cyan rounded-full animate-pulse"></div>
                    <span className="text-sm">LIVE</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gaming-dark/50 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-gaming-cyan/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-gaming-cyan" />
                      </div>
                      <div className="text-sm text-gray-300">Player {i}</div>
                      <div className="text-gaming-cyan font-bold">{1000 - i * 50}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
