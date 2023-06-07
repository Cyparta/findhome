import { useSelector } from "react-redux";
import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import AddressSidebar from "./AddressSidebar";
import BreadCrumbBanner from "./BreadCrumbBanner";
import Form from "./Form";

const index = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { sendEmail, contactUs } = useSelector(
    (state) => state.lang.value.contact
  );
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const markerPosition = {
    lat: 37.7749,
    lng: -122.4194,
  };
  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Inner Page Breadcrumb --> */}
        <BreadCrumbBanner />

        {/* <!-- Our Contact --> */}
        <section className="our-contact pb0 bgc-f7">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="form_grid">
                  <h4 className="mb5">{sendEmail.heading[lang]}</h4>
                  <p>{sendEmail.text[lang]}</p>
                  <Form />
                </div>
              </div>
              {/* End .col */}

              <div className="col-lg-5 col-xl-4">
                <AddressSidebar />
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}

          <div className="container-fluid p0 mt50">
            <div className="row">
              <div className="col-lg-12">
                <div className="h600" id="map-canvas">
                  <div className="gmap_canvas pe-none">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.083431861039!2d30.94898115961708!3d29.97703217506189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145856fa27605d37%3A0x766a95dd7569ad65!2z2KzYp9mF2LnYqSDZpiDYo9mD2KrZiNio2LE!5e0!3m2!1sar!2seg!4v1685802669115!5m2!1sar!2seg"
                      width="600"
                      height="450"
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                    {/* End iframe */}

                    <img
                      className="location-finder"
                      src="assets/images/location.png"
                      alt="location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Start Call to Action --> */}

        {/* <!-- Our Footer --> */}
        <section className="footer_one">
          <div className="container">
            <div className="row">
              <Footer />
            </div>
          </div>
        </section>

        {/* <!-- Our Footer Bottom Area --> */}
        <section className="footer_middle_area pt40 pb40">
          <div className="container">
            <CopyrightFooter />
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
