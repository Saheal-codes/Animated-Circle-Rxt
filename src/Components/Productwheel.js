import React from "react";
import Image1 from "../Components/Image1 copy 3.png";
import Image1copy from "../Components/Product10.png";
import Image1copy2 from "../Components/Product11.png";
import Image1copy3 from "../Components/Image1 copy 3.png";
import Image1copy4 from "../Components/Cosmetic1.png";
import Image1copy5 from "../Components/Product1.png";
import Image1copy6 from "../Components/Product2.png";
import Image1copy7 from "../Components/Product3.png";
import Image1copy8 from "../Components/Product4.png";
import Image1copy9 from "../Components/Product5.png";
import Image1copy10 from "../Components/Product6.png";
import Image1copy11 from "../Components/Product7.png";
import Image1copy12 from "../Components/Product8.png";
import Image1copy13 from "../Components/Product9.png";
import Cosmetic from "../Components/Product12.png";
import Batch from "../Components/Batch.png"

export default function Productwheel() {

  const i = React.useRef();

  const [productstate, setproductstate] = React.useState(0);
    
  const [circleanimate, setcircleanimate] = React.useState();

  React.useEffect(() => {
    i.current = setInterval(() => {
      setcircleanimate(true);
      setproductstate((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0));
    }, 4000);

    const ref = () => {
      clearInterval(i.current);
    };

    return ref;
  }, []);

  return (
    <>
      <div className={`Products-wheel grid place-items-center`}>
        <img src={Batch} alt="Award Logo"
          className="absolute h-60 w-60 animate-fall-and-rise"></img>
        <div
          className={` rounded-full h-[65rem] w-[65rem] relative ${
            circleanimate && "animate-Spin-and-scale"
            } `}
          id="Circleforimages"
        >
          {/* Image at the top of the circle */}
          <img
            src={Image1}
            alt="Product_image"
            className="h-40 w-24 absolute top-0 left-[54%] rotate-[5deg] translate-x-[-50%] translate-y-[-50%]"
          ></img>
          {/* 2nd image on the left */}
          <img
            src={Image1copy}
            alt="Product_image"
            className="h-30 w-40 absolute -rotate-[23deg] left-[23%] -top-[2.2%]"
          ></img>
           <img
            src={Image1copy2}
            alt="Product_image"
            className="h-40 w-36 absolute -rotate-[52deg] left-[2%] top-[12%]"
          ></img>
          <img
            src={Image1copy3}
            alt="Product_image"
            className="h-40 w-24 absolute -rotate-[80deg] -left-[4%] top-[35%]"
          ></img>
          <img
            src={Image1copy4}
            alt="Product_image"
            className="h-44 w-16 absolute -rotate-[102deg] -left-[5%] top-[53%]"
          ></img>
          <img
            src={Image1copy5}
            alt="Product_image"
            className="h-32 w-16 absolute -rotate-[122deg] left-[3%] top-[70%]"
          ></img>
          <img
            src={Image1copy6}
            alt="Product_image"
            className="h-32 w-16 absolute -rotate-[140deg] left-[14%] top-[83%]"
          ></img>
          <img
            src={Image1copy7}
            alt="Product_image"
            className="h-40 w-16 absolute -rotate-[163deg] left-[32%] top-[91.5%]"
          ></img>
          <img
            src={Image1copy8}
            alt="Product_image"
            className="h-44 w-16 absolute -rotate-[185deg] left-[52%] top-[93%]"  
          ></img>
          <img
            src={Image1copy9}
            alt="Product_image"
            className="h-40 w-28 absolute -rotate-[215deg] left-[72%] top-[87%]"
          ></img>
          <img
            src={Image1copy10}
            alt="Product_image"
            className="h-40 w-36 absolute -rotate-[235deg] left-[85%] top-[69%]"
          ></img>
          <img
            src={Image1copy11}
            alt="Product_image"
            className="h-40 w-36 absolute -rotate-[265deg] left-[93%] top-[50%]"
          ></img>
          <img
            src={Image1copy12}
            alt="Product_image"
            className="h-40 w-16 absolute -rotate-[285deg] left-[95%] top-[30%]"
          ></img>
          <img
            src={Cosmetic}
            alt="Product_image"
            className="h-40 w-16 absolute -rotate-[310deg] left-[87%] top-[11%]"
          ></img>
          <img
            src={Image1copy13}
            alt="Product_image"
            className="h-40 w-16 absolute -rotate-[333deg] left-[70.5%] -top-[2.5%]"
          ></img>
        </div>
      </div>
    </>
  );
}
