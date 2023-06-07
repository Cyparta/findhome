import Pagination from "../common/blog/Pagination";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";
import { useSelector } from "react-redux";

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

        {/* <!-- Main Blog Post Content --> */}
        <section className="blog_post_container bgc-f7">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <BreadCrumbBlog />
              </div>
            </div>
            {/* End .row */}

            <Blog />
            {/* End blog item */}
          </div>
          {/* End .row */}

          {/* End .row */}

          {/* End .col */}

          {/* End .row */}

          {/* End .container */}
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
