import React, { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import { restaurantList } from "../utils/mockdata";
import RestaurentCardSkeletonLoader from "./RestaurentCardSkeletonLoader";


const Body = () => {

  const [swiggyData, setSwiggyData] = useState([]);
  const [filterSwiggyData, setFilterSwiggyData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setSwiggyData(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setFilterSwiggyData(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    } catch (err) {
      console.error("Error fetching data", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  const topRatedRes = () => {
    const filtered = swiggyData.filter((res) => Number(res.info.avgRating) >= 4.5);
    setFilterSwiggyData(filtered);
  };


  useEffect(() => {
    const filtered = swiggyData.filter((res) => res.info.name.toLowerCase().includes(inputSearch.toLowerCase()));
    setFilterSwiggyData(filtered);
  }, [inputSearch, swiggyData]);


  const resetFilters = () => {
    setFilterSwiggyData(swiggyData);
    setInputSearch("");
  }

  return (
    <div className="px-7">
      <div className="py-5 flex gap-4 items-center">
        <button
          onClick={topRatedRes}
          className="border rounded-sm whitespace-nowrap cursor-pointer text-sm px-4 py-2 hover:bg-gray-200"
        >
          Top Rated Restaurants
        </button>

        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          type="search"
          placeholder="search..."
          className="bg-gray-200 outline-0 px-4 py-2 w-[250px] text-sm rounded-sm"
        />

        <button
          onClick={resetFilters}
          className="border rounded-sm whitespace-nowrap cursor-pointer text-sm px-4 py-2 hover:bg-gray-200"
        >
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-6 max-[1200px]:grid-cols-5 max-[1100px]:grid-cols-4 max-[850px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1 gap-4">
        {loading ? (
          <RestaurentCardSkeletonLoader count={filterSwiggyData.length || 9} />
        ) : error ? (
          <p className="col-span-full text-center text-red-500 text-sm h-[400px] leading-[400px]">
            Failed to fetch restaurants. Please try again.
          </p>
        ) : filterSwiggyData.length === 0 ? (
          <p className="col-span-full text-center text-red-500 text-sm h-[400px] leading-[400px]">
            No Restaurant found
          </p>
        ) : (
          filterSwiggyData.map((res) => (
            <RestaurentCard
              key={res.info.id}
              imgSrc={res.info.cloudinaryImageId}
              resName={res.info.name}
              cuisine={res.info.cuisines.join(", ")}
              rating={res.info.avgRating}
              deliveryTime={res.info.sla.deliveryTime}
              cost={res.info.costForTwo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;