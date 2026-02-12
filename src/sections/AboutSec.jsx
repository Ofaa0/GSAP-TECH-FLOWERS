import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const AboutSec = () => {
  const aboutRef = useRef();
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");
      gsap.from(cards, {
        yPercent: 100,
        rotate: 20,
        autoAlpha: 0,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: `+=${cards.length * 600}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
        stagger: 0.4,
      });
    },
    { scope: aboutRef },
  );
  return (
    <div>
      <h1 className="text-3xl text-white font-gendy uppercase text-center bg-red-400 pt-5">
        what we have
      </h1>
      <div
        ref={aboutRef}
        className="w-full min-h-dvh bg-red-400 flex flex-col gap-3 justify-center items-center relative"
      >
        <div className="w-[800px] h-[500px]">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-3 justify-center items-center text-gray-900">
            <h1 className="text-4xl font-gendy uppercase">different colors</h1>
            <p className="font-ov text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              reprehenderit odit quidem necessitatibus exercitationem atque esse
              nisi consequatur asperiores? Natus laboriosam quasi enim dicta
              atque quo a debitis est tempore!
            </p>
          </div>
          <img src="/public/1c.jpg" alt="imgs" className="w-full h-full " />
        </div>
        <div className="card w-[800px] h-[500px] absolute">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-3 justify-center items-center text-gray-900">
            <h1 className="text-4xl font-gendy uppercase">nutural flowers</h1>
            <p className="font-ov text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              reprehenderit odit quidem necessitatibus exercitationem atque esse
              nisi consequatur asperiores? Natus laboriosam quasi enim dicta
              atque quo a debitis est tempore!
            </p>
          </div>
          <img src="/public/2c.jpg" alt="imgs" className="w-full h-full " />
        </div>
        <div className="card w-[800px] h-[500px] absolute">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-3 justify-center items-center text-gray-900">
            <h1 className="text-4xl font-gendy uppercase">electrice flowers</h1>
            <p className="font-ov text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              reprehenderit odit quidem necessitatibus exercitationem atque esse
              nisi consequatur asperiores? Natus laboriosam quasi enim dicta
              atque quo a debitis est tempore!
            </p>
          </div>
          <img src="/public/3c.jpg" alt="imgs" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
