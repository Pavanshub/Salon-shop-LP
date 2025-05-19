import React, { useState, useEffect } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experiences at Fama Barber Shop and Beauty Salon.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <div className="flex justify-center">
              <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
            </div>
            
            <div className="flex justify-center mt-6">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${
                    index === currentIndex ? 'bg-amber-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <a
              href="#contact"
              className="text-amber-500 border-b-2 border-amber-500 hover:text-amber-400 transition-colors"
            >
              Book Your Appointment Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;