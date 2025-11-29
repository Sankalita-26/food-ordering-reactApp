import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

  const [ListOfRes,setListOfRes]=useState([]);
  const [searchText,setSearchText]=useState("");
  const [CopyListOfRes,setCopyListOfRes]=useState([]);


  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5790417&lng=88.3716054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    console.log(json);
  const restaurants =
  json?.data?.cards
    ?.find(
      (cardItem) =>
        cardItem?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

setListOfRes(restaurants || []);
setCopyListOfRes(restaurants || []);

  };

  return ListOfRes.length === 0 ? (<Shimmer />) :
  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button 
          onClick={()=>{

            const filteredRes=ListOfRes.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            );

   setCopyListOfRes(filteredRes);
            

          }}>Search
            </button>
        </div>
     
      <div>
      <button className="filter-btn"
      onClick={()=>{

        const filteredList=ListOfRes.filter(
          (res) =>res.info.avgRating>4.5
        );
        setCopyListOfRes(filteredList);

      }}>Top Rated Restaurant</button></div>
      </div>



      <div className="Res-container">
        {
          CopyListOfRes.map((restaurant) =>(
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
        }
        
        
      </div>
    </div>
  );
};



export default Body;