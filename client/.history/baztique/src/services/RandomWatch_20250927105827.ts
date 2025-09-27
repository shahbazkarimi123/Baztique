const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from 'axios';

export const RandomWatch= async ()=>{
    try{
        const response = await axios.get<Watch>(`A`)
    }catch(error){
        console.log(error);
    }
}