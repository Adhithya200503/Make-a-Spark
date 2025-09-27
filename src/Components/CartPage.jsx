import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
import { BsCart3 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const CartPage = () => {
  const { cart, updateQuantity, clearCart, getTotalCost } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-4 min-h-screen bg-[#181523] text-white">
      <div className="text-3xl font-bold text-center mb-8 flex gap-3 w-full justify-center items-center ">
        <span className="text-[#C29740] mt-1 ">Your Shopping Cart </span>
        <BsCart3  className="text-[#C29740] "/>
      </div>
      <div className="max-w-4xl mx-auto mb-4 flex justify-end gap-3">
        <button
          onClick={() => navigate("/")}
          className=" bg-yellow-500 text-black p-2 px-4 rounded-sm flex items-center gap-2 cursor-pointer"
        >
          <FaHome />
        </button>
      </div>
      <div className="card bg-[#181523] max-w-4xl mx-auto">
        <div className="card-body">
          {cart.length > 0 ? (
            <>
              <div className="overflow-x-auto mt-4">
                <table className="table w-full table-compact">
                  <thead>
                    <tr>
                      <th className="text-white">Item</th>
                      <th className="text-white">Quantity</th>
                      <th className="text-white">Total Cost</th>
                      <th className="text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="font-semibold">{item.variety}</td>
                        <td className="flex items-center space-x-2">
                          <button
                            className="btn btn-xs btn-outline btn-error"
                            onClick={() => updateQuantity(item.variety, -1)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn btn-xs btn-outline btn-success"
                            onClick={() => updateQuantity(item.variety, 1)}
                          >
                            +
                          </button>
                        </td>
                        <td>₹{item.totalAmount.toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-error"
                            onClick={() =>
                              updateQuantity(item.variety, -item.quantity)
                            }
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h4 className="text-xl font-bold">Grand Total:</h4>
                <p className="text-xl font-bold">
                  ₹{getTotalCost().toFixed(2)}
                </p>
              </div>
              <div className="flex gap-3.5 justify-end mt-4">
                <button className="btn btn-sm btn-warning" onClick={clearCart}>
                  Clear Cart
                </button>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => navigate("/order")}
                >
                  Proceed to Purchase
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 mt-4">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
