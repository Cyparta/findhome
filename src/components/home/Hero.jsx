import Slider from "react-slick";
import HeroFilter from "./HeroFilter";
import { useRef } from "react";
import { useEffect } from "react";
import YouTube from "react-youtube";
// import "../../../public/assets/images/home/buildingbeat.jpg";
const Hero = () => {
  const videoRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    "../../../public/assets/images/home/buildingbeat.jpg",
    "../../../public/assets/images/home/building.jpg",
    "../../../public/assets/images/home/business2.jpg",
    "../../../public/assets/images/home/business3.jpg",
    "../../../public/assets/images/home/businesspark.jpg",
  ];
  const handleReady = (event) => {
    // Access the YouTube player object and set its enablejsapi parameter to 1
    event.target.setPlaybackQuality("hd1080");
    event.target.setPlaybackRate(1);
    event.target.setVolume(100);
    event.target.setOption("enablejsapi", 1);
  };
  return (
    <>
      {/* <Slider {...settings}>
        {images.map((image, i) => {
          console.log(image);
          return (
            <section
              className={`home-one home1-overlay home1_bgi1 home${i + 1}_bgi${
                i + 1
              }`}
              // style={{ backgroundImage: `url(${image})` }}
            >
              <div className="container">
                <div className="row posr">
                  <div className="col-lg-12"><HeroFilter /></div>
                </div>
              </div>
              End .container
              <div className="mouse_scroll">
                <a href="#feature-property">
                  <div className="icon">
                    <h4>Scroll Down</h4>
                    <p>to discover more</p>
                  </div>
                  <div className="thumb">
                    <img
                      src="assets/images/resource/mouse.png"
                      alt="mouse.png"
                    />
                  </div>
                </a>
              </div>
            </section>
          );
        })}
      </Slider> */}
      <YouTube
        videoId="kIC4-24qUno"
        className="YoutubeVideo"
        opts={{
          width: 640,
          height: 840,
          playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            mute: 1,
            rel: 0,
            modestbranding: 1,
            showinfo: 0,
            playlist: "kIC4-24qUno",
            enablejsapi: 1
          },
        }}
        onReady={handleReady}
      ></YouTube>
    </>
  );
};

export default Hero;
