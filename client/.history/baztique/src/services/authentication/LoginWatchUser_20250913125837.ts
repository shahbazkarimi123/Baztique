import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
const API_USER=import.meta.env.VITE_API_USER;
const API_PASS = import.meta.env.API_PASS;
function LoginWatchUser() {
  const login = async (userName: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/login-user`,
        { userName, password },
        {

          auth:{
            username:API_USER,
            password:API_PASS,
          } 
        }
        );
      return response; // return full response (status + data)
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        console.error("Invalid credentials");
        throw new Error("Invalid credentials");
      } else {
        console.error("Login error:", error);
        throw new Error("Login failed");
      }
    }
  };

  return { login };
}

export default LoginWatchUser;
