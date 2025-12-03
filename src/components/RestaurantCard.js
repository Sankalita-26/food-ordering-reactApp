
import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
  const {resData}=props;

  const{cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData?.info;
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="rescard-logo"
       src={CDN_URL + cloudinaryImageId} 
       alt={name}  
       onError={(e)=>
       { e.target.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/2560px-Hyderabadi_Chicken_Biryani.jpg" }} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
     </div>

  );

};

export default RestaurantCard;
