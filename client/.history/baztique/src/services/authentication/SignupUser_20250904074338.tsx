import axios from "axios";
import type { WatchUser } from "../../components/models/WatchUser";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function SignupUser(){
    const signup = async (user:WatchUser)=>{
        try{
            const response = await axios.post(`${API_BASE_URL}/api/signup`,
                {
                    email:user.email,
    userName:user.userName,
    password:user.password,
    phoneNumber:user.phoneNumber,
    firstName: user.first,
    lastName:string,
    officeAddress: string,
    homeAddress: string,

                
                },
                {

                auth:{
                    username:"karimi",
                    password:"password"
                }
            })

        }catch(error){
            console.log(error);
        }

        
    }

}

export default SignupUser;