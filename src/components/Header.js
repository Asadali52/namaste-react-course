import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatusHook from "../utils/useOnlineStstusHook";
import MyUserContext from "../utils/MyUserContext";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatusHook();

  const { loggedInUser } = useContext(MyUserContext);

  return (
    <div className="flex gap-5 justify-between items-center border-b md:px-7 px-4 py-4 sticky top-0 z-10 bg-black text-white">
      <Link to="/" className="shrink-0">
        <img height={40} width={40} className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk50Ut-wJKwbca3BTPssDUl_fqnsEE_D2tcw&s" />
      </Link>
      <ul className="flex gap-8 items-center text-sm whitespace-nowrap overflow-scroll">
        <li className="cursor-pointer duration-100 hover:text-red-500">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="cursor-pointer duration-100 hover:text-red-500">
          <Link to="/about">
            About Us
          </Link>
        </li>
        <li className="cursor-pointer duration-100 hover:text-red-500">
          <Link to="/contact">
            Contact Us
          </Link>
        </li>
        <li className="cursor-pointer duration-100 hover:text-red-500">
          <Link to="/grocery">
            Grocery
          </Link>
        </li>
        <li className="cursor-pointer duration-100 hover:text-red-500">Cart</li>
        <li className="cursor-pointer font-bold duration-100 hover:text-purple-600 text-red-500">Welcome, {loggedInUser}</li>
      </ul>

      <div className="flex items-center gap-4">
        <p className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${onlineStatus ? "bg-green-500" : "bg-red-500"}`} />
          <span className="text-sm">{onlineStatus ? "Online" : "Offline"}</span>
        </p>
        <button className="border rounded-sm whitespace-nowrap cursor-pointer px-5 py-1.5 hover:bg-gray-200 hover:text-black"
          onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            console.log("btn clicked")
          }}>
          {btnNameReact}
        </button>
      </div>

    </div>
  );
};

export default Header;