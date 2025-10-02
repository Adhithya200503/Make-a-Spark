import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCart } from "../context/CartContext";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import firecrackerData from "./CrackersNameWithPrice";
import chakkar from "../assets/chakkar.png";
import flowerPot from "../assets/flowerPot.png";
import twinkling from "../assets/TwinklingStar.png";
import sparkles from "../assets/sparkles.jpg";
import SingleShot from "../assets/SingleShot.png";
import chorsa from "../assets/chorsa.png";
import booms from "../assets/Booms.png";
import fountain from "../assets/fountains.png";
import rockets from "../assets/Rockets.png";
import aerial from "../assets/aerial_shots.png";
import whistling from "../assets/whistling.png";
import fancy from "../assets/fancyCrackers.png";
import skyDrivers from "../assets/skyDrivers.png";
import sevenShots from "../assets/7Wonders.png";
import uniqueShell from "../assets/uniqueShell.png";
import doubleColoring from "../assets/double_ball_coloring_crackers.png";
import matches from "../assets/matches.png";
import three from "../assets/three.png";
import pipe from "../assets/pipe.png";
import planetCrackers from "../assets/planetCrackers.png";

const CrakersList = () => {
  const navigate = useNavigate();
  const { crackersCategory } = useParams();
  const [crackersList, setCrackersList] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [sortedList, setSortedList] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  const { addToCart } = useCart();
  const { getTotalCost } = useCart();
  const crackersCategoryData = [
    {
      name: "sparklers",
      image: sparkles,
    },
    {
      name: "chakkars",
      image: chakkar,
    },
    {
      name: "flower_pots",
      image: flowerPot,
    },
    {
      name: "twinkling_star_and_pencil_varieties",
      image: twinkling,
    },
    {
      name: "single_shot_and_bombs",
      image: SingleShot,
    },
    {
      name: "bombs",
      image: booms,
    },
    {
      name: "chorsa_crackers",
      image: chorsa,
    },
    {
      name: "new_varietie",
      image: rockets,
    },
    {
      name: "rockets",
      image: rockets,
    },
    {
      name: "small_fancy_items",
      image: fancy,
    },
    {
      name: "fancy_fountains",
      image: fountain,
    },
    {
      name: "whistling_items",
      image: whistling,
    },
    {
      name: "fancy_aerial_shots",
      image: aerial,
    },
    {
      name: "pipe_13_x_2_25_multicolour",
      image: pipe,
    },
    {
      name: "pipe_12_x_2_multicolour",
      image: pipe,
    },
    {
      name: "planet_series_15_x_3",
      image: planetCrackers,
    },
    {
      name: "sky_divers_3_5",
      image: skyDrivers,
    },
    {
      name: "seven_wonders",
      image: sevenShots,
    },
    {
      name: "unique_shells_2_pieces_mix",
      image: uniqueShell,
    },
    {
      name: "double_ball_colour_crackling_2_pieces_mix",
      image: doubleColoring,
    },
    {
      name: "three_different_functions_13_x_2_5",
      image: three,
    },
    {
      name: "matches_and_caps",
      image: matches,
    },
  ];

  useEffect(() => {
    if (crackersCategory && firecrackerData[crackersCategory]) {
      setCrackersList(firecrackerData[crackersCategory]);
      setSortedList(firecrackerData[crackersCategory]); // initialize sorted list
    } else {
      setCrackersList([]);
      setSortedList([]);
    }
  }, [crackersCategory]);

  const handleQuantityChange = (variety, value) => {
    const quantity = parseInt(value, 10) || 0;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [variety]: quantity,
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.variety] || 0;
    if (quantity > 0) {
      addToCart(item, quantity);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.variety]: 0,
      }));
      alert(`Added ${quantity} of ${item.variety} to the cart`);
    } else {
      alert("Please enter a quantity greater than 0.");
    }
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...crackersList].sort((a, b) => {
      if (order === "asc") return a.rate_per_unit - b.rate_per_unit;
      if (order === "desc") return b.rate_per_unit - a.rate_per_unit;
      return 0;
    });

    setSortedList(sorted);
  };

  const categoryName = crackersCategory
    ? crackersCategory.replace(/_/g, " ").toUpperCase()
    : "No Category Selected";

  return (
    <div className="p-4 min-h-screen bg-[#181523] relative text-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#C29740]">
        Firecracker Price List
      </h1>

      {/* Cart Button */}

      <div className="max-w-4xl mx-auto mb-4 flex flex-col sm:flex-row justify-end sm:justify-end gap-3 px-4">
        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 text-black p-2 sm:px-4 rounded-sm flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <FaHome />
        </button>

        {/* Cart Button */}
        <button
          onClick={() => navigate("/cart")}
          className="bg-yellow-500 text-black p-2 sm:px-4 rounded-sm flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <FaShoppingCart />
          <span className="hidden sm:inline">Cart</span>
        </button>

        {/* Category Select */}
        <select
          value={crackersCategory || ""}
          onChange={(e) => navigate(`/${e.target.value}`)}
          className="select select-bordered w-full sm:w-60 text-black"
        >
          <option value="">Select Category</option>
          {crackersCategoryData.map((cat, index) => (
            <option key={index} value={cat.name}>
              {cat.name.replace(/_/g, " ").toUpperCase()}
            </option>
          ))}
        </select>

        {/* Sort Select */}
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="input input-bordered bg-white text-black w-full sm:w-48"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="card bg-[#181523] max-w-4xl mx-auto mt-2">
        <div className="card-body">
          <div>
            <h2 className="card-title text-white">{categoryName}</h2>
            <h2 className="card-title text-white text-[14px] mt-2">
              {`Amount in Cart  ₹${getTotalCost()}`}
            </h2>
          </div>
          {sortedList.length > 0 ? (
            <div className="overflow-x-auto mt-4">
              <table className="table w-full table-compact">
                <thead>
                  <tr>
                    <th className="text-white">Variety</th>
                    <th className="text-white">Contents</th>
                    <th className="text-white">Rate per Unit</th>
                    <th className="text-white">Quantity</th>
                    <th className="text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedList.map((item) => (
                    <tr key={item.id || item.variety}>
                      <td
                        className={`${
                          crackersCategory == "gift_boxes"
                            ? "flex flex-col items-start"
                            : ""
                        }`}
                      >
                        <span className="font-semibold">{item.variety}</span>
                        {crackersCategory === "gift_boxes" && item.itemsUrl && (
                          <a
                            href={item.itemsUrl}
                            target="_blank"
                            className="ml-2 text-blue-500 underline"
                          >
                            items in the Box
                          </a>
                        )}
                      </td>
                      <td>{item.contents}</td>
                      <td>₹{item.rate_per_unit.toFixed(2)}</td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          value={quantities[item.variety] || ""}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.variety,
                              Number(e.target.value)
                            )
                          }
                          className="input input-bordered w-20 bg-white text-black"
                        />
                      </td>
                      <td>
                        <button
                          className="btn bg-[#F0B100] border-none text-black btn-primary hidden sm:block"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="bg-yellow-500 text-black p-2 px-4 rounded-sm flex items-center gap-2 sm:hidden cursor-pointer"
                          onClick={() => handleAddToCart(item)}
                        >
                          <CiShoppingCart />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-4">
              Category not found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrakersList;
