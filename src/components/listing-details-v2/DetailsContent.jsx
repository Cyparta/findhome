import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";

import { realestateforrent } from "../../data/menuData";
import { useSelector } from "react-redux";

const DetailsContent = ({ id, typetofilter }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.listingStyle);
  return (
    <>
      <div className="listing_single_description" key={id}>
        <PropertyDescriptions id={id} typetofilter={realestateforrent} />
      </div>
    </>
  );
};

export default DetailsContent;
