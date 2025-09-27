
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getRandomWatch } from "../../../../services/RandomWatch";
import type { Watch } from "../../../models/Watch";

function WatchSlider(){
    const [watches,setWatches] = useState<Watch[]>([]);
    useEffect(()=>{
        

            getRandomWatch(5).then((data)=>{
                if(data){
                    setWatches(data);
                }
            });
        
    },[]);

    return(
        <div>
            <Swiper
             modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="rounded-2xl shadow-lg">
        {watches.map((watch)=>(
            <SwiperSlide key={watch.id}>
          <img
            src={`data:image/jpeg;base64,${watch.firstImage}`}
            alt={`slide-$`}
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        )
    )}
      </Swiper>
        </div>
    )


}

export default WatchSlider;