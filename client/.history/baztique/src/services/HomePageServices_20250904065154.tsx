import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllWatches = async ()=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/watches`,);
            // console.log(response.data)
            return response.data;
            
    }catch(error){
        console.error("Error fetching watches",error);
        throw error;
    }
};
