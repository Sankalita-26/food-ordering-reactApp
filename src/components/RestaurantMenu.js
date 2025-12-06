 import useRestaurantMenu from "../utils/useRestaurantMenu.";
  import Shimmer from "./Shimmer";
  import { useParams } from "react-router-dom";
  

  const RestaurantMenu = () => {
    
    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    if (resInfo===null ) return (<Shimmer/>)
    const {name,cuisines,costForTwo}=resInfo?.cards[2]?.card?.card?.info;


  const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card
    ?.itemCards || [];

console.log(itemCards); // you will finally see an array 🎉

  

    return (
      <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{costForTwo}</h4>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {" Rs "}{ item.card.info.price}</li>
        ))}
        </ul>
      </div>
    )
  };

  export default RestaurantMenu;


