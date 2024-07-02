'use client'
import Image from "next/image"
import left_arrow from "../../images/left_arrow.png"
import right_arrow from "../../images/right_arrow.png"
import example from "../../images/example.webp" 
import example2 from "../../images/example2.png"
import example3 from "../../images/example3.webp"
import React, { useState } from "react"

const Carousel = () => {
    const images = [example, example2, example3];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const handleNextClick = () => {
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  return ( 
    
        <div className="carousel_main_promotion">
          <div className="carousel_main_promotion_button" onClick={handlePrevClick}>
            <Image src={left_arrow} className="carousel_main_promotion_button_prev"></Image>
          </div>

          <Image src={images[currentIndex]} className="carousel_main_promotion_picture"></Image>
        
          <div className="carousel_main_promotion_button" onClick={handleNextClick}>
            <Image src={right_arrow} className="carousel_main_promotion_button_next"></Image>
          </div>
        </div>
    
    
  );
};
  export default Carousel;