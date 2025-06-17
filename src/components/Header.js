import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
  const [logBtn, setLogBtn] = useState("Login");
  return (
    <div>
    <div className="header shadow-xl shadow-[#7d7d7d35] relative">
      <div className="logo-container">
        <div><Link to="/"><img id="logo" src={LOGO_URL} alt="logo" /></Link></div>
        <div className="logo-name pb-5"><Link className="List" to="/">YUMMY</Link></div>
      </div>
      <div className="nav-item">
        <ul id="ul-items">
          <li><Link className="List" to="/">Home</Link></li>
          <li><Link className="List" to="/about">About Us</Link></li>
          <li><Link className="List" to="/contact">Contact Us</Link></li>
          <li><Link className="List" to="/cart">Cart</Link></li>
          <li>
            <button className="SearchBtn" onClick={()=>{
              logBtn=="Login"?setLogBtn("Logout"):setLogBtn("Login");
            }}>
              {logBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
    {status!=true?<div className="status">OFFLINE</div>:""}
    </div>
  );
};
export default Header;
