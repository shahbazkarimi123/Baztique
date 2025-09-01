import { useParams } from "react-router-dom";
import image1 from '../../assets/watch.jpg';
function WatchDescription(){
    const {id} = useParams<{id:string}>();
    
    return(
        <div className="main-cont">
            <h1>WatchDEs</h1>
            <img src={image1} className="h-24"></img>
        </div>
    )
}
export default WatchDescription;