import { useState } from "react";

import img1 from "../../../../assets/watch1.jpg";
import img2 from "../../../../assets/watch1.jpg";
import img3 from "../../../../assets/watch1.jpg";
import img4 from "../../../../assets/watch1.jpg";

function ImageSlider() {
  const image = [img1, img2, img3, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
  };
  
}
