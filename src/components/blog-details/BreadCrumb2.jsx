import { useSelector } from "react-redux";
import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBlog = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {blog4} = useSelector(state => state.lang.value.pages)
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={blog4[lang]} url={blog4[lang]} />
      <h2 className="breadcrumb_title">{blog4[lang]}</h2>
    </div>
  );
};

export default BreadCrumbBlog;
