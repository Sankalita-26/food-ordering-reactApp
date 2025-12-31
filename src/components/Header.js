import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const OnlineStatus = useOnlineStatus();
  const [BtnNameReact, setBtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {loggedIUser}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.item);

  

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-4 sm:px-8 py-4 sticky top-0 z-50">

      
      

      {/* Logo */}
      <img
        className="w-24 sm:w-36 cursor-pointer hover:scale-105 transition"
        src={LOGO_URL}
        alt="logo"
      />
      <h1 className="text-2xl font-extrabold animate-pulse text-amber-800">{loggedIUser} welcome to FoodieHut</h1>



      {/* Desktop Menu */}
      
      <ul className="hidden md:flex gap-6 items-center text-lg font-medium">
        <li>Online: {OnlineStatus ? "🟢" : "🔴"}</li>
        <li><Link className="hover:text-blue-600 transition" to="/">Home</Link></li>
        <li><Link className="hover:text-blue-600 transition" to="/about">About</Link></li>
        <li><Link className="hover:text-blue-600 transition" to="/contact">Contact</Link></li>
        <li><Link className="hover:text-blue-600 transition" to="/grocery">Grocery</Link></li>
        <li><Link className="hover:text-blue-600 transition" to="/Cart">Cart 🛒 ({cartItems.length})</Link></li>
        
      </ul>

      {/* Login / Logout button */}
      <button
        className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition shadow-sm"
        onClick={() =>
          BtnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login")
        }
      >
        {BtnNameReact}
      </button>
      

      {/* Hamburger (Mobile) */}
      
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>
      
      <Link className="hover:text-blue-600 transition md:hidden text-l" to="/Cart">Cart 🛒 ({cartItems.length})</Link>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 text-lg font-medium md:hidden">
          <span>Online: {OnlineStatus ? "🟢" : "🔴"}</span>
          <Link onClick={() => setIsMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about">About</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact">Contact</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/grocery">Grocery</Link>
          

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition shadow-sm"
            onClick={() => {
              BtnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {BtnNameReact}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
