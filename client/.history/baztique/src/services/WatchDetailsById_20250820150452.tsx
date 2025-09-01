import axios from "axios";
import type { Watch } from "../components/models/Watch";

const API_BASE_URL = "http://localhost:8000/baztique";

export const getWatchById= async (id:number)=>{
    try{
        const response = axios.get<Watch>(`${API_BASE_URL}/watches/${id}`);
        return response.data;

    }catch(error){
        console.error("Watch does not exist.",error);
    }
}