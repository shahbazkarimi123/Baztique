import axios from "axios"
const API_BASE_URL = import.meta.env.BASE_API_URL;

function LoginWatchUser(){
    const log = async (userName:string, passowrd:string)=>{
        try{
            const login = await axios.post(`${API_BASE_URL}/api/login-user`,{
                
            });
            

        }

    }
}
export default LoginWatchUser