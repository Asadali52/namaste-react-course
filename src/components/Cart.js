import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { img_base_URl } from "../utils/mockdata";
import { removeItem, clearCart } from "../utils/store/CartSlice";

const Cart = () => {

  const cartedItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cartedItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="px-4 py-2 cursor-pointer text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-900"
          >
            Clear Cart
          </button>
        )}
      </div>

      <div className="grid gap-6">

        {cartedItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          cartedItems.map((singleItem) => (
            <div key={singleItem.card.info.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-gray-200 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
             
              <img
                src={img_base_URl + singleItem.card.info.imageId}
                alt={singleItem.card.info.name}
                className="w-full sm:w-28 h-40 sm:h-28 object-cover rounded-xl"
              />

              <div className="flex-1 text-center sm:text-left">

                <p className="font-bold text-lg line-clamp-1">{singleItem.card.info.name}</p>

                {singleItem.card.info.description ? (
                  <p className="text-gray-500 mt-1 text-sm line-clamp-3">{singleItem.card.info.description}</p>
                ) : (
                  <p className="text-gray-500 text-sm mt-1">No description</p>
                )}

                <p className="text-red-500 font-bold mt-2">₹{" "}{Number(singleItem.card.info.price / 100) || singleItem.card.info.defaultPrice / 100}</p>

              </div>

              <button
                onClick={() => handleRemoveFromCart(singleItem)}
                className="w-full sm:w-auto px-4 py-2 text-sm bg-red-500 text-white font-medium rounded-lg hover:bg-transparent hover:text-red-700 border border-red-600 cursor-pointer"
              >
                Remove
              </button>
            </div>

          ))
        )}
      </div>
    </div>
  );
};

export default Cart;