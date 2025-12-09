import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const OnlineStatus = useOnlineStatus();
  const [BtnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-8 py-4 sticky top-0 z-50">

      <div className="logo-container">
        <img className="w-36 cursor-pointer hover:scale-105 transition" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex gap-6 items-center text-lg font-medium">

          <li className="flex items-center px-2">
            Online: <span className="ml-2">{OnlineStatus ? "🟢" : "🔴"}</span>
          </li>

          <li className="px-2 hover:text-blue-600 transition"><Link to="/">Home</Link></li>
          <li className="px-2 hover:text-blue-600 transition"><Link to="/about">About</Link></li>
          <li className="px-2 hover:text-blue-600 transition"><Link to="/contact">Contact</Link></li>
          <li className="px-2 hover:text-blue-600 transition"><Link to="/grocery">Grocery</Link></li>
          <li className="px-2 hover:text-blue-600 transition">Cart 🛒</li>

          <button
            className="ml-4 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition shadow-sm"
            onClick={() => {
              BtnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {BtnNameReact}
          </button>

        </ul>
      </div>

    </div>
  );
};

export default Header;
