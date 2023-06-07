import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import Categorie from "../common/listing/Categorie";
import ListingCreator from "../common/listing/ListingCreator";
import FeaturedListings from "../common/listing/FeaturedListings";
import FeatureProperties from "../common/listing/FeatureProperties";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      <div className={lang}>
        <div className="sidebar_listing_list">
          <div className="sidebar_advanced_search_widget">
            <div className="sl_creator">
              <h4 className="mb25">Listed By</h4>
              <ListingCreator />
            </div>
            {/* End .sl_creator */}
            <ContactWithAgent />
          </div>
        </div>
        {/* End .sidebar_listing_list */}

        
        {/* End .Featured Properties */}

        <div className="terms_condition_widget">
          <h4 className="title">Categories Property</h4>
          <div className="widget_list">
            <ul className="list_details">
              <Categorie />
            </ul>
          </div>
        </div>
        {/* End .Categories Property */}

        <div className="sidebar_feature_listing">
          <h4 className="title">Recently Viewed</h4>
          <FeaturedListings />
        </div>
        {/* End .Recently Viewed */}
      </div>
    </>
  );
};

export default Sidebar;
