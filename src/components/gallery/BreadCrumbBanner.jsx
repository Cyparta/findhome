import BreadCrumb from "../common/BreadCrumb";
import { useSelector } from "react-redux";

const BreadCrumbBanner = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {gallery} = useSelector(state => state.lang.value.pages)
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb title={gallery[lang]} />
              <h4 className="breadcrumb_title">{gallery[lang]}</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
