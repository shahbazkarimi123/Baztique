import axios from "axios";
import type { WatchUser } from "../../components/models/WatchUser";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function SignupUser(){
    const signup = async (user:WatchUser)=>{
        try{
            const response = await axios.post(`${API_}`)

        }

        
    }

}

export default SignupUser;