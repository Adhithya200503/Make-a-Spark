import React from "react";
import { useNavigate } from "react-router";
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
const CrakersCategory = () => {
  const navigate = useNavigate();
  const crackersCategory = [
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

  const formatName = (name) =>
    name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div className="px-4 py-6 bg-[#181523]">
      <h2 className="text-2xl font-bold  mb-6 flex gap-3">
        <span className="text-[#C29740]">Crackers Categories</span>
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
