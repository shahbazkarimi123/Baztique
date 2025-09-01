import axios from "axios"
const API_BASE_URL = import.meta.env.BASE_API_URL;

function LoginWatchUser(){
    const log = (userName:s)=>{

        const login = axios.get(`${API_BASE_URL}/api/users`,);
    }
}
export default LoginWatchUser