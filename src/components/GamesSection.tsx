
import React from 'react';
import { Play, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GamesSection = () => {
  const games = [
    {
      name: 'League of Legends',
      rating: '4.9',
      players: '180M',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
      category: 'MOBA'
    },
    {
      name: 'Counter-Strike 2',
      rating: '4.8',
      players: '30M',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
      category: 'FPS'
    },
    {
      name: 'Valorant',
      rating: '4.7',
      players: '15M',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
      category: 'FPS'
    },
    {
      name: 'Dota 2',
      rating: '4.6',
      players: '7.6M',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
      category: 'MOBA'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gaming-dark to-gaming-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Games</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the most popular esports titles and start your competitive journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div key={index} className="gaming-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gaming-purple/80 text-white px-2 py-1 rounded text-xs font-semibold">
                    {game.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="glow-button">
                    <Play className="h-4 w-4 mr-2" />
                    Play Now
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{game.name}</h3>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-300">
                    <Users className="h-4 w-4" />
                    <span>{game.players}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 glow-button" size="sm">
                    Play
                  </Button>
                  <Button variant="outline" size="sm" className="border-gaming-cyan text-gaming-cyan">
                    Info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
