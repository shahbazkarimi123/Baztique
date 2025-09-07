import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // double check your env var name

function LoginWatchUser() {
  const login = async (userName: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/login-user`,
        auth :{},
        {
        userName,
        password,
      });
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
