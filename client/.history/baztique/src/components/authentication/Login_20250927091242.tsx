import "./login.css";
import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import LoginWatchUser from "../../services/authentication/LoginWatchUser";

function LoginUser() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = LoginWatchUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(form.userName, form.password);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        window.dispatchEvent(new Event("storage"));
        navigate(from, { replace: true });
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        alert("Invalid User or Password");
      } else {
        console.error("Login error:", error);
        alert("Something went wrong, please try again");
      }
    }
  };

  return (
    <div className="login">
      <div className="relative min-h-[650px] flex items-center justify-center">
        <div className="h-full w-full rounded-[2.4rem] flex flex-col justify-evenly z-30">
          <div className="flex flex-col gap-7 md:gap-4 justify-center items-center">
            <h1
              className="text-center font-bold text-4xl  
              [text-shadow:_3px_3px_3px_lightgray]"
            >
              Login...
            </h1>
            <form onSubmit={handleSubmit} className="">
              <input
                type="text"
                required
                name="userName"
                placeholder="User Name"
                value={form.userName}
                onChange={handleChange}
                className="bg-gray-300 w-[95%] md:w-[50%] h-14 rounded-2xl px-2
                border-3 border-gray-200 outline-gray-200 focus:ring-0
                 shadow-gray-800 shadow-lg  font-medium"
              >
                
              </input>
              <br/>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="bg-gray-300 w-[95%] md:w-[50%] h-14 rounded-2xl px-2 placeholder-[#023e8a] 
                border-3 border-gray-200 outline-gray-200 focus:ring-0 shadow-gray-800 shadow-lg text-blue-900 font-medium"
              >

              </input>
              <br />
              <button
                type="submit"
                className=" bg-gray-300 w-[95%] md:w-[50%] py-4 rounded-2xl border-2 border-gray-200
                shadow-lg shadow-gray-800 text-blue-900 font-medium
                hover:shadow-2xl hover:bg-gray-400 cursor-pointer"
              >
                Login
              </button>
            </form>
            <Link
              to={"/watches/signup"}
              className=" bg-gray-300 w-[45%] md:w-[20%] py-3 text-center rounded-2xl border-2 border-gray-200
                shadow-gray-800 shadow-lg text-blue-900 font-medium hover:bg-gray-400"
            >
              Signup
            </Link>
          </div>

          <div></div>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
