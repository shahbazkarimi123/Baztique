
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { get } from "../../../../services/RandomWatch";

function WatchSlider(){
    const [images,setImages] = useState();
    useEffect(()=>{
        RandomWatch
    });


}

export default WatchSlider;