import React from 'react';
import { BUSINESS_INFO } from '../../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className='text-justify'>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our Salon</h2>
            
            <p className="text-gray-600 mb-4">
              Welcome to {BUSINESS_INFO.name}, Denton's premier destination for exceptional grooming services. Established with a passion for precision and style, we've been serving the Denton community with premium barber and beauty services.
            </p>
            
            <p className="text-gray-600 mb-4">
              Our team of experienced professionals is dedicated to providing personalized services tailored to your unique style preferences. Whether you're looking for a classic haircut, a hot shave, or a complete style transformation, we have the expertise to exceed your expectations.
            </p>
            
            <p className="text-gray-600 mb-6">
              At {BUSINESS_INFO.name}, we believe that exceptional grooming is about more than just appearance—it's about confidence and self-expression. That's why we're committed to creating a welcoming environment where you can relax and enjoy the premium experience you deserve.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-xl font-bold">★</span>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-800">{BUSINESS_INFO.rating} Rating</p>
                <p className="text-gray-600">Based on {BUSINESS_INFO.reviewCount}+ reviews</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barber shop interior" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Hair styling" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Beauty salon service" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barbershop interior" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;