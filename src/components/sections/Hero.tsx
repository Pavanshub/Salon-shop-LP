import React from 'react';
import Button from '../ui/Button';
import { BUSINESS_INFO } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Premium Grooming <span className="text-amber-500">Experience</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-6">
            Where style meets precision. Experience professional barber and beauty services in a comfortable, modern environment.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '#contact'}
            >
              Book Appointment
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '#services'}
            >
              View Services
            </Button>
          </div>
          
          <div className="bg-black bg-opacity-50 p-4 rounded-lg inline-block">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center">
                <div className="text-amber-500 text-xl mr-2">★</div>
                <div>
                  <span className="text-white font-semibold">{BUSINESS_INFO.rating}</span>
                  <span className="text-gray-300"> ({BUSINESS_INFO.reviewCount}+ reviews)</span>
                </div>
              </div>
              
              <div className="h-6 border-l border-gray-600 hidden sm:block"></div>
              
              <div className="text-white">
                {BUSINESS_INFO.status}
              </div>
              
              <div className="h-6 border-l border-gray-600 hidden sm:block"></div>
              
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-amber-300 transition-colors">
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;