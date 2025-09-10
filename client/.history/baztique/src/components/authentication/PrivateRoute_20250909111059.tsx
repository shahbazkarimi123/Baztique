import { Navigate , useLocation} from "react-router-dom";
import { isAuthenticated } from "../../utils/auth"


// interface PrivateRouteProps {
  
// }
const PrivateRoute = ({children}:{children:React.JSX.Element})=>{
    const location = useLocation();
    if(!isAuthenticated()){
        return (<Navigate to="/watches/login" replace/>);
    }
    return children;
}
export default PrivateRoute;