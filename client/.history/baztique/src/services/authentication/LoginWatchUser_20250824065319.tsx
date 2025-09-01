import axios from "axios"
const API_BASE_URL = import.meta.env.BASE_API_URL;

function LoginWatchUser(){
    const log = async (userName:string, password:string)=>{
        try{
            const response = await axios.post(`${API_BASE_URL}/api/login-user`,{
                userName:userName,
                password:password
            });
            return response.data;

        }catch(error:any){
            
        }

    }
}
export default LoginWatchUser