import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import {clearCart} from "../utils/cartSlice"

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.item);
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart());
    };

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="bg-black text-white m-4 p-2 rounded-lg" onClick={handleClearCart} >Clear Cart</button>
            <Itemlist items={cartItems}/>

            </div>
        </div>

    )

}

export default Cart;