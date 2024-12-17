import React, { useState } from 'react';

import img1 from './../images/services/cam.jpg';
import img2 from './../images/services/cctv.jpg';
import img3 from './../images/services/cctv2.jpg';
import img4 from './../images/services/cctv1.jpg';
import img5 from './../images/services/cctvvv.jpg';
import img6 from './../images/services/electric1.jpg';
import img7 from './../images/services/electric2.jpg';
import img8 from './../images/services/motor1.jpg';
import img9 from './../images/services/motor2.jpg';
import img10 from './../images/services/house.jpg';
import img11 from './../images/services/workers.jpg';
import img12 from './../images/services/fire.jpg';
import img13 from './../images/services/energizer.jpg';
import img14 from './../images/services/dvr.jpg';
import img15 from './../images/services/elect3.jpg';

// Sample images for different categories
const images = [
  { src: img1, alt: "Image 1", category: 'CCTV Camera' },
  { src: img2, alt: "Image 2", category: 'CCTV Camera' },
  { src: img3, alt: "Image 2", category: 'CCTV Camera' },
  { src: img4, alt: "Image 2", category: 'CCTV Camera' },
  { src: img5, alt: "Image 2", category: 'CCTV Camera' },
  { src: img6, alt: "Image 3", category: 'Electric Fence' },
  { src: img7, alt: "Image 4", category: 'Electric Fence' },
  { src: img8, alt: "Image 5", category: 'Motor Gates' },
  { src: img9, alt: "Image 6", category: 'Motor Gates' },
  { src: img10, alt: "Image 7", category: 'Others' },
  { src: img11, alt: "Image 8", category: 'Others' },
  { src: img12, alt: "Image 9", category: 'Others' },
  { src: img13, alt: "Image 10", category: 'Others' },
  { src: img14, alt: "Image 11", category: 'Others' },
  { src: img15, alt: "Image 12", category: 'Others' },
  { src: img12, alt: "Image 9", category: 'All Security' },
  { src: img13, alt: "Image 10", category: 'All Security' },
  { src: img14, alt: "Image 11", category: 'All Security' },
  { src: img15, alt: "Image 12", category: 'All Security' },
];

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Security');

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All Security' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div>
      {/* Category Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button 
          type="button" 
          onClick={() => setSelectedCategory('All Security')} 
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All Security
        </button>
        <button 
          type="button" 
          onClick={() => setSelectedCategory('CCTV Camera')} 
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          CCTV Camera
        </button>
        <button 
          type="button" 
          onClick={() => setSelectedCategory('Electric Fence')} 
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Electric Fence
        </button>
        <button 
          type="button" 
          onClick={() => setSelectedCategory('Motor Gates')} 
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Motor Gates
        </button>
        <button 
          type="button" 
          onClick={() => setSelectedCategory('Others')} 
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Others
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
