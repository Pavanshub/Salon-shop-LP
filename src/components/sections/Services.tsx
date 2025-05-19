import React, { useState } from 'react';
import ServiceCard from '../ui/ServiceCard';
import { SERVICES } from '../../constants';
import { Service } from '../../types';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'barber' | 'salon'>('all');
  
  const filteredServices = SERVICES.filter(service => 
    activeCategory === 'all' || service.category === activeCategory
  );
  
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of premium barber and beauty services tailored to meet your unique style needs.
          </p>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('barber')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'barber' 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Barber
            </button>
            <button
              onClick={() => setActiveCategory('salon')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'salon' 
                  ? 'bg-amber-700 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Salon
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: Service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;