import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = resData?.info;

  return (
    <div className="rounded-xl m-4 p-4 w-full sm:w-[45%] lg:w-[260px] bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 cursor-pointer">
      
      <img
        className="rounded-xl w-full h-[170px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        onError={(e) => {
          e.target.src =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/2560px-Hyderabadi_Chicken_Biryani.jpg";
        }}
      />

      <h3 className="font-bold text-lg mt-4 text-gray-800 truncate">{name}</h3>

      <h4 className="text-gray-600 text-sm truncate">
        {cuisines?.join(", ")}
      </h4>

      <div className="flex justify-between items-center mt-3 text-sm font-medium text-gray-700">
        <span
          className={`px-2 py-1 rounded-md ${
            avgRating >= 4
              ? "bg-green-100 text-green-700"
              : avgRating >= 3
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          ⭐ {avgRating}
        </span>

        <span>{sla?.deliveryTime} mins</span>
      </div>

      <h4 className="mt-2 font-semibold text-gray-700">
        {costForTwo}
      </h4>
    </div>
  );
};

export default RestaurantCard;
