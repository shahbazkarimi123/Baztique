
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getRandomWatch } from "../../../../services/RandomWatch";

function WatchSlider(){
    const [images,setImages] = useState();
    useEffect(async ()=>{
        

            const response = await getRandomWatch(5).then(setImages)
        
    });


}

export default WatchSlider;