import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';
import Button from '../ui/Button';
import { BUSINESS_INFO } from '../../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Scissors size={36} className={`mr-2 ${isScrolled ? 'text-amber-700' : 'text-amber-600'}`} />
            <div>
              <h1 className={`font-bold text-lg md:text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                {BUSINESS_INFO.name}
              </h1>
              <div className={`flex items-center text-xs ${isScrolled ? 'text-amber-700' : 'text-amber-300'}`}>
                <span className="mr-1">★ {BUSINESS_INFO.rating}</span>
                <span>({BUSINESS_INFO.reviewCount}+ reviews)</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-amber-700' : 'text-white hover:text-amber-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant={isScrolled ? 'primary' : 'outline'} 
              size="md"
              onClick={() => window.location.href = '#contact'}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-5 flex flex-col justify-between relative ${mobileMenuOpen ? 'z-20' : ''}`}>
              <span className={`w-full h-0.5 block transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 block transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 block transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-10 transition-all duration-300 flex flex-col justify-center items-center ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-amber-300 text-xl font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                window.location.href = '#contact';
                setMobileMenuOpen(false);
              }}
            >
              Book Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;