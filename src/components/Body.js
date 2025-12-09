import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Restaurant_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [CopyListOfRes, setCopyListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_API);
    const json = await data.json();

    const cards = json?.data?.data?.cards || [];
    let list = [];

    cards.forEach((card) => {
      const restaurants =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants) list = restaurants;
    });

    setListOfRes(list);
    setCopyListOfRes(list);
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return <h1 className="text-center text-xl font-semibold text-red-500 mt-10">⚠ You are offline. Check your internet.</h1>;

  return CopyListOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <div className="flex flex-wrap gap-4 justify-center items-center mb-6">

        <div className="flex gap-3 items-center bg-gray-100 p-4 rounded-xl shadow-sm">
          <input
            type="text"
            className="border border-gray-400 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none w-64"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-5 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
            onClick={() => {
              const filteredRes = ListOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setCopyListOfRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex items-center">
          <button
            className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            onClick={() => {
              const filteredList = ListOfRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setCopyListOfRes(filteredList);
            }}
          >
            Top Rated Restaurant ⭐
          </button>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 justify-items-center">
        {CopyListOfRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
