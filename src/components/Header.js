import { LOGO_URL } from "../utils/constants";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";


const Header = () => {
  const status = useOnlineStatus();
  const [logBtn, setLogBtn] = useState(localStorage.getItem("username")?localStorage.getItem("username"):"Login"); 
  const [show,setShow]=useState(false);
  const cartItems=useSelector((store)=> store.cart.items);
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
          <li><Link to="/cart"><FaShoppingCart className="scale-170"/></Link><span className="text-xs pl-5 absolute text-[#f6b730]">{cartItems.length}</span></li>
          <li>
            <button className="SearchBtn" onClick={()=>{
              setShow(!show);
            }}>
              {logBtn+"🧑🏻"}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <LoginPage setLogBtn={setLogBtn} show={show} setShow={setShow}/>
    {status!=true?<div className="status">OFFLINE</div>:""}
    </div>
  );
};
export default Header;
