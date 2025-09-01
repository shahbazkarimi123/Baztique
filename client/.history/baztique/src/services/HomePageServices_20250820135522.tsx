import axios from "axios";

const API_BASE_URL = "http://localhost:8080/baztique";

export const getAllWatches = async ()=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/watches,);
    }
}