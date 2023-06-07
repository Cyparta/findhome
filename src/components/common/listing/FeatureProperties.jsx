import featureProContent from "../../../data/properties";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const FeatureProperties = ({ id, typetofilter }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    adaptiveHeight: true,
  };
  const resulttoslider = typetofilter.filter((ele, index) => {
    return ele.id[lang] == id;
  });

  return (
    <>
      {resulttoslider.slice(0, 10).map((item) => (
        <div className="item " key={item.id[lang]}>
          {/* <div className="feat_property home7"> */}
          {/* <div className="thumb"> */}
          <Slider {...settings} arrows={false}>
            {item.imgList.map((ele, i) => {
              return (
                <img
                  key={i}
                  src={ele}
                  alt="properties identity"
                  className="w-100 h-100"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              );
            })}
          </Slider>
          {/* </div> */}
          {/* </div> */}
        </div>
      ))}
    </>
  );
};

export default FeatureProperties;
