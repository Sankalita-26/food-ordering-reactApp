// import { useDispatch, useSelector } from "react-redux";
// import Itemlist from "./ItemList";
// import {clearCart} from "../utils/cartSlice"

// const Cart=()=>{

//     const cartItems=useSelector((store)=>store.cart.item);
//     const dispatch=useDispatch()
//     const handleClearCart=()=>{
//         dispatch(clearCart());
//     };

//     return(
//         <div className="text-center m-4 p-4">
//             <h1 className="text-2xl font-bold">Cart</h1>
//             <div className="w-6/12 m-auto">
//             <button className="bg-black text-white m-4 p-2 rounded-lg" onClick={handleClearCart} >Clear Cart</button>
//             <Itemlist items={cartItems}/>

//             </div>
//         </div>

//     )

// }

//export default Cart;


import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">
            🛒 Your Cart
          </h1>

          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium
                       hover:bg-red-600 active:scale-95 transition"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        <div className="mt-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Your cart is empty 🍽️
            </p>
          ) : (
            <Itemlist items={cartItems} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;


