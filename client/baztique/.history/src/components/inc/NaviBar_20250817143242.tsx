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
      <div className="flex items-center pr-6 space-x-5">
        
          
            <a href="#" className="text-gray-300 hover:text-white cursor-pointer text:lg sm:text-2xl">Men</a>
          
        </ul>
        <ul>
          <li className="text-gray-300 hover:text-white cursor-pointer text-2xl">
            <a href="#">Women</a>
          </li>
        </ul>
        <ul>
          <li className="text-gray-300 hover:text-white cursor-pointer text-2xl">
            <a href="#">Couple</a>
          </li>
        </ul>
        <ul>
          <li className="text-gray-300 hover:text-white cursor-pointer text-2xl"></li>
        </ul>
      </div>
    </div>
  );
}
export default NaviBar;
