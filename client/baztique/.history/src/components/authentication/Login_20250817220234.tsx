import "./login.css";
function LoginUser() {
  return (
    <div className="main-content">
      <div className="relative w-screen h-screen bg-gray-100">
        <div className="absolute inset-0 bg-[#caf0f8] w-[100%] h-[100%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#ade8f4] w-[90%] h-[90%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#90e0ef] w-[80%] h-[80%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#48cae4] w-[70%] h-[70%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#00b4d8] w-[60%] h-[60%] m-auto z-20">
            <div className="bg-[#03045e]/20 h-full w-full rounded-2xl flex flex-col justify-start z-30">


            <h1 className=" pt-[10%] text-center">Login</h1>
            <div className="flex flex-col gap-5 pt-20">
            <input type="text" placeholder="User Name" className="bg-[#023e8a] w-full h-8 rounded-2xl px-2 placeholder-[#ade8f4] border-none outline-none focus:ring-0"></input>
            <input type="text" placeholder="User Name" className="bg-[#023e8a] w-full h-8 rounded-2xl px-2 placeholder-[#ade8f4] border-none outline-none focus:ring-0"></input>

            </div>
            <div className="flex justify-evenly">

            <button>Login</button>
            <h3>Signup</h3>
            </div>
            </div>
        </div>
        <div className="absolute inset-0 rounded-full bg-[#0096c7] w-[50%] h-[50%] m-auto">
            
        </div>
        {/* <div className="absolute inset-0 rounded-full bg-[#] w-[40%] h-[40%] m-auto">
            
        </div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[30%] h-[30%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[20%] h-[20%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[10%] h-[10%] m-auto"></div> */}
      </div>
    </div>
  );
}

export default LoginUser;
