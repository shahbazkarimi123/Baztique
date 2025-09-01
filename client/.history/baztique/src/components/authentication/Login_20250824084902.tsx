import "./login.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginWatchUser from "../../services/authentication/LoginWatchUser";

function LoginUser() {
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
        navigate("/");
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
      <div className="">
        <div className="relative min-h-[700px] flex items-center justify-center bg-gray-100">
          <div className="absolute bg-[#46e9e9] w-[100%] h-[100%] m-auto hover:bg-[#caf0f0]"></div>
          <div className="absolute inset-0 rounded-full bg-[#9ce6f5] w-[90%] h-[90%] m-auto hover:bg-[#caf0f0]"></div>
          <div className="absolute inset-0 rounded-full bg-[#90e0ef] w-[80%] h-[80%] m-auto hover:bg-[#caf0f0]"></div>
          <div className="absolute inset-0 rounded-full bg-[#48cae4] w-[70%] h-[70%] m-auto hover:bg-[#caf0f0]"></div>
          <div className="absolute inset-0 rounded-full bg-[#00b4d8] w-[60%] h-[60%] m-auto z-20 hover:bg-[#caf0f0]">
            <div className="bg-[#03045e]/20 h-full w-full rounded-[2.4rem] flex flex-col justify-evenly z-30">
              <div>
                <h1
                  className="text-center font-bold text-4xl text-[#03045e] 
              [text-shadow:_3px_3px_3px_lightgray]"
                >
                  Login...
                </h1>
              </div>

              <div className="">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-7 md:gap-4 justify-center items-center"
                >
                  <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    value={form.userName}
                    onChange={handleChange}
                    className="bg-gray-300 w-[95%] md:w-[50%] h-14 rounded-2xl px-2 placeholder-[#023e8a] 
                border-3 border-gray-200 outline-gray-200 focus:ring-0 shadow-gray-800 shadow-lg text-blue-900 font-medium"
                  ></input>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="bg-gray-300 w-[95%] md:w-[50%] h-14 rounded-2xl px-2 placeholder-[#023e8a] 
                border-3 border-gray-200 outline-gray-200 focus:ring-0 shadow-gray-800 shadow-lg text-blue-900 font-medium"
                  ></input>
                  <button
                    type="submit"
                    className=" bg-gray-300 w-[95%] md:w-[50%] py-4 rounded-2xl border-2 border-gray-200
                shadow-lg shadow-gray-800 text-blue-900 font-medium
                hover:shadow-2xl hover:bg-gray-400 cursor-pointer"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="flex justify-center">
                <Link
                  to={"/watches/signup"}
                  className=" bg-gray-300 w-[45%] md:w-[20%] py-3 text-center rounded-2xl border-2 border-gray-200
                shadow-gray-800 shadow-lg text-blue-900 font-medium hover:bg-gray-400"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-[#0096c7] w-[50%] h-[50%] m-auto"></div>
          {/* <div className="absolute inset-0 rounded-full bg-[#] w-[40%] h-[40%] m-auto">
            
        </div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[30%] h-[30%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[20%] h-[20%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[10%] h-[10%] m-auto"></div> */}
        </div>
      </div>
    );
  };

export default LoginUser;
