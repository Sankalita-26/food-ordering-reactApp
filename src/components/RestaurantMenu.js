import useRestaurantMenu from "../utils/useRestaurantMenu.";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

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

      {/* Items List */}
      <ul className="space-y-4 mt-6">
        {itemCards.map((item) => (
          <li
            key={item.card.info.id}
            className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow-sm transition"
          >
            <span className="font-semibold text-gray-800 text-lg">
              {item.card.info.name}
            </span>
            <span className="font-bold text-green-600">
              ₹ {(item.card.info.price ?? item.card.info.defaultPrice) / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
