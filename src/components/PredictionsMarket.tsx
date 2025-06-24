
import React from 'react';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PredictionsMarket = () => {
  const predictions = [
    { name: 'TSM vs C9', odds1: '2.4', odds2: '1.6', volume: '$25.6K', trend: 'up' },
    { name: 'FNC vs G2', odds1: '1.8', odds2: '2.1', volume: '$18.2K', trend: 'down' },
    { name: 'TL vs 100T', odds1: '3.2', odds2: '1.3', volume: '$32.1K', trend: 'up' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gaming-dark/50 to-gaming-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Predictions Market</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trade on match outcomes and tournament results. Use your esports knowledge to earn rewards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="gaming-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Market Overview</h3>
                <Button variant="outline" size="sm" className="border-gaming-cyan text-gaming-cyan">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Charts
                </Button>
              </div>
              
              <div className="space-y-4">
                {predictions.map((pred, index) => (
                  <div key={index} className="bg-gaming-dark/30 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="font-semibold text-white">{pred.name}</div>
                          <div className="text-sm text-gray-400">Volume: {pred.volume}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-gaming-cyan font-bold">{pred.odds1}</div>
                          <div className="text-xs text-gray-400">Team A</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gaming-cyan font-bold">{pred.odds2}</div>
                          <div className="text-xs text-gray-400">Team B</div>
                        </div>
                        <div className="flex items-center">
                          {pred.trend === 'up' ? (
                            <TrendingUp className="h-5 w-5 text-green-400" />
                          ) : (
                            <TrendingDown className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="gaming-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Your Portfolio</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Value</span>
                  <span className="text-gaming-cyan font-bold">$1,247.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">24h Change</span>
                  <span className="text-green-400 font-bold">+$127.30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Active Positions</span>
                  <span className="text-white font-bold">7</span>
                </div>
              </div>
              <Button className="glow-button w-full mt-4">
                Trade Now
              </Button>
            </div>
            
            <div className="gaming-card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Hot Predictions</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="text-gaming-cyan">Worlds Championship</div>
                  <div className="text-gray-400">Winner prediction opens in 2h</div>
                </div>
                <div className="text-sm">
                  <div className="text-gaming-cyan">CS2 Major</div>
                  <div className="text-gray-400">MVP betting now live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionsMarket;
