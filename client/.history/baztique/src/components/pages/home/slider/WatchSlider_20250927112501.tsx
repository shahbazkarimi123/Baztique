
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
        <div
    )


}

export default WatchSlider;