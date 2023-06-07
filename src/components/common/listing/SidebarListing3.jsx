import { useSelector } from "react-redux";
import Categorie from "./Categorie";
import FeaturedListings from "./FeaturedListings";
import FeatureProperties from "./FeatureProperties";
import MortgageFiltering from "./MortgageFiltering";

const SidebarListing3 = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { calc, featured, cate, recently } = useSelector(
    (state) => state.lang.value.listingList
  );
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="title mb25">{calc.heading[lang]}</h4>
          <ul className="sasw_list mb0">
            <MortgageFiltering />
          </ul>
        </div>
      </div>
      {/* End .sidebar_listing_list */}

      {/* <div className="terms_condition_widget">
        <h4 className="title">{featured.heading[lang]}</h4>
        <div className="sidebar_feature_property_slider">
          <FeatureProperties />
        </div>
      </div> */}
      {/* End .Featured Properties */}

      {/* <div className="terms_condition_widget">
        <h4 className="title">{cate.heading[lang]}</h4>
        <div className="widget_list">
          <ul className="list_details">
            <Categorie />
          </ul>
        </div>
      </div> */}
      {/* End .Categories Property */}

      {/* <div className="sidebar_feature_listing">
        <h4 className="title">{recently[lang]}</h4>
        <FeaturedListings />
      </div> */}
      {/* End .Recently Viewed */}
    </div>
  );
};

export default SidebarListing3;
