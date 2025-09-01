import './WatchDescription.css';
import { useParams } from "react-router-dom";
import image1 from '../../assets/watch.jpg';
function WatchDescription(){
    const {id} = useParams<{id:string}>();
    
    return(
        <div className="main-content bg-gray-200">
            <div className="flex justify-evenly">
            <img src={image1} className="h-24"/>
            <div>
                <h1>Cal</h1>
            </div>

            </div>
            
        </div>
    )
}
export default WatchDescription;