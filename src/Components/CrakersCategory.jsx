import React from "react";
import { useNavigate } from "react-router";

const CrakersCategory = () => {
  const navigate = useNavigate();
  const crackersCategory = [
    "sparklers",
    "chakkars",
    "flower_pots",
    "twinkling_star_and_pencil_varieties",
    "single_shot_and_bombs",
    "bombs",
    "chorsa_crackers",
    "new_varietie",
    "rockets",
    "small_fancy_items",
    "fancy_fountains",
    "whistling_items",
    "fancy_aerial_shots",
    "pipe_13_x_2_25_multicolour",
    "pipe_12_x_2_multicolour",
    "planet_series_15_x_3",
    "sky_divers_3_5",
    "seven_wonders",
    "unique_shells_2_pieces_mix",
    "double_ball_colour_crackling_2_pieces_mix",
    "three_different_functions_13_x_2_5",
    "matches_and_caps",
  ];
  const formatName = (name) => name .replace(/_/g, " ") .replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="px-4 py-6 bg-[#181523]">
      <h2 className="text-2xl font-bold  mb-6 flex gap-3">
        <span className="text-white">Crackers Categories</span>
        <span>({crackersCategory.length})</span>
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {crackersCategory.map((item, idx) => (
          <div
            key={idx}
            className="card bg-yellow-500  shadow-lg rounded-none  p-4 flex items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        onClick={()=>{navigate(`/${item}`)}}>
            <p className="text-lg font-semibold text-black  ">
              {formatName(item)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrakersCategory;
