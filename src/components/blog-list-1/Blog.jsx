import Link from "next/link";
import { useSelector } from "react-redux";
import {blogs} from "../../data/blogs";

const Blog = () => {
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      {blogs.slice(0, 9).map((item) => (
        <div className="for_blog feat_property" key={item.id[[lang]]}>
          <div className="thumb">
            <Link href={`/blog-details/${item.id[lang]}`}>
              <a>
                <img className="img-whp" src={item.img[lang]} alt={item.img[lang]} />
              </a>
            </Link>
            <div className="blog_tag">{item.postMeta[lang]}</div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <h4 className="mb15">
                <Link href={`/blog-details/${item.id[lang]}`}>
                  <a>{item.title[lang]}</a>
                </Link>
              </h4>
              <p>{item.postDescriptions[lang].slice(0, 285)}</p>
            </div>
            {/* End .tc_content */}

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
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-calendar pr10"></span>{" "}
                    {item.postedDate[lang]}
                  </a>
                </li>
              </ul>
              <a className="fp_pdate float-end text-thm" href="#">
                Read More <span className="flaticon-next"></span>
              </a>
            </div>
            {/* End fb_footer */}
          </div>
          {/* End .thumb */}
        </div>
      ))}
    </>
  );
};

export default Blog;
