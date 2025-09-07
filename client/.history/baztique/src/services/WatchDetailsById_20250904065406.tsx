import axios from "axios";
import type { Watch } from "../components/models/Watch";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getWatchById= async (id:number): Promise<Watch | undefined> => {
    try{
        const response = await axios.get<Watch>(`${API_BASE_URL}/watches/id/${id}`,{
            auth:{
                username:"karimi",
                password:""
            }
        });
        return response.data;

    }catch(error){
        console.error("Watch does not exist.",error);
    }
}