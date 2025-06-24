
import React from 'react';
import { Calendar, Users, Trophy, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TournamentsSection = () => {
  const tournaments = [
    {
      name: 'Arena Championship',
      game: 'League of Legends',
      prize: '$100K',
      participants: '128',
      startDate: 'Dec 15',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop'
    },
    {
      name: 'Cyber Showdown',
      game: 'CS2',
      prize: '$75K',
      participants: '64',
      startDate: 'Dec 20',
      status: 'registration',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop'
    },
    {
      name: 'Elite Series',
      game: 'Valorant',
      prize: '$50K',
      participants: '32',
      startDate: 'Dec 25',
      status: 'live',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop'
    },
    {
      name: 'Winter Cup',
      game: 'Dota 2',
      prize: '$80K',
      participants: '96',
      startDate: 'Jan 5',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-green-400 bg-green-400/20';
      case 'registration': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gaming-cyan bg-gaming-cyan/20';
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Tournaments</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join elite competitions and prove your skills against the best players worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tournaments.map((tournament, index) => (
            <div key={index} className="gaming-card group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img 
                  src={tournament.image} 
                  alt={tournament.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(tournament.status)}`}>
                    {tournament.status.toUpperCase()}
                  </span>
                </div>
                {tournament.status === 'live' && (
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs font-semibold">LIVE</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{tournament.name}</h3>
                  <p className="text-gaming-cyan text-sm">{tournament.game}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Trophy className="h-4 w-4" />
                      Prize Pool
                    </div>
                    <span className="text-gaming-cyan font-bold">{tournament.prize}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="h-4 w-4" />
                      Participants
                    </div>
                    <span className="text-white">{tournament.participants}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="h-4 w-4" />
                      Start Date
                    </div>
                    <span className="text-white">{tournament.startDate}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full glow-button"
                  variant={tournament.status === 'live' ? 'outline' : 'default'}
                >
                  {tournament.status === 'live' ? 'Watch Live' : 
                   tournament.status === 'registration' ? 'Register Now' : 'View Details'}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-dark">
            View All Tournaments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
