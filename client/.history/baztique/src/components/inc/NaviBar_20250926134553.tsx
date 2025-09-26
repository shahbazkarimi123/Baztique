import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, removeToken } from "../../utils/auth";

function NaviBar() {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(isAuthenticated());
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setAuth(isAuthenticated());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  function signout(){
    removeToken();
    setAuth(false);
    navigate("/");
  }
  return (
    <div
      className="fixed top-0 w-full
      bg-[#845ec2] h-16 flex items-center justify-between z-50
        "
    >
      <div>
        <h1 className="text-white font-bold text-4xl pl-6 hover:cursor-pointer">
          <Link to="/">Baztique</Link>
        </h1>
      </div>
      <div className="hidden sm:flex items-center pr-6 space-x-5">
        <Link
          to="/male-watches"
          className="text-white hover:text-gray-200 cursor-pointer text-[18px] font-medium"
        >
          Men
        </Link>
        <Link
          to={"/female-watches"}
          className="text-white hover:text-gray-200 cursor-pointer text-[18px] font-medium"
        >
          Women
        </Link>
        {auth&& (<Link
          to={"/watches/upload/new-watch"}
          className="text-white hover:text-gray-200 cursor-pointer text-[18px] font-medium"
        >
          Upload
        </Link>)
        }
        
        {
          auth ? (<div onClick={signout} className="text-white hover:text-gray-200 cursor-pointer text-[18px]">logout</div>) : (<Link
          className="text-white hover:text-gray-200 cursor-pointer text-[18px]"
          to={`/watches/login`}
        >
          Login1
        </Link>)
        }
        
      </div>
      
      <button
        className="sm:hidden text-gray-300 pl-0 mx-0 pr-5"
        onClick={() => setOpen(true)}
      >
        <Menu size={28} className="text-white"/>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-48 sm:w-56 bg-[#845ec2] border-none shadow-black shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>
        <nav className=" flex flex-col space-y-4 px-6">
          <h1 className="text-white font-bold text-3xl">Baztique</h1>
          <Link
            to={"/male-watches"}
            className="text-white text-lg"
          >
            Men
          </Link>
          <Link
            to={"/female-watches"}
            className="text-white  text-lg"
          >
            Women
          </Link>
          {auth&& (<Link
          to={"/watches/upload/new-watch"}
          className="text-white hover:text-gray-200 cursor-pointer text-[18px] font-medium"
        >
          Upload
        </Link>)
        }
          {
          auth ? (<div onClick={signout} className="text-white  cursor-pointer text-[18px]">logout</div>) : (<Link
          className="text-white  cursor-pointer text-[18px]"
          to={`/watches/login`}
        >
          Login
        </Link>)
        }
        </nav>
      </div>
    </div>
  );
}
export default NaviBar;
