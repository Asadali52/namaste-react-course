const RestaurentCard = ({ imgSrc, resName, cuisine, rating, deliveryTime, cost }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
      <img className="rounded-t-lg h-[160px] w-full object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imgSrc}`} alt={"img"} />
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
      </div>
    </div>
  );
};

export default RestaurentCard;