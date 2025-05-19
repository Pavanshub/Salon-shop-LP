import React from 'react';
import ContactForm from '../ui/ContactForm';
import BusinessHours from '../ui/BusinessHours';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to book an appointment? Reach out to us and we'll be happy to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Location</h3>
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.9306427095!2d-97.13371192422933!3d33.15633617352977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4bbb834db59d%3A0x75c38f1a5bf3eed9!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1701875462056!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fama Barber Shop and Beauty Salon location"
                ></iframe>
              </div>
              <div className="mt-4">
                <a 
                  href="https://maps.google.com/?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-800 transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
            
            <BusinessHours />
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;