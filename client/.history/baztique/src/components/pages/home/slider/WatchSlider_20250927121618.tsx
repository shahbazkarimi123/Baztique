import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getRandomWatch } from "../../../../services/RandomWatch";
import type { Watch } from "../../../models/Watch";
import { Link } from "react-router-dom";

function WatchSlider() {
  const [watches, setWatches] = useState<Watch[]>([]);
  useEffect(() => {
    getRandomWatch(10).then((data) => {
      if (data) {
        setWatches(data);
      }
    });
  }, []);

  return (
    <div className="py-10 px-10">
      <Swiper
      className="rounded-xl"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        
        slidesPerView={1} // default for mobile
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        loopedSlides={watches?.length}
        breakpoints={{
            480:{ slidesPerView: 1},
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {watches.map((watch) => (
          <SwiperSlide key={watch.id}>
            <Link to={`/watches/${watch.id}`}>
            <img
              src={`data:image/jpeg;base64,${watch.firstImage}`}
              alt={`slide-${watch.brand}`}
              className="w-[280px] h-56 object-cover rounded-xl shadow-2xl shadow-black m-2 border-none"
              />
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WatchSlider;
