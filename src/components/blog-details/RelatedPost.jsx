import Link from "next/link";
import { useSelector } from "react-redux";
import {blogs}from "../../data/blogs";

const RelatedPost = () => {
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      {blogs.slice(4, 6).map((item) => (
        <div className="col-md-6 col-lg-6" key={item.id[lang]}>
          <div className="for_blog feat_property">
            <div className="thumb">
              <Link href={`/blog-details/${item.id[lang]}`}>
                <a>
                  <img className="img-whp" src={item.img[lang]} alt={item.img[lang]} />
                </a>
              </Link>
            </div>
            <div className="details">
              <div className="tc_content">
                <h4>
                  <Link href={`/blog-details/${item.id[lang]}`}>
                    <a>{item.title}</a>
                  </Link>
                </h4>
                <ul className="bpg_meta">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="flaticon-calendar"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.postedDate[lang]}</a>
                  </li>
                </ul>
                <p>{item.postDescriptions.slice(0, 65)}</p>
              </div>
              {/* End . tc_content */}

              <div className="fp_footer">
                <ul className="fp_meta float-start mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <img src={item.posterAvatar[lang]} alt={item.posterAvatar[lang]} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{item.posterName[lang]}</a>
                  </li>
                </ul>
                <a className="fp_pdate float-end text-thm" href="#">
                  Read More <span className="flaticon-next"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RelatedPost;
