import { useState, useEffect } from "react";
import { RESTAURANT_API_URL } from "./mockdata";

const useRestaurantHook = () => {
  const [swiggyData, setSwiggyData] = useState([]);
  const [filterSwiggyData, setFilterSwiggyData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const extractRestaurants = (json) => {
    const cards = json?.data?.cards || [];
    for (let i = 0; i < cards.length; i++) {
      const restaurants = cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (Array.isArray(restaurants)) {
        return restaurants;
      }
    }
    return [];
  };


  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const data = await fetch(RESTAURANT_API_URL);
      const json = await data.json();
      
      console.log("🚀 ~ fetchData ~ json:", json)
      const restaurants = extractRestaurants(json);

      setSwiggyData(restaurants);
      setFilterSwiggyData(restaurants);

    } catch (err) {
      console.error("Error fetching data", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = swiggyData.filter((res) =>
      res.info.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setFilterSwiggyData(filtered);
  }, [inputSearch, swiggyData]);

  const filterTopRated = () => {
    const filtered = swiggyData.filter((res) => Number(res.info.avgRating) >= 4.5);
    setFilterSwiggyData(filtered);
  };

  const resetFilters = () => {
    setFilterSwiggyData(swiggyData);
    setInputSearch("");
  };

  return {
    filterSwiggyData,
    inputSearch,
    loading,
    error,
    setInputSearch,
    filterTopRated,
    resetFilters,
  };
};

export default useRestaurantHook;