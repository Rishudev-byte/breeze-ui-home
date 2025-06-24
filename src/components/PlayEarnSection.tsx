
import React from 'react';
import { Coins, Gamepad2, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlayEarn = () => {
  const features = [
    {
      icon: Coins,
      title: 'Earn Crypto',
      description: 'Win tournaments and earn cryptocurrency rewards'
    },
    {
      icon: Gamepad2,
      title: 'Play & Compete',
      description: 'Join matches and tournaments with skill-based matchmaking'
    },
    {
      icon: TrendingUp,
      title: 'Trade Assets',
      description: 'Buy, sell, and trade in-game assets and NFTs'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Blockchain-secured transactions and fair play guaranteed'
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/20 via-gaming-cyan/10 to-gaming-purple/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Play & Earn <span className="text-gaming-cyan">Crypto</span>
              </h2>
              <p className="text-xl text-gray-300">
                Transform your gaming skills into real rewards. Compete in tournaments, 
                trade assets, and build your digital wealth in the Arena ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="gaming-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gaming-cyan/20 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-gaming-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button className="glow-button">
                Start Earning
              </Button>
              <Button variant="outline" className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="gaming-card p-8 animate-glow">
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your Earnings</h3>
                  <div className="text-4xl font-bold text-gaming-cyan">$2,847.50</div>
                  <div className="text-sm text-gray-400">Total earned this month</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gaming-cyan">15</div>
                    <div className="text-xs text-gray-400">Wins</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gaming-cyan">7</div>
                    <div className="text-xs text-gray-400">Tournaments</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gaming-cyan">92%</div>
                    <div className="text-xs text-gray-400">Win Rate</div>
                  </div>
                </div>
                
                <div className="bg-gaming-dark/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Next Payout</span>
                    <span className="text-gaming-cyan font-bold">$125.30</span>
                  </div>
                  <div className="w-full bg-gaming-dark rounded-full h-2">
                    <div className="bg-gradient-to-r from-gaming-cyan to-gaming-purple h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">3 days remaining</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayEarn;
