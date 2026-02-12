import { FaRegClock } from "react-icons/fa";
import { GiShadowFollower } from "react-icons/gi";
import { LiaShippingFastSolid } from "react-icons/lia";

const FeatureSec = () => {
  return (
    <div className="w-full h-dvh bg-red-200 flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-red-950 text-4xl font-gendy font-medium uppercase py-4">
        what we can
      </h1>
      <div className="container w-full flex items-center h-full">
        <div className="w-full  grid grid-cols-3 gap-4 ">
          <div data-speed='0.3' className="flex flex-col gap-3 h-fit items-center rounded-lg bg-red-800 text-white p-4">
            <LiaShippingFastSolid className="text-9xl" />
            <h3 className="text-3xl font-gendy uppercase">Fast Shipping</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dolor vel laborum cum atque facere doloremque et
              perferendis soluta Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus amet ratione eos quia debitis! Aperiam
              obcaecati corrupti provident, praesentium error in! Odio vel
              laboriosam nisi eum harum aspernatur ut vitae.
            </p>
          </div>
          <div data-speed='0.6' className="flex flex-col gap-3 h-fit items-center rounded-lg bg-red-800 text-white p-4">
            <FaRegClock  className="text-9xl" />
            <h3 className="text-3xl font-gendy uppercase">24/7 offical hours</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dolor vel laborum cum atque facere doloremque et
              perferendis soluta Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus amet ratione eos quia debitis! Aperiam
              obcaecati corrupti provident, praesentium error in! Odio vel
              laboriosam nisi eum harum aspernatur ut vitae.
            </p>
          </div>
          <div data-speed='0.9' className="flex flex-col gap-3 h-fit items-center rounded-lg bg-red-800 text-white p-4">
            <GiShadowFollower  className="text-9xl" />
            <h3 className="text-3xl font-gendy uppercase">know our clients</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dolor vel laborum cum atque facere doloremque et
              perferendis soluta Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus amet ratione eos quia debitis! Aperiam
              obcaecati corrupti provident, praesentium error in! Odio vel
              laboriosam nisi eum harum aspernatur ut vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSec;
