import axios from "axios";

const API_BASE_URL = import.meta.env.;

export const getAllWatches = async ()=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/watches`);
            return response.data;
    }catch(error){
        console.error("Error fetching watches",error);
        throw error;
    }
};