import { useState } from "react";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between items-center border-b px-7 py-5 sticky top-0 z-10 bg-white">
      <div>Logo</div>
      <ul className="flex gap-8 items-center text-sm">
        <li className="cursor-pointer duration-100 hover:text-red-500">Home</li>
        <li className="cursor-pointer duration-100 hover:text-red-500">About Us</li>
        <li className="cursor-pointer duration-100 hover:text-red-500">Contact Us</li>
        <li className="cursor-pointer duration-100 hover:text-red-500">Cart</li>
        <li>
          <button
            className="border rounded-sm whitespace-nowrap cursor-pointer px-5 py-1.5 hover:bg-gray-200"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
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