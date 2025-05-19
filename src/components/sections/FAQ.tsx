import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Do I need an appointment or can I walk in?",
      answer: `While we welcome walk-ins, we recommend booking an appointment to ensure you get your preferred time slot. You can easily book online or call us at ${BUSINESS_INFO.phone} to schedule your visit.`
    },
    {
      question: "How long does a typical haircut take?",
      answer: "A standard men's haircut typically takes 30-45 minutes, while women's cuts can take 45-60 minutes. Specialty services like coloring or highlights may require 2-3 hours. We'll provide a more accurate time estimate based on your specific service when booking."
    },
    {
      question: "What form of payment do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), cash, and digital payments including Apple Pay and Google Pay. We also offer contactless payment options for your convenience."
    },
    {
      question: "Do you offer any loyalty programs or discounts?",
      answer: "Yes! We offer a loyalty program where you earn points for every service. After collecting enough points, you can redeem them for free services or products. We also offer special discounts for first-time clients, students, and senior citizens."
    },
    {
      question: "What hair products do you use and sell?",
      answer: "We use and sell professional-grade products from leading brands in the industry. Our retail selection includes shampoos, conditioners, styling products, and beard care items. Our stylists can recommend specific products tailored to your hair type and styling needs."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to frequently asked questions about our services, policies, and more.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-amber-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-amber-700 flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'py-4' : 'py-0 h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;