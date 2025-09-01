import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
function NaviBar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="fixed top-0 w-full
      bg-blue-950 h-16 flex items-center justify-between z-50
        "
    >
      <div>
        <h1 className="text-gray-200 font-bold text-4xl pl-6 hover:cursor-pointer">
          <Link to="/">Baztique</Link>
        </h1>
      </div>
      <div className="hidden sm:flex items-center pr-6 space-x-5">
        <a
          href="#"
          className="text-gray-300 hover:text-white cursor-pointer text-lg sm:text-2xl"
        >
          Men
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white cursor-pointer text:lg sm:text-2xl"
        >
          Women
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white cursor-pointer text:lg sm:text-2xl"
        >
          Couple
        </a>
        <a
          <Link to={`/watches/login`}
          className="text-gray-300 hover:text-white cursor-pointer text:lg sm:text-2xl"
        >
          Login 
        </a>
      </div>
      <button
        className="sm:hidden text-gray-300 pr-4"
        onClick={() => setOpen(true)}
      >
        <Menu size={28} />
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-48 sm:w-56 bg-blue-950 border-none shadow-black shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={28} className="text-gray-300" />
          </button>
        </div>
        <nav className=" flex flex-col space-y-4 px-6">
          <h1 className="text-gray-200 font-bold text-3xl">Baztique</h1>
          <a href="#" className="text-gray-300 hover:text-white text-lg">
            Men
          </a>
          <a href="#" className="text-gray-300 hover:text-white text-lg">
            Women
          </a>
          <a href="#" className="text-gray-300 hover:text-white text-lg">
            Couple
          </a>
        </nav>
      </div>
    </div>
  );
}
export default NaviBar;
