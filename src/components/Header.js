import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  // useEffect(() => {
  //   console.log("useeffect caleld");
  // }, [btnNameReact]);

  return (
    <div className="flex justify-between items-center border-b px-7 py-5 sticky top-0 z-10 bg-white">
      <Link to="/">
        <div>Logo</div>
      </Link>
      <ul className="flex gap-8 items-center text-sm">
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
        <li className="cursor-pointer duration-100 hover:text-red-500">Cart</li>
        <li>
          <button
            className="border rounded-sm whitespace-nowrap cursor-pointer px-5 py-1.5 hover:bg-gray-200"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              console.log("btn clicked")
            }}
          >
            {btnNameReact}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;