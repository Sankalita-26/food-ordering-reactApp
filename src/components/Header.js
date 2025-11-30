import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header=()=>{

  const [BtnNameReact,setBtnNameReact]=useState("Login");
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>

      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
          <li>Cart</li>
          <button 
          className="login_btn"
          onClick={()=>{
            BtnNameReact==="Login" 
            ? setBtnNameReact("Logout"):
            setBtnNameReact("Login");
          }}>{BtnNameReact}</button>

        </ul>

      </div>

    </div>

  );
};

export default Header;