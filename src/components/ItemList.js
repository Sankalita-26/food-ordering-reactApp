import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const Itemlist =({items})=>{
    const dispatch=useDispatch();
    
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }




    return (<div>
         {items.map(item=>(<div key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 text-left">
             
                <div className="py-2  font-bold flex justify-between">
                    <span className="font-semibold">{item.card.info.name} </span>
                 <span className="font-medium">   ₹ {item.card.info.price/100}</span>
                 
                </div>
                <div className="flex justify-between">
                    
                    <p className="text-xs">{item.card.info.description}</p>
                    <button className="p-2 bg-slate-50 shadow-lg rounded-2xl" onClick={()=>handleAddItem(item)}>Add +</button> 
                
                </div>

                
                

            </div>))}
    </div>);
           


};
export default Itemlist;