import axios from "axios";

export const sendEmail = async ()=>{
    try{

        const response = await axios.post("http://localhost:8080/baztique/api/email/send", {
            to: "user@example.com",
            subject: "Hello from React + Spring",
            text: "This is a test email!"
        },);
        return response;
    }catch(error){
        console.log(error);
    }
}