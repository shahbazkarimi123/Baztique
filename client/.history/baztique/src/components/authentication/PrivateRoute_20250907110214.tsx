import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth"


interface PrivateRouteProps {
  
}
const PrivateRoute = ({children}:{children:React.JSX.Element})=>{
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }

}
