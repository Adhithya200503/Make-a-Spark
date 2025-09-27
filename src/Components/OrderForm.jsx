import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

const OrderForm = ({ webhookUrl }) => {
  const { cart, getTotalCost, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    const orderDetails = {
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      cartItems: cart.map((item) => ({
        variety: item.variety,
        quantity: item.quantity,
        totalAmount: item.totalAmount,
      })),
      totalCost: getTotalCost(),
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        alert("Order submitted successfully!");
        clearCart(); // Clear the cart after a successful submission
        setName("");
        setEmail("");
        setPhone("");
        alert("Your has been placed , check details about the order in gmail");
        navigate("/");
      } else {
        alert("Failed to submit order. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please check your network connection.");
    }
  };

  return (
    <div className="p-4 min-h-screen bg-[#181523] text-white flex justify-center items-start">
      <div className="card  max-w-2xl w-full p-6 rounded-lg shadow-lg bg-[#181523] ">
        <h2 className="text-3xl font-bold text-center mb-6">
          Place Your Order
        </h2>
        <form onSubmit={handleSubmit} className="bg-[#181523] space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full text-black"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full text-black"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white">Phone Number</span>
            </label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="input input-bordered w-full text-black"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Your Cart Summary</h3>
            <div className="max-h-60 overflow-y-auto border border-gray-600 rounded-md p-4 bg-[#181523]">
              {cart.length > 0 ? (
                <ul className="space-y-2">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-gray-300"
                    >
                      <span>
                        {item.variety} ({item.quantity})
                      </span>
                      <span>₹{item.totalAmount.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </div>
          </div>

          <div className="mt-4 text-right font-bold text-2xl">
            Total: ₹{getTotalCost().toFixed(2)}
          </div>

          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
