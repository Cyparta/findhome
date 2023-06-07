import CallToAction from "../common/CallToAction";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import MobileMenu from "../common/header/MobileMenu";
import Partners from "../common/Partners";
import Blogs from "../common/Blogs";
import FeaturedProperties from "./FeaturedProperties";
import FindProperties from "./FindProperties";
import Header from "./Header";
import Hero from "./Hero";
import WhyChoose from "../common/WhyChoose";
import PopupSignInUp from "../common/PopupSignInUp";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
const Index = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const featured = useSelector((state) => state.lang.value.featureProperty);
  const findProperty = useSelector((state) => state.lang.value.findProperty);
  const chooseUs = useSelector((state) => state.lang.value.chooseUs);
  const articleTips = useSelector((state) => state.lang.value.articleTips);
  const ourPartners = useSelector((state) => state.lang.value.ourPartners);
  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Home Design --> */}
        <Hero />

        {/* <!-- Feature Properties --> */}
        <section id="feature-property" className="feature-property bgc-f7">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12 offset-lg-3 m-0">
                <div className="main-title text-center mb40">
                  <h2>{featured.heading[lang]}</h2>
                  <p>{featured.text[lang]}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="feature_property_slider gutter-x15">
                  <FeaturedProperties />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Property Cities --> */}
        <section id="property-city" className="property-city pb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>{findProperty.heading[lang]}</h2>
                  <p>{findProperty.text[lang]}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <FindProperties />
            </div>
          </div>
        </section>

        {/* <!-- Why Chose Us --> */}
        <section id="why-chose" className="whychose_us bgc-f7 pb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>{chooseUs.heading[lang]}</h2>
                  <p>{chooseUs.text[lang]}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <WhyChoose />
            </div>
          </div>
        </section>

        {/* <!-- Our Blog --> */}
        <section className="our-blog bgc-f7 pb30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>{articleTips.heading[lang]}</h2>
                  <p>{articleTips.text[lang]}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <Blogs />
            </div>
          </div>
        </section>

        {/* <!-- Our Partners --> */}
        {/* <section id="our-partners" className="our-partners">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>{ourPartners.heading[lang]}</h2>
                  <p>{ourPartners.text[lang]}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <Partners />
            </div>
          </div>
        </section> */}

        {/* <!-- Start Call to Action --> */}
        {/* <section className="start-partners bgc-thm pt50 pb50">
          <div className="container">
            <CallToAction />
          </div>
        </section> */}

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

export default Index;
