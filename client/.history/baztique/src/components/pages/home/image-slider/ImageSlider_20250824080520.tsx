import { useState } from "react";
import "./imageSlider.css";
import img1 from "../../../../assets/watch1.webp";
import img2 from "../../../../assets/watch1.webp";
import img3 from "../../../../assets/watch1.webp";
import img4 from "../../../../assets/watch1.webp";

function ImageSlider() {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative max-w-auto mx-auto overflow-hidden ">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx}`}
            srcSet={`${img1} 800w, ${img2} 1200w, ${img3} 1920w`}
            sizes="(max-width: 768px) 800px, (max-width: 1280px) 1200px, 1920px"
            loading={idx === 0 ? "eager" : "lazy"}
            className="w-full flex-shrink-0 h-[22rem] md:h-[20rem]"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
export default ImageSlider;
