import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { buildinghome } from "../../../data/menuData";
import { useEffect } from "react";

const PropertyDescriptions = ({ id, typetofilter }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { des } = useSelector((state) => state.lang.value.listingStyle);
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const resulttoslider = typetofilter.filter((ele, index) => {
    return ele.id[lang] == id;
  });
  resulttoslider.map((ele) => {
    console.log(ele.desc);
  });

  return (
    <>
      {resulttoslider.map((item, index) => {
        return (
          <>
            <div key={item.id[lang]}>
              <h4 className="mb25">{item.title[lang]}</h4>
              <p
                className={
                  !click ? "gpara second_para white_goverlay mt10 mb10" : ""
                }
              >
                {item.desc[lang]}
              </p>
            </div>
          </>
        );
      })}

      <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          {des.btn[lang]} <span className="flaticon-download-1 fz12"></span>
        </a>
      </p>
    </>
  );
};

export default PropertyDescriptions;
