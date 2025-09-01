import { useParams } from "react-router-dom";

function WatchDescription(){
    const {id} = useParams<{}
    const de=id;
    return(
        <div className="bg-gray-200">

            
            <div></div>
        
        </div>
    )
}
export default WatchDescription;