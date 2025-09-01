import { useParams } from "react-router-dom";

function WatchDescription(){
    const {id} = useParams<{id:string}>();
    
    return(
        <div className="bg-gray-200">

            
            <div>id</div>
        
        </div>
    )
}
export default WatchDescription;