import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getRandomWatch } from "../../../../services/RandomWatch";
import type { Watch } from "../../../models/Watch";

function WatchSlider() {
  const [watches, setWatches] = useState<Watch[]>([]);
  useEffect(() => {
    getRandomWatch(5).then((data) => {
      if (data) {
        console.log(data);
        setWatches(data);
      }
    });
  }, []);

  return (
    <div className="w-[100%] h-[300px]">
      <Swiper
        odules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // default for mobile
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 2, // >=640px → 2 slides
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // >=768px → 3 slides
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4, // >=1024px → 4 slides
            spaceBetween: 40,
          },
        }}
      >
        {watches.map((watch) => (
          <SwiperSlide key={watch.id}>
            <img
              src={`data:image/jpeg;base64,${watch.firstImage}`}
              alt={`slide-${watch.brand}`}
              className="w-full h-96 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WatchSlider;
