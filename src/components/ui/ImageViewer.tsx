import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { useKey, useInterval } from 'react-use';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  Heart,
  RotateCw,
  Loader
} from 'lucide-react';

interface ImageViewerProps {
  images: Array<{
    id: number;
    url: string;
    alt: string;
    description?: string;
  }>;
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  // Reset states when viewer is opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoomLevel(1);
      setRotation(0);
      setIsLoading(true);
      setLoadError(false);
    }
  }, [isOpen, initialIndex]);

  // Slideshow functionality
  useInterval(
    () => {
      handleNext();
    },
    isPlaying ? 3000 : null
  );

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsLoading(true);
    setLoadError(false);
    setZoomLevel(1);
    setRotation(0);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsLoading(true);
    setLoadError(false);
    setZoomLevel(1);
    setRotation(0);
  }, [images.length]);

  // Keyboard navigation
  useKey('ArrowLeft', handlePrevious);
  useKey('ArrowRight', handleNext);
  useKey('Escape', onClose);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Image controls
  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
  const handleRotate = () => setRotation((prev) => prev + 90);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[currentIndex].url;
    link.download = `image-${images[currentIndex].id}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: images[currentIndex].alt,
          text: images[currentIndex].description,
          url: images[currentIndex].url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(images[currentIndex].url);
      alert('Image URL copied to clipboard!');
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setLoadError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setLoadError(true);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        {...swipeHandlers}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          aria-label="Close viewer"
        >
          <X size={24} />
        </button>

        {/* Image counter */}
        <div className="absolute top-4 left-4 text-white">
          {currentIndex + 1} of {images.length}
        </div>

        {/* Main image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain"
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                transition: 'transform 0.3s ease'
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader className="w-8 h-8 text-white animate-spin" />
            </div>
          )}

          {/* Error message */}
          {loadError && (
            <div className="absolute inset-0 flex items-center justify-center text-white">
              Failed to load image
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        {/* Control buttons */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-black bg-opacity-50 px-6 py-3 rounded-full">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white hover:text-gray-300"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button
            onClick={handleZoomIn}
            className="text-white hover:text-gray-300"
            aria-label="Zoom in"
          >
            <ZoomIn size={20} />
          </button>

          <button
            onClick={handleZoomOut}
            className="text-white hover:text-gray-300"
            aria-label="Zoom out"
          >
            <ZoomOut size={20} />
          </button>

          <button
            onClick={handleRotate}
            className="text-white hover:text-gray-300"
            aria-label="Rotate image"
          >
            <RotateCw size={20} />
          </button>

          <button
            onClick={handleDownload}
            className="text-white hover:text-gray-300"
            aria-label="Download image"
          >
            <Download size={20} />
          </button>

          <button
            onClick={handleShare}
            className="text-white hover:text-gray-300"
            aria-label="Share image"
          >
            <Share2 size={20} />
          </button>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`hover:text-gray-300 ${
              isFavorite ? 'text-red-500' : 'text-white'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Image caption */}
        {images[currentIndex].description && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-md max-w-lg">
            {images[currentIndex].description}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageViewer;