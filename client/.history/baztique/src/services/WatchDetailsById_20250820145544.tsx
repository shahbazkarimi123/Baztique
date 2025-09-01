import axios from "axios";

const API_BASE_URL = "http://localhost:8000/baztique";

export const getWatchById= async (id:number)=>{
    try{
        const data = axios.get(`${API_BASE_URL}/watches/${id}`)
    }
}