import React from 'react';
import { Testimonial } from '../../types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;