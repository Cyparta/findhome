import { useSelector } from "react-redux";
import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBlog = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {blog1} = useSelector(state => state.lang.value.pages)
  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={blog1[lang]} />
      <h2 className="breadcrumb_title">{blog1[lang]}</h2>
    </div>
  );
};

export default BreadCrumbBlog;
