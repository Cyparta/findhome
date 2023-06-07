import { useSelector } from "react-redux";
import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar from "../../common/listing/FilterTopBar";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing from "../../common/listing/SidebarListing";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";

const index = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  return (
    <>
      <div className={lang}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />

        {/* <!-- Listing Grid View --> */}
        <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <BreadCrumb2 />
              </div>
              {/* End .col */}

              {/* End .col filter grid list */}
            </div>
            {/* End Page Breadcrumb and Grid,List and filter Button */}

            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12">
                <div className="grid_list_search_result w-100">
                  <div className="row align-items-center">
                    <FilterTopBar />
                  </div>
                </div>
                {/* End .row */}

                {/* End .row */}
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 row">
                <FeaturedItem />
              </div>
              {/* End .row */}

              {/* <div className="col-md-12 col-lg-12 col-sm-12 row">
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <Pagination />
                  </div>
                </div>
              </div> */}
              {/* End  page conent */}
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

export default index;
