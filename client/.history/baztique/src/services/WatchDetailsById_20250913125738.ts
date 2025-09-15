import axios from "axios";
import type { Watch } from "../components/models/Watch";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_USER=import.meta.env.VITE_API_USER;
const API_PASS = import.meta.env.VITE-API_PASS;

export const getWatchById= async (id:number): Promise<Watch | undefined> => {
    try{
        const response = await axios.get<Watch>(`${API_BASE_URL}/watches/id/${id}`,{
            auth:{
                username:API_USER,
                password:API_PASS
            }
        });
        return response.data;

    }catch(error){
        console.error("Watch does not exist.",error);
    }
}