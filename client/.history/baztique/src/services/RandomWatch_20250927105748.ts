const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const RandomWatch= async ()=>{
    try{
        const response = await axios.get<Watch>()
    }catch(error){
        console.log
    }
}