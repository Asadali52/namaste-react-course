import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import useOnlineStatusHook from "../utils/hooks/useOnlineStstusHook";
import useRestaurantHook from "../utils/hooks/useRestaurantHook";
import RestaurentCardSkeletonLoader from "../components/loaders/RestaurentCardSkeletonLoader";
import MyUserContext from "../utils/context/MyUserContext";

const Body = () => {

  const {
    filterSwiggyData,
    inputSearch,
    loading,
    error,
    setInputSearch,
    filterTopRated,
    resetFilters,
  } = useRestaurantHook();

  const onlineStatus = useOnlineStatusHook();
  const { loggedInUser, setUserName } = useContext(MyUserContext);

  if (onlineStatus === false) {
    return (
      <h1 className="text-center mt-10">Looks Like you are offline!! Please Check your internet connection</h1>
    );
  };

  return (
    <div className="px-7">
      <div className="py-5 flex flex-wrap gap-4 items-end">
        <div>
          <p className="text-xs mb-1">Get Above 4.5 Rating Restaurants:</p>
          <button
            onClick={filterTopRated}
            className="border rounded-sm whitespace-nowrap cursor-pointer text-sm px-5 py-2 hover:bg-gray-200"
          >
            Top Rated Restaurants
          </button>
        </div>

        <div>
          <p className="text-xs mb-1">Search by Restaurant Name:</p>
          <input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            type="search"
            placeholder="Search by restaurant name..."
            className="bg-gray-200 outline-0 px-4 py-2 w-[250px] text-sm rounded-sm"
          />
        </div>

        <div>
          <p className="text-xs mb-1">Reset All Filters:</p>
          <button
            onClick={resetFilters}
            className="border rounded-sm whitespace-nowrap cursor-pointer text-sm px-4 py-2 hover:bg-gray-200"
          >
            Reset Filters
          </button>
        </div>

        <div>
          <p className="text-xs mb-1">Modify UserName:</p>
          <input
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            type="search"
            placeholder="Modify username"
            className="bg-gray-200 outline-0 px-4 py-2 w-[250px] text-sm rounded-sm"
          />
        </div>

      </div>

      <p className="mb-6 font-bold">Restaurants ({filterSwiggyData.length})</p>

      <div className="grid grid-cols-6 max-[1200px]:grid-cols-5 max-[1100px]:grid-cols-4 max-[850px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1 gap-4">
        {loading ? (
          <RestaurentCardSkeletonLoader count={filterSwiggyData.length || 8} />
        ) : error ? (
          <p className="col-span-full text-center text-red-500 text-3xl h-[400px] leading-[400px]">
            Failed to fetch restaurants. Please try again.
          </p>
        ) : filterSwiggyData.length === 0 ? (
          <p className="col-span-full text-center text-red-500 text-2xl h-[400px] leading-[400px]">
            No Restaurant found
          </p>
        ) : (
          filterSwiggyData.map((res) => (
            <Link className="h-full block" key={res.info.id} to={`/restaurents/${res.info.id}`}>
              <RestaurentCard
                imgSrc={res.info.cloudinaryImageId}
                resName={res.info.name}
                cuisine={res.info.cuisines.join(", ")}
                rating={res.info.avgRating}
                deliveryTime={res.info.sla.deliveryTime}
                cost={res.info.costForTwo}
                promoted={res.info.avgRating >= 4.5}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;