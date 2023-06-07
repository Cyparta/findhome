import { useState } from "react";
// import ModalVideo from "react-modal-video";
import { useSelector } from "react-redux";

const PropertyVideo = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.listingStyle);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      /> */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
          >
            {main.vedio.heading[lang]}
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#listing"
            role="tab"
          >
            {main.vedio.heading2[lang]}
          </a>
        </li>
      </ul>
      {/* End .nav-tabs */}

      <div className="tab-content" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="description"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <img
                className="pro_img img-fluid w100"
                src="/assets/images/background/7.jpg"
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={() => setOpen(true)}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade row pl15 pl0-1199 pr15 pr0-1199"
          id="listing"
          role="tabpanel"
        >
          <div className="property_video">
            <div className="thumb">
              <img
                className="pro_img img-fluid w100"
                src="/assets/images/background/7.jpg"
                alt="7.jpg"
              />
              <div className="overlay_icon">
                <div
                  onClick={() => setOpen(true)}
                  role="button"
                  className="video_popup_btn red popup-youtube"
                >
                  <span className="flaticon-play"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .tab-conten */}
    </>
  );
};

export default PropertyVideo;
