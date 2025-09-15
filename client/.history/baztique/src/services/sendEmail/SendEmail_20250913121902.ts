import axios from "axios";
import type { EmailBody } from "../../components/models/EmailBody";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sendEmail = async (email:EmailBody)=>{
    try{

        const response = await axios.post(`${API_BASE_URL}/api/mail/send`, {
            to: "shahbazkarimi007@gmail.com",
            subject: email.subject,
            message: email.message
        },{
      

        auth:{
          username:"karimi",
          password:"12345"
        }
      });
        return response;
    }catch(error){
        console.log(error);
    }
}