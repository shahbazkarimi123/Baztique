import { useParams } from "react-router-dom";
import image1 from '../../assets/watch.jpg';
function WatchDescription(){
    const {id} = useParams<{id:string}>();
    
    return(
        <div>
            <img src="image1" height={}></img>
        </div>
    )
}
export default WatchDescription;