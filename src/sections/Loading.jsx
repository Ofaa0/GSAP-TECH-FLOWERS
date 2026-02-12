import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Loading = ({ tl }) => {
  const loadingRef = useRef();
  useGSAP(
    () => {
      tl.to(".lines", {
        xPercent: (i) => (i % 2 == 0 ? 100 : -100),
        ease: "power4.out",
        onComplete: () => {
          document.querySelector("#loading").classList.add("hidden");
        },
        stagger: {
          each: 0.2,
          from: "center",
        },
      });
    },
    { scope: loadingRef },
  );
  return (
    <div
      id="loading"
      ref={loadingRef}
      className="w-full h-full fixed top-0 left-0 z-[500] flex flex-col cursor-none"
    >
      <div className="lines h-1/6 w-full bg-red-950"></div>
      <div className="lines h-1/6 w-full bg-red-950"></div>
      <div className="lines h-1/6 w-full bg-red-950"></div>
      <div className="lines h-1/6 w-full bg-red-950"></div>
      <div className="lines h-1/6 w-full bg-red-950"></div>
      <div className="lines h-1/6 w-full bg-red-950"></div>
    </div>
  );
};

export default Loading;
