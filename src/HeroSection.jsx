import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from "react";
import Card from "./Card";
import { cards } from "./store";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const textContainer = useRef();

  useGSAP(
    () => {
      const cradsel = gsap.utils.toArray(".card");
      const cradsNo1 = gsap.utils.toArray(".card:not(:first-child)");
      gsap.from(cradsNo1, {
        duration: 3,
        yPercent: 400,
        stagger: 1,
        scrollTrigger: {
          trigger: textContainer.current,
          start: "center center",
          end: "+=1000",
          scrub: 1,
          pin: true,
          snap: {
            snapTo: 1 / (cards.length),
          },
        },
      });
    },
    { scope: textContainer },
  );
  return (
    <div
      ref={textContainer}
      className="w-full h-dvh flex justify-center items-center relative overflow-hidden font-ov uppercase"
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          desc={card.desc}
          color={card.color}
          className="card"
        />
      ))}
    </div>
  );
};

export default HeroSection;
