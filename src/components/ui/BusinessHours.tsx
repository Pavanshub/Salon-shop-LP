import React from 'react';
import { BUSINESS_INFO } from '../../constants';

const BusinessHours: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Business Hours</h3>
      <div className="space-y-2">
        {BUSINESS_INFO.hours.map((item, index) => (
          <div 
            key={index} 
            className={`flex justify-between py-2 ${index < BUSINESS_INFO.hours.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            <span className="font-medium text-gray-700">{item.day}</span>
            <span className={`${item.hours === 'Closed' ? 'text-red-500 font-medium' : 'text-gray-600'}`}>
              {item.hours}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-medium mb-2 text-gray-800">Contact</h4>
        <p className="flex items-center text-gray-700 mb-2">
          <span className="mr-2">📞</span>
          <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-amber-700 transition-colors">
            {BUSINESS_INFO.phone}
          </a>
        </p>
        <p className="flex items-center text-gray-700">
          <span className="mr-2">📍</span>
          <a 
            href={BUSINESS_INFO.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-amber-700 transition-colors"
          >
            {BUSINESS_INFO.address}
          </a>
        </p>
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-medium mb-2 text-gray-800">Follow Us</h4>
        <div className="flex space-x-4">
          {BUSINESS_INFO.socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-amber-700 transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;