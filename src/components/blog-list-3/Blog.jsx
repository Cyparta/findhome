import Link from "next/link";
import { useSelector } from "react-redux";
import { blogs, blogsLinks } from "../../data/blogs";
import { useEffect, useState } from "react";
import Pagination from "../common/blog/Pagination";

const Blog = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const [blogfilter, setBlogfilter] = useState(blogs[0]);

  const [change, setChange] = useState(false);
  function filterBlog(e, stringname) {
    e.preventDefault();
    const key = document.querySelectorAll(".key");
    key.forEach((item) => {
      item.classList.remove("active");
    });

    e.target.classList.add("active");
    blogs.filter((item) => {
      item.title[lang].includes(stringname) && setBlogfilter(item);
    });
    console.log(blogfilter);

    setChange(!change);
    // setBlogfilter(result);
    // console.log(result, "result");
  }
  function filterBlog2(e, stringname) {
    e.preventDefault();
    const key = document.querySelectorAll(".key");
    key.forEach((item) => {
      item.classList.remove("active");
    });

    e.target.parentNode.classList.add("active");
    blogs.filter((item) => {
      item.title[lang].includes(stringname) && setBlogfilter(item);
    });
    console.log(blogfilter);

    setChange(!change);
    // setBlogfilter(result);
    // console.log(result, "result");
  }
  useEffect(() => {}, []);
  return (
    <>
      <div className="">
        <ul className="styleul row">
          {blogsLinks.map((item, index) => {
            return (
              <div className=" col-md-4 col-lg-4 col-sm-12">
                <li
                  key={item.id[lang]}
                  className={index == 0 ? "active key" : "key"}
                >
                  <a
                    onClick={(e) => filterBlog2(e, item.id[lang])}
                    className="key"
                    style={{ cursor: "pointer" }}
                  >
                    {item.id[lang]}
                  </a>
                </li>
              </div>
            );
          })}
          {/* <li>
          <Link></Link>Contracting
        </li>
        <li>real estate</li>
        <li>Decorations</li> */}
        </ul>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12" key={blogfilter.id[lang]}>
        <div className="for_blog feat_property">
          <div className="thumb">
            <Link href={`/blog-details/${blogfilter.id[lang]}`}>
              <a>
                <img
                  className="img-whp"
                  src={blogfilter.img[lang]}
                  alt={blogfilter.img[lang]}
                />
              </a>
            </Link>
            <div className="blog_tag">{blogfilter.postMeta[lang]}</div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <h4 className="mb15">
                <Link href={`/blog-details/${blogfilter.id[lang]}`}>
                  <a>{blogfilter.title[lang]}</a>
                </Link>
              </h4>
              <ul className="bpg_meta mb10">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="flaticon-calendar"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">{blogfilter.postedDate[lang]}</a>
                </li>
              </ul>
              <p>{blogfilter.postDescriptions[lang].slice(0, 65)}</p>
            </div>
            {/* End .tc_content */}
          </div>
          {/* End .thumb */}
        </div>
      </div>
    </>
  );
};

export default Blog;
