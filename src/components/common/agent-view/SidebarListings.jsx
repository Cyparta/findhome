import { useSelector } from "react-redux";
import Categorie from "../listing/Categorie";
import FeaturedListings from "../listing/FeaturedListings";
import FeatureProperties from "../listing/FeatureProperties";
import FilterSearch from "./FilterSearch";

const SidebarListings = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { find, featured, cate, recently } = useSelector(
    (state) => state.lang.value.agent
  );
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <h4 className="mb25">{find.heading[lang]}</h4>
          <FilterSearch />
        </div>
      </div>
      {/* End filter and search area */}

      {/* <div className="terms_condition_widget style_two-pro">
        <h4 className="title">{featured[lang]}</h4>
        <FeatureProperties />
      </div> */}
      {/* End Featured Properties widget */}

      {/* <div className="terms_condition_widget">
        <h4 className="title">{cate.cate[lang]}</h4>
        <div className="widget_list">
          <ul className="list_details">
            <Categorie />
          </ul>
        </div>
      </div> */}
      {/* End Categories Property widget */}

      {/* <div className="sidebar_feature_listing">
        <h4 className="title">{recently[lang]}</h4>
        <FeaturedListings />
      </div> */}
      {/* End Recently Viewed widget */}
    </div>
  );
};

export default SidebarListings;
