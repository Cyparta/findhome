import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import properties from "../../data/properties";

const FeaturedProperties = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const month = { en: "/mo", ar: "/شهر" };
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let content = properties?.slice(0, 12)?.map((item) => (
    <div className="item" key={item.id[lang]}>
      <div className="feat_property">
        <div className="thumb">
          <img className="img-whp" src={item.img[lang]} alt="fp1.jpg" />
        </div>
        {/* End .thumb */}

        {/* End .details */}
      </div>
    </div>
  ));

  return (
    <>
      <Slider {...settings} arrows={false}>
        {content}
      </Slider>
    </>
  );
};

export default FeaturedProperties;
