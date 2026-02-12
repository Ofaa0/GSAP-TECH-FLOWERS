import React from "react";

const Card = ({ title, desc, color }) => {
  return <div className={`card w-[900px] h-[500px] flex flex-col gap-4 justify-center items-center ${color}`}>
    <h1 className="text-white text-3xl font-bold">{title}</h1>
    <p className="text-white text-xl font-normal">{desc}</p>
  </div>;
};

export default Card;
