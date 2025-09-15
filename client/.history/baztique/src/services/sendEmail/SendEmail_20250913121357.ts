import axios from "axios";

export const sendEmail = async (email:Email)=>{
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