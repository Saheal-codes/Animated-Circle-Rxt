import React from "react";
import ellipse from "../Components/Ellipse.png";
import "./Awardsandbenefits";
import "../App.css";
import Canvass from "./canvas";
import Productwheel from "./Productwheel";

const Awardandbenefits = () => {
  const i = React.useRef();

  const [productstate, setproductstate] = React.useState(0);

  const [productstatetext, setproductstatetext] = React.useState(0);

  const [circleanimate, setcircleanimate] = React.useState();

  const [degree, setdegree] = React.useState("0deg");

  const [rotate, setrotate] = React.useState(0);

  const [animate, setanimate] = React.useState(true);

  React.useEffect(() => {
    Canvass();

    // setinterval function for animation

    i.current = setInterval(() => {
      setrotate((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
      setdegree((prev) => {
        return prev === "0deg" ? "20deg" : prev === "20deg" ? "40deg" : "0deg";
      });
      setcircleanimate(true);
      setproductstate((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
    }, 4000);
    const ref = () => {
      clearInterval(i.current);
    };
    return ref;
  }, []);
  // bg-[#210e0a]
  return (
    // <div className="h-screen ">
    <div className="h-screen font-[Poppins]">
      <div className="w-screen h-screen bg-[#210e0a]">
        <canvas
          className="canvas2 h-screen w-full fixed left-0 top-0 z-10"
          id="canvas2"
        ></canvas>
        <section className="Awards Section z-20 w-full flex h-full b-4 border border-black relative">
          <div className="textdiv w-[50%] flex justify-items-start flex-col  ">
            <h1 className="text-white text-[2.5rem] text-start ml-16 mt-24">
              AWARDS CATEGORIES
            </h1>
            <div className="  relative">
              <h1 className={`animate-slide-in-left text-[2.5rem] absolute top-36 left-40 text-white `}>
                {productstate == 0
                  ? "Brand Of The Year"
                  : productstate == 1
                  ? "Product of the Year"
                  : "Product Launch Of the Year"}
                {/*    */}
              </h1>
              {/* <h1 className={`animate-slide-in-left text-[2.5rem] text-white`}>
                Product of the Year
              </h1>
              <h1 className={`animate-slide-in-left text-[2.5rem] text-white`}>
                Product launch of the Year
              </h1> */}<div>

              <h1 className="text-white w-full font-thin text-[1.2rem] text-start mt-2 absolute top-56 pr-72 pl-40">
                {productstate == 0
                  ? "The Brand of the Year is a distinctive and premier recognition for a brand recognized as a champion in its industry category based on current year market standing and consumer preference."
                  : productstate == 1
                  ? "The Product of the Year Award celebrates the best products in the market in different categories of FMCG products and rewards manufacturers for quality, strategy, marketing and other parameters."
                  : "The Product Launch of the Year Award celebrates the efforts of FMCG companies who continuously develop new products, brand extensions and packaging updates to meet the new industry standards and demands of the consumers."}
              </h1>
                  </div>
            </div>
          </div>
          <div className="Imagediv overflow-hidden w-[60%] relative border border-black flex justify-between">
            {/* <div className="text-[20rem] rounded-full border border-red-900 w-[20rem] h-[20rem] "></div> */}
            <img
              src={ellipse}
              className={` ${
                rotate == 0
                  ? ""
                  : rotate == 1
                  ? `rotate-[20deg] translate-y-1 translate-x-24`
                  : `rotate-[40deg] translate-y-12 translate-x-44`
              } ease-in-out duration-1000 w-[65rem] h-[35rem] fixed top-64 -right-10`}
            ></img>
            <div className="absolute top-64 left-16">
              <Productwheel />
            </div>
          </div>
        </section>
        {/* <section className="Benefit-Section ">
              <div>
                <h1>BENEFITS</h1>
              </div>
              <div></div>
            </section> */}
      </div>

      {/* </div> */}
    </div>
  );
};

export default Awardandbenefits;
