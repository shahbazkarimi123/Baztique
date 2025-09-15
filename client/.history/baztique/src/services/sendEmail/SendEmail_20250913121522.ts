import axios from "axios";
import type { EmailBody } from "../../components/models/EmailBody";

export const sendEmail = async (email:EmailBody)=>{
    try{

        const response = await axios.post("http://localhost:8000/baztique/api/mail/send", {
            to: "shahbazkarimi007@gmail.com",
            subject: "Hello from React + Spring",
            message: "This is a test email!"
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