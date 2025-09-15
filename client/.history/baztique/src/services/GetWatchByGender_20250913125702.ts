const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_USER=import.meta.env.VITE_API_USER;
const API_PASS = import.meta.env.API_PASS;
import axios from "axios";
import type { Watch } from "../components/models/Watch";

export const getWatchesByGender = async (gender: string): Promise<Watch[]> => {
  try {
    const response = await axios.get<Watch[]>(`${API_BASE_URL}/watches/gender/${gender}`,{
      

        auth:{
          username:API_USER,
          password:API_PASS
        }
      });
    return response.data;
  } catch (error) {
    console.error(`${gender} does not exist`, error);
    return [];
  }
};