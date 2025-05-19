import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  // Update the page title
  useEffect(() => {
    document.title = "Fama Barber Shop and Beauty Salon | Denton, TX";
    
    // Update the favicon to use the Lucide scissors icon
    const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (link) {
      link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23B45309' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='6' cy='6' r='3'/%3E%3Ccircle cx='18' cy='6' r='3'/%3E%3Cpath d='M20 12 A2 2 0 0 1 18 10 A2 2 0 0 1 16 12 A2 2 0 0 1 18 14 A2 2 0 0 1 20 12 Z'/%3E%3Cpath d='M14 18 A2 2 0 0 1 12 16 A2 2 0 0 1 10 18 A2 2 0 0 1 12 20 A2 2 0 0 1 14 18 Z'/%3E%3Cpath d='m8 14-2.5 2.5'/%3E%3Cpath d='M18.9 9.5 9 18.9'/%3E%3Cpath d='M8 6H4'/%3E%3Cpath d='M20 6h-4'/%3E%3C/svg%3E";
    }
  }, []);

  return <Home />;
}

export default App;