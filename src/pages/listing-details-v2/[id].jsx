import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import properties from "../../data/properties";
import DetailsContent from "../../components/listing-details-v2/DetailsContent";
import Sidebar from "../../components/listing-details-v1/Sidebar";
import FeatureProperties from "../../components/common/listing/FeatureProperties";
import { realestateforrent } from "../../data/menuData";
import { useSelector } from "react-redux";
// import realestateforrent from "../../data/menuData";
const ListingDynamicDetailsV2 = () => {
  const router = useRouter();
  const [property, setProperty] = useState({});
  const id = router.query.id;
  const lang = useSelector((state) => state.lang.value.lang);
  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setProperty(properties?.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Listing Single Property --> */}
        <section className="single_page_listing_style p0 mt85 md-mt0">
          <FeatureProperties id={id} typetofilter={realestateforrent} />
        </section>

        {/* <!-- Agent Single Grid View --> */}
        <section className="our-agent-single bgc-f7 pb30-991">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <DetailsContent id={id} typetofilter={realestateforrent} />
              </div>
            </div>
            {/* End .row */}
          </div>
        </section>

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

export default ListingDynamicDetailsV2;
