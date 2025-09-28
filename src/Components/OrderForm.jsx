import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
import { IoArrowBackSharp } from "react-icons/io5";

const OrderForm = ({ webhookUrl }) => {
  const { cart, getTotalCost, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(""); // fixed typo
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    // --- Email validation ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // --- Phone number validation (10 digits for India) ---
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number starting with 6-9.");
      return;
    }

    const orderDetails = {
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      customerLocation: location,
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        alert("Order submitted successfully! Check your email for details.");
        clearCart();
        setName("");
        setEmail("");
        setPhone("");
        setLocation("");
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
      <div className="card max-w-2xl w-full p-6 rounded-lg shadow-lg bg-[#181523]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#C29740] ">
          Place Your Order
        </h2>
        <div className="w-[100%] mx-auto mb-4 flex justify-end gap-3">
          <button
            onClick={() => navigate(-1)}
            className=" bg-yellow-500 text-black p-2 px-4 rounded-sm flex items-center gap-2 cursor-pointer"
          >
            <IoArrowBackSharp />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label text-white">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered w-full text-black dark:text-white"
            />
          </div>

          <div>
            <label className="label text-white">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full text-black dark:text-white"
            />
          </div>

          <div>
            <label className="label text-white">Phone Number</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="input input-bordered w-full text-black dark:text-white"
            />
          </div>

          <div>
            <label className="label text-white">Location</label>
            <input
              type="text"
              placeholder="Your Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="input input-bordered w-full text-black dark:text-white"
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

          {/* Total Cost */}
          <div className="mt-4 text-right font-bold text-2xl">
            Total: ₹{getTotalCost().toFixed(2)}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={cart.length === 0} // disable if cart is empty
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
