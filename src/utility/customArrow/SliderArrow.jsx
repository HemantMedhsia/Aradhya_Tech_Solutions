// CustomPrevArrow.js
import React from 'react';

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="custom-prev-arrow"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    &#10094; {/* You can use any icon or image here */}
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="custom-next-arrow"
    onClick={onClick}
    aria-label="Next Slide"
  >
    &#10095; {/* You can use any icon or image here */}
  </button>
);

export {CustomNextArrow, CustomPrevArrow};
