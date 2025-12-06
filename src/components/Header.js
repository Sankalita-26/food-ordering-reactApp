import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

  const OnlineStatus=useOnlineStatus();

  const [BtnNameReact,setBtnNameReact]=useState("Login");
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>

      </div>

      <div className="nav-items">
        <ul>
          <li>Online status:{OnlineStatus?" 🟢":" 🔴"}</li>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          
          <li><Link to ="/grocery">Grocery</Link></li>
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