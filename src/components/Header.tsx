
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gaming-dark/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gaming-cyan">Arena</div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-gaming-cyan transition-colors">Home</a>
              <a href="#" className="text-white hover:text-gaming-cyan transition-colors">Games</a>
              <a href="#" className="text-white hover:text-gaming-cyan transition-colors">Tournaments</a>
              <a href="#" className="text-white hover:text-gaming-cyan transition-colors">Market</a>
              <a href="#" className="text-white hover:text-gaming-cyan transition-colors">Leaderboard</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search games, tournaments..."
                className="bg-card/50 border border-border/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-gaming-cyan"
              />
            </div>
            <Button className="glow-button">
              Connect Wallet
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
