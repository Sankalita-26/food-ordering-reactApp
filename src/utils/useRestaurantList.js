import { useState } from "react";
import { Restaurant_API } from "./constant";

const useRestaurantList=()=>{

    const[RestaurantList,setRestaurantList]=useState();

    const fetchdata= async ()=>{
        
    const data=await fetch (Restaurant_API);
    const json= await data.json();

    setRestaurantList(json.data);
    }



    return RestaurantList;
}

export default useRestaurantList;