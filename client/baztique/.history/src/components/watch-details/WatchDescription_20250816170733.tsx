import { useParams } from "react-router-dom";
import image1 from '.'
function WatchDescription(){
    const {id} = useParams<{id:string}>();
    
    return(
        <div>
            <img src=""></img>
        </div>
    )
}
export default WatchDescription;