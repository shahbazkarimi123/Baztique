const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from "axios";
import type { Watch } from "../components/models/Watch";

export const getWatchesByGender =  async (gender:string): Promise<Watch[]>=>{
    try{

        const response = await axios.get<Watch[]>(`${API_BASE_URL}/watches/gender/${gender}`)
        return response.data;
    }catch(error){
        console.log(`${gender} does not exist`,error);
    }
    

}