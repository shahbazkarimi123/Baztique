import axios from "axios";
import type { WatchUser } from "../../components/models/WatchUser";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_USER=import.meta.env.API_USER;
const API_PASS = import.meta.env.API_PASS;

function SignupUser() {
  const signup = async (user: WatchUser) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/signup`,
        {
          email: user.email,
          userName: user.userName,
          password: user.password,
          phoneNumber: user.phoneNumber,
          firstName: user.firstName,
          lastName: user.lastName,
          officeAddress: user.officeAddress,
          homeAddress: user.homeAddress,
        },
        {
          auth: {
            username: API_USER,
            password: API_PASS,
          },
        }
      );
      if(response.status==200){
        return response.status;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {signup};
}

export default SignupUser;
