  import { useEffect, useState } from "react";
  import Shimmer from "./Shimmer";
  import { useParams } from "react-router-dom";
  import { Menu_API } from "../utils/constant";

  const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId}=useParams();

    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchMenu = async () => {
      const data = await fetch(Menu_API+resId);

      const json = await data.json();
      // console.log(json); // for debugging
      setResInfo(json.data)
      console.log(json.data); // for data fetching and debuggings
    };
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


