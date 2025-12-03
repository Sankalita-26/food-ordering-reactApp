import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [CopyListOfRes, setCopyListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
  const data = await fetch(
    "https://corsproxy.io/https://namastedev.com/api/v1/listRestaurants?lat=17.385044&lng=78.486671"
  );
  const json = await data.json();

  const cards = json?.data?.data?.cards || [];

  let list = [];

  // loop through cards and find one that has restaurants
  cards.forEach((card) => {
    const restaurants =
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (restaurants) list = restaurants;
  });

  setListOfRes(list);
  setCopyListOfRes(list);
};




  
  return CopyListOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setCopyListOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="Res-container">
        {CopyListOfRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
