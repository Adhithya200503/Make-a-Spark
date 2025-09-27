import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotalCost } = useCart();
  const navigate = useNavigate();
  console.log(cart)

  return (
    <div className="p-4 min-h-screen bg-[#181523] text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart 🛒</h1>
      <div className="card bg-[#181523] max-w-4xl mx-auto">
        <div className="card-body">
          {cart.length > 0 ? (
            <>
              <div className="overflow-x-auto mt-4">
                <table className="table w-full table-compact">
                  <thead>
                    <tr>
                      <th className='text-white'>Item</th>
                      <th className='text-white'>Quantity</th>
                      <th className='text-white'>Total Cost</th>
                      <th className='text-white'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="font-semibold">{item.variety}</td>
                        <td>{item.quantity}</td>
                        <td>₹{item.totalAmount.toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-error"
                            onClick={() => removeFromCart(item.variety)}
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
                <p className="text-xl font-bold">₹{getTotalCost().toFixed(2)}</p>
              </div>
              <div className="flex gap-3.5 justify-end mt-4">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={()=>navigate("/order")}
                >
                  Proceed to Purchase
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;