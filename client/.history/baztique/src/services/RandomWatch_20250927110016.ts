const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from 'axios';
import type {Watch} from '../'
export const RandomWatch= async (range:number)=>{
    try{
        const response = await axios.get<Watch>(`${API_BASE_URL}/watches/${range}`)
    }catch(error){
        console.log(error);
    }
}