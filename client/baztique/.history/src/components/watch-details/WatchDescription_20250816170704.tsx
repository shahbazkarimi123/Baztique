import { useParams } from "react-router-dom";

function WatchDescription(){
    const {id} = useParams<{id:string}>();
    
    return(
        <div>
            <img src=""></img>
        </div>
    )
}
export default WatchDescription;