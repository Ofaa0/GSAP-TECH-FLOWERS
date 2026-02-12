import gsap from "gsap";
import HeroSection from "./HeroSection";
import Loading from "./sections/Loading";
import NewHeroSec from "./sections/NewHeroSec";
import AboutSec from "./sections/AboutSec";
import FeatureSec from "./sections/FeatureSec";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Footer from "./sections/Footer";
gsap.registerPlugin(ScrollSmoother);
function App() {
  const globalTl = gsap.timeline();
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });
  });

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="w-full min-h-dvh bg-blue-100 text-gray-900">
            <Loading tl={globalTl} />
            <NewHeroSec tl={globalTl} />
            <FeatureSec tl={globalTl} />
            <AboutSec tl={globalTl} />
            <Footer tl={globalTl} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
