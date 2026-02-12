import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiVineFlower } from "react-icons/gi";
gsap.registerPlugin(SplitText);

const NewHeroSec = ({ tl }) => {
  const heroRef = useRef();
  useGSAP(
    () => {
      const bloomText = new SplitText("#bloom", { type: "words", mask: true });
      const bloomText2 = new SplitText("#bloom2", {
        type: "words",
        mask: true,
      });
      const underBloomText = new SplitText("#bloomP", {
        type: "chars",
        mask: true,
      });
      const underBloomText2 = new SplitText("#bloomP2", {
        type: "chars",
        mask: true,
      });
      tl.from("#hero", {
        yPercent: 100,
        scale: 2,
        duration: 1.3,
        ease: "power4.out",
      })
        .from(underBloomText.chars, {
          autoAlpha: 0,
          x: 70,
          stagger: {
            each: 0.03,
            from: "random",
          },
          ease: "power2.inOut",
        })
        .fromTo(
          "#heroBtn",
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.8,
            ease: "power2.out",
          },
          "<10%",
        )
        .from(
          bloomText.words,
          {
            autoAlpha: 0,
            y: 120,
            duration: 0.8,
            stagger: 0.2,
            ease: "power4.inOut",
          },
          "<10%",
        )
        .from(
          bloomText2.words,
          {
            autoAlpha: 0,
            y: 120,
            duration: 0.8,
            stagger: 0.2,
            ease: "power4.inOut",
          },
          "<10%",
        )
        .from(
          underBloomText2.chars,
          {
            autoAlpha: 0,
            x: 70,
            stagger: {
              each: 0.03,
              from: "random",
            },
            ease: "power2.inOut",
          },
          "<10%",
        )
        .from(
          ".icons",
          {
            autoAlpha: 0,
            x: 70,
            stagger: {
              each: 0.2,
              from: "random",
            },
            ease: "power2.inOut",
          },
          "<30%",
        )
        .from("nav", {
          autoAlpha: 0,
          y: -70,
          stagger: {
            each: 0.2,
            from: "random",
          },
          ease: "power2.inOut",
        });
    },
    { scope: heroRef },
  );
  return (
    <div
      ref={heroRef}
      className="h-dvh w-full flex justify-center items-center bg-[radial-gradient(circle,#ff7070_0%,#850000_100%)] overflow-hidden relative"
    >
      <nav className="bg-white/20 backdrop-blur-sm w-full py-4 absolute top-0 z-[400] flex justify-center">
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
      <div className="container relative w-full h-full ">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-fit ">
          <img id="hero" src="/hero.png" alt="hero" />
        </div>
        <div className="flex justify-between items-center w-full h-full">
          {/* title about flowers */}
          <div className="overflow-hidden">
            <h1
              id="bloom"
              className="font-gendy text-6xl text-white uppercase overflow-hidden"
            >
              Bloom & <br /> synthiesis
            </h1>
            <p id="bloomP" className="font-ov text-2xl text-white mt-4">
              Where nuture's elegance <br />
              meets future tech
            </p>
            <button
              id="heroBtn"
              className="border-2 border-white py-2 px-4 text-2xl text-white uppercase font-ov mt-5 cursor-pointer will-change-[clip-path] hover:scale-105 duration-150"
            >
              explore the collection
            </button>
          </div>
          <div className="self-end pb-4">
            <h1
              id="bloom2"
              className="font-gendy text-5xl text-white uppercase overflow-hidden"
            >
              all you want
            </h1>
            <p id="bloomP2" className="font-ov text-xl text-white mt-4">
              discover more and show <br />
              us you interstes
            </p>
          </div>
          <div className="absolute right-0 top-1/5  flex flex-col gap-6 text-white text-4xl">
            <FaFacebookSquare className="icons" />
            <FaSquareInstagram className="icons" />
            <FaYoutube className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeroSec;
