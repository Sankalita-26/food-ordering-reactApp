
import Itemlist from "./ItemList";

const RestaurantCategory = ({data,showItem,setShowIndex})=>{
const handleClick=()=>{
    setShowIndex();

} 

    return <div>
        <div className="w-full m-auto bg-slate-200 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>{showItem ? "⬆️" : "⬇️"}</span>
                 </div>
                 {showItem && <Itemlist items={data.itemCards}/>}

                


        </div>
    </div>

}
export default RestaurantCategory;