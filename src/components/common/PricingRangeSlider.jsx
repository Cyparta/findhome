import { useEffect } from "react";
import { useState } from "react";
// import InputRange from "react-input-range";
import { useDispatch } from "react-redux";
import { addPrice } from "../../features/properties/propertiesSlice";

const RangeSlider = () => {
  const [price, setPrice] = useState(10000);
  const dispath = useDispatch();

  const handleOnChange = (value) => {
    setPrice({ value });
  };

  // price add to state
  useEffect(() => {
    dispath(
      addPrice(price)
    );
  }, [dispath, price, addPrice]);

  return (
    <>
        
    </>
    // <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
    //   <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
    //     <div className="nft__filter-price-box">
    //       <div className="d-flex align-items-center">
    //         <span>$ </span>
            
    //       </div>
    //     </div>
    //     {/* <div className="nft__filter-price-box">
    //       <div className="d-flex align-items-center">
    //         <span>$ </span>
    //         <input
    //           value={price.value.max}
    //           type="text"
    //           onChange={handleOnChange}
    //         />
    //       </div>
    //     </div> */}
    //   </div>

    //   {/* <InputRange
    //     formatLabel={(value) => ``}
    //     maxValue={20000}
    //     minValue={10000}
    //     value={price.value}
    //     onChange={(value) => handleOnChange(value)}
    //   /> */}

    //   <div className="slider-styled inside-slider" id="nft-slider"></div>
    // </div>
  );
};

export default RangeSlider;
