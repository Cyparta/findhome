import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadCrumb2 from "../../components/blog-details/BreadCrumb2";
import Comments from "../../components/blog-details/Comments";
import Pagination from "../../components/blog-details/Pagination";
import Ratings from "../../components/blog-details/Ratings";
import RelatedPost from "../../components/blog-details/RelatedPost";
import ReviewBox from "../../components/blog-details/ReviewBox";
import BlogSidebar from "../../components/common/blog/BlogSidebar";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Social from "../../components/common/footer/Social";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import Seo from "../../components/common/seo";
import { blogs } from "../../data/blogs";
import { useSelector } from "react-redux";

const BlogDetailsDynamic = () => {
  const router = useRouter();
  const id = router.query.id;
  const lang = useSelector((state) => state.lang.value.lang);

  const [blog, setBlogItem] = useState(blogs.find((ele) => ele.id[lang] == id));
  useEffect(() => {
    setBlogItem(blogs.find((ele) => ele.id[lang] == id));
  }, [id]);

  return (
    <>
      <div className={lang}>
        <Seo pageTitle={"Blog Details"} />
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
                <BreadCrumb2 />
              </div>
            </div>
            {/* End .row */}
            {blog ? (
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="main_blog_post_content">
                    <div className="mbp_thumb_post">
                      <div className="blog_sp_tag">
                        <a href="#">{blog.postMeta[lang]}</a>
                      </div>
                      <h3 className="blog_sp_title">{blog.title[lang]}</h3>
                      <img
                        className="img-whp"
                        src={blog.img[lang]}
                        alt="bh1.jpg"
                      />

                      <div className="details">
                        <h4 className="mb30">{blog.p1[lang]}</h4>
                        <p>{blog.p2[lang]}</p>
                        <h4 className="mb30">{blog.p3[lang]}</h4>
                        <p>{blog.p4[lang]}</p>
                        <p>{blog.p5[lang]}</p>
                      </div>
                    </div>
                    {/* End .mbp_thumb_post */}

                    {/* End mbp_pagination_tab */}
                  </div>
                </div>
                {/* End .col */}

                {/* End Sidebar column */}
              </div>
            ) : (
              ""
            )}

            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        <section className="footer_one">
          <div className="container">
            <div className="row m-0">
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

export default dynamic(() => Promise.resolve(BlogDetailsDynamic), {
  ssr: false,
});
