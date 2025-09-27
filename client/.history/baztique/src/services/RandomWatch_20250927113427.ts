const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_USER=import.meta.env.VITE_API_USER;
const API_PASS = import.meta.env.VITE_API_PASS;

import axios from 'axios';




import type { Watch } from "../components/models/Watch";
export const getRandomWatch= async (range:number): Promise<Watch[] | any> => {
    try{
        const response = await axios.get<Watch>(`${API_BASE_URL}/watches/watches/random/${range}`,{
            auth:{
                username:API_USER,
                password:API_PASS
            }
        });
        console.log(response)
        return response.data;
    }catch(error){
        console.log(error);
    }
}