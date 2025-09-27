import React from "react";
import { useNavigate } from "react-router";
import chakkar from "../assets/chakkar.jpg";
import flowerPot from "../assets/flowerPot.jpg";
import twinkling from "../assets/TwinklingStar.jpg";
import sparkles from "../assets/sparkles.jpg";
import SingleShot from "../assets/SingleShot.jpg"
import chorsa from "../assets/chorsa.jpg"
import booms from "../assets/Booms.jpg"
import fountain from "../assets/fountains.jpg"
import rockets from "../assets/Rockets.jpg"
import aerial from "../assets/aerial_shots.jpg";
import whistling from "../assets/whistling.jpg"
import fancy from "../assets/fancyCrackers.jpg"
import skyDrivers from "../assets/skyDrivers.jpg"
import sevenShots from "../assets/7Wonders.jpg"
import uniqueShell from "../assets/uniqueShell.jpg"
import doubleColoring from "../assets/double_ball_coloring_crackers.jpg"
import matches from "../assets/matches.jpg"
import three from "../assets/three.jpg"
import pipe from "../assets/pipe.jpg"
import planetCrackers from "../assets/planetCrackers.jpg"
const CrakersCategory = () => {
  const navigate = useNavigate();
  const crackersCategory = [
  {
    name: "sparklers",
    image:sparkles,
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
    image:twinkling,
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
    image: fancy
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
    image: planetCrackers
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

  const formatName = (name) =>
    name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
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
            onClick={() => navigate(`/${item.name}`)}
            className="card bg-yellow-600 shadow-md hover:shadow-xl rounded-sm p-6 flex flex-col items-center justify-center text-center gap-3 
             hover:scale-105  transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={item.image}
              alt={item}
              className="w-20 h-20 object-contain"
            />
            <p className="text-lg font-bold text-black tracking-wide">
              {formatName(item.name)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrakersCategory;
