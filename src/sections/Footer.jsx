import React from "react";
import { GiVineFlower } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="w-full py-8 bg-red-900">
      <nav className="w-full py-4 top-0 z-[400] flex justify-center border-b-2 border-white">
        <div className="container w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GiVineFlower className="text-white text-5xl" />
            <h1 className="uppercase text-white text-2xl font-gendy">
              technical <br />
              flowers
            </h1>
          </div>
          <ul className="flex items-center gap-4 font-gendy font-medium text-white uppercase">
            <li className="cursor-pointer">home</li>
            <li className="cursor-pointer">about</li>
            <li className="cursor-pointer">collections</li>
            <li className="cursor-pointer">contact</li>
          </ul>
        </div>
      </nav>
      <p className="text-center text-white font-gendy text-xl py-4">{"Create by © <Rauf Zaidany>"} <br />raufzaidany@gmail.com</p>
    </div>
  );
};

export default Footer;
