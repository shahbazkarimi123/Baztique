
export const isAuthenticated = () : boolean =>{
    return !!localStorage.getItem("token");
}

export const removeToken = ()=>{
    localStorage.removeItem("token");
    localStorage.clear();
}