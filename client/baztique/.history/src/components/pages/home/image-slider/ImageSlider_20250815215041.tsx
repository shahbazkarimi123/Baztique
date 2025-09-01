import { useState } from "react";

import img1 from "../../../../assets/watch1.jpg";
import img2 from "../../../../assets/watch1.jpg";
import img3 from "../../../../assets/watch1.jpg";
import img4 from "../../../../assets/watch1.jpg";

function ImageSlider() {
  const images = [img1, img2, img3, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
  };
  const nextSlide= ()=>{
    setCurrentIndex((prev)=>prev === image.length-1?0: prev+1);
  };
  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        <div className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {imgaes}
            

        </div>
        
    </div>
  )
}
