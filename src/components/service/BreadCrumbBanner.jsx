import { useSelector } from "react-redux";
import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBanner = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {service} = useSelector(state => state.lang.value.pages)
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb title={service[lang]} />
              <h4 className="breadcrumb_title">{service[lang]}</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBanner;
