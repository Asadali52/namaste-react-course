import React, { useContext } from "react";
import { img_base_URl } from "../utils/mockdata";
import MyUserContext from "../utils/context/MyUserContext";

const RestaurentCard = ({ imgSrc, resName, cuisine, rating, deliveryTime, cost, promoted }) => {

  const data = useContext(MyUserContext);

  return (
    <div className="bg-white relative rounded-lg h-full shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
      <img className="rounded-t-lg h-[160px] w-full object-cover" src={img_base_URl + imgSrc} alt={"img"} />
      {promoted &&
        <p className="absolute top-1 right-1 bg-red-600 text-white text-[11px] rounded-full py-1 px-3">Promoted</p>
      }
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-gray-800 truncate">{resName}</h3>
        <p className="text-sm text-gray-500">{cuisine}</p>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
            ⭐ {rating}
          </span>
          <span>{deliveryTime} min</span>
        </div>
        <p className="text-red-600 font-medium">{cost}</p>
        <p className="text-sm">User: <span className="text-green-800">{data.loggedInUser}</span> </p>
      </div>
    </div>
  );
};

export default RestaurentCard;