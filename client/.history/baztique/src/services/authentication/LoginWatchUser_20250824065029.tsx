import axios from "axios"
const API_BASE_URL = import.meta.env.BASE_API_URL;

function LoginWatchUser(){
    const log = async (userName:string, passowrd:string)=>{
        try{
            const login = axios.get(`${API_BASE_URL}/api/users`);
            

        }

    }
}
export default LoginWatchUser