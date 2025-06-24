
import React from 'react';
import { Facebook, Twitter, Youtube, Twitch, Discord } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gaming-dark/80 border-t border-border/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gaming-cyan">Arena</div>
            <p className="text-gray-400 text-sm">
              The ultimate gaming platform for competitive esports and cryptocurrency rewards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">
                <Discord className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Leaderboards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Market</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Bug Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-cyan transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Arena Gaming Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
