import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={`${item.card.info.id}-${index}`}   // ✅ FIXED KEY
          className="p-4 bg-white rounded-xl shadow-md border border-gray-200"
        >
          {/* Name & Price */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">
              {item.card.info.name}
            </span>
            <span className="font-medium text-gray-700">
              ₹ {item.card.info.price / 100}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 mt-1">
            {item.card.info.description}
          </p>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-3">
            <button
              className="px-4 py-1 bg-green-500 text-white rounded-lg
                         hover:bg-green-600 transition active:scale-95"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>

            <button
              className="px-4 py-1 bg-red-500 text-white rounded-lg
                         hover:bg-red-600 transition active:scale-95"
              onClick={() => handleRemoveItem(item.card.info.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
    