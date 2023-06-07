import BreadCrumb from "../common/BreadCrumb";
import { useSelector } from "react-redux";
const BreadCrumbBanner = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {terms} = useSelector(state => state.lang.value.pages)
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb title={terms[lang]} />
              <h4 className="breadcrumb_title">{terms[lang]}</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
