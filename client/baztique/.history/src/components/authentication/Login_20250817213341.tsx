import "./login.css";
function LoginUser() {
  return (
    <div className="main-content">
      <div className="relative w-screen h-screen bg-gray-100">
        <div className="absolute inset-0 bg-[#caf0f8] w-[100%] h-[100%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#ade8f4] w-[90%] h-[90%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#90e0ef] w-[80%] h-[80%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#48cae4] w-[70%] h-[70%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#00b4d8] w-[60%] h-[60%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#0096c7] w-[50%] h-[50%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[40%] h-[40%] m-auto">
            <div className="">


            <h1>Login</h1>
            <input type="text"/>
            </div>
        </div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[30%] h-[30%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[20%] h-[20%] m-auto"></div>
        <div className="absolute inset-0 rounded-full bg-[#] w-[10%] h-[10%] m-auto"></div>
      </div>
    </div>
  );
}

export default LoginUser;
