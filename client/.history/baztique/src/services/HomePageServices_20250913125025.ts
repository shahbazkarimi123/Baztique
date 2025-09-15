import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_USER=import.meta.env.API_USER;
const API_PASS = import.meta.env.API_PASS;

export const getAllWatches = async ()=>{
    try{
        console.log(API_BASE_URL)
        console.log(api)
        const response = await axios.get(`${API_BASE_URL}/watches`,{
            auth:{
                username:API_USER,
                password:API_PASS
            }
        });
            // console.log(response.data)
            return response.data;
            
    }catch(error){
        console.error("Error fetching watches",error);
        throw error;
    }
};
