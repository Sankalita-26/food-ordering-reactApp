import RestaurantCard from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Restaurant_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [CopyListOfRes, setCopyListOfRes] = useState([]);
const {loggedIUser}=useContext(UserContext);


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
    return (
      <h1 className="text-center text-2xl text-red-600 mt-10 font-semibold">
        ❌ You are offline — please check your internet connection
      </h1>
    );

    const {setUserName}=useContext(UserContext);

  return CopyListOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 sm:px-10 mt-6">

      {/* Search + Filter */}
      <div className="flex flex-wrap justify-center gap-4">

        <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
          <input
            type="text"
            className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants..."
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
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

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-sm"
          onClick={() => {
            const filteredList = ListOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setCopyListOfRes(filteredList);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
        

        
      </div>
      <div className="m-4 p-4 flex item-center">
        <label className="text-l py-2 m-2">Username: </label>
        <input className="border p-1 m-2"
            value={loggedIUser}
            onChange={(e)=>setUserName(e.target.value)}/>
            
            </div>
      {/* Restaurant Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
        {CopyListOfRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="w-full flex justify-center">

              

            

           <RestaurantCard resData={restaurant} /> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
