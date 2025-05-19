import React from 'react';
import { Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scissors size={28} className="text-amber-500 mr-2" />
              <h3 className="font-bold text-lg">{BUSINESS_INFO.name}</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Premium barber and beauty services in Denton, TX. Where style meets precision.
            </p>
            <div className="flex space-x-4">
              {BUSINESS_INFO.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <p className="flex items-start mb-2">
              <span className="mr-2">📍</span>
              <span>{BUSINESS_INFO.address}</span>
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2">📞</span>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-400 hover:text-amber-500 transition-colors">
                {BUSINESS_INFO.phone}
              </a>
            </p>
            <p className="text-gray-400">{BUSINESS_INFO.status}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="text-sm">
            Designed by Pavan Krishna D.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;