import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState();

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // const itemCards =
  //   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
  //     ?.card?.itemCards || [];

      console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
      const categories=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
      // console.log(categories);

      

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-white shadow-xl rounded-xl mt-6 sm:mt-10 space-y-7">

      {/* Restaurant Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center drop-shadow-sm">
        {name}
      </h1>

      {/* Cuisines */}
      <h3 className="text-xl text-gray-600 text-center">
        🍽 {cuisines?.join(", ") || "Cuisines not available"}
      </h3>

      {/* Cost for two */}
      <h4 className="text-lg font-semibold text-green-700 text-center">
        💰 {costForTwo}
      </h4>

      {/* Menu Header */}
      <h2 className="text-3xl font-bold text-gray-800 text-center pt-4 underline">
        📜 Menu
      </h2>

      
      {categories.map((category,index)=>(<RestaurantCategory key={category?.card?.card?.title}data={category?.card?.card}
      showItem={index==showIndex ? true :false}
      setShowIndex={()=>setShowIndex(index === showIndex ? null : index)}
      />
      
    
    ))}
      




    </div>
  );
};

export default RestaurantMenu;
