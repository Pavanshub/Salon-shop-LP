import React from 'react';
import { Service } from '../../types';
import Button from './Button';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-amber-700 text-white px-3 py-1 text-sm font-bold">
          ${service.price}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        <div className="mt-auto">
          <Button variant="outline" size="md" className="w-full" onClick={() => window.location.href = '#contact'}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;