import testimonials from "../../data/testimonial";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const Testimonial = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const settings = {
    dots: true,
    arrow: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {testimonials.slice(0, 5).map((item) => (
          <div className="item" key={item.id[lang]}>
            <div className="testimonial_grid">
              <div className="thumb">
                <img src={item.img[lang]} alt="1.jpg" />
              </div>
              <div className="details">
                <h4>{item.name[lang]}</h4>
                <p>{item.designation[lang]}</p>
                <p className="mt25">{item.text[lang]}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
