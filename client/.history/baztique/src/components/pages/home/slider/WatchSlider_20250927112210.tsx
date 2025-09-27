
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getRandomWatch } from "../../../../services/RandomWatch";

function WatchSlider(){
    const [watches,setWatches] = useState();
    useEffect(()=>{
        

            getRandomWatch(5).then((data)=>{
                if(data){
                    setWatches(data);
                }
            });
        
    }[Watch]);


}

export default WatchSlider;