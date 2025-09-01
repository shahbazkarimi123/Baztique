import { useState } from "react";
import {Menu , X} from "lucide-react";
function NaviBar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="fixed top-0 w-full
      bg-gray-700 h-20 flex items-center justify-between z-50
        "
    >
      <div>
        <h1 className="text-gray-300 font-bold text-4xl pl-6 hover:cursor-pointer">
          <a href="#">Baztique</a>
        </h1>
      </div>
      <div className="hidden sm:flex items-center pr-6 space-x-5">
            <a href="#" className="text-gray-300 hover:text-white cursor-pointer text:lg sm:text-2xl">Men</a>
            <a href="#" className="text-gray-300 hover:text-white cursor-pointer text:lg sm:text-2xl">Women</a>
            <a href="#" className="text-gray-300 hover:text-white cursor-pointer text:lg sm:text-2xl">Couple</a>
      </div>  
      <button className="sm:hidden text-gray-300" onClick={()=>setOpen(true)}><Menu size={28}/></button>
      {open && (

      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={()=>setOpen(false)}></div>
      )}
      
    </div>
  );
}
export default NaviBar;
