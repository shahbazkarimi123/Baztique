const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import type {Watch} from '../../'
export const getWatchesByGender =  async (gender:string)=>{
    const response = axios.get<Watch[]>(`${API_BASE_URL}/watches/gender/${gender}`)

}