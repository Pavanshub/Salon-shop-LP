import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../../constants';
import ImageViewer from '../ui/ImageViewer';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our work and the premium services we provide to our valued clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={image.id} 
              className="relative h-64 overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageViewer
        images={GALLERY_IMAGES}
        initialIndex={selectedImageIndex || 0}
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
      />
    </section>
  );
};

export default Gallery;