import './WatchDescription.css';
import { useParams } from "react-router-dom";
import image1 from '../../assets/watch.jpg';
function WatchDescription(){
    const {id} = useParams<{id:string}>();
    
    return(
        <div className="main-content bg-gray-200">
            <div className="flex items">
            <img src={image1} className="h-24"/>
            <div></div>

            </div>
            
        </div>
    )
}
export default WatchDescription;