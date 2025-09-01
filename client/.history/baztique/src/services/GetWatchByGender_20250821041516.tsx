const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from "axios";
import type { Watch } from "../components/models/Watch";

exposrt const getWatchesByGender =  async (gender:string)=>{
    try{

        const response = axios.get<Watch[]>(`${API_BASE_URL}/watches/gender/${gender}`)
    }catch(error)
    

}