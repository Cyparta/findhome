import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";

import { decoration } from "../../data/menuData";
import { useSelector } from "react-redux";

const DetailsContent = ({ id, typetofilter }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.listingStyle);
  return (
    <>
      <div className="listing_single_description">
        <PropertyDescriptions id={id} typetofilter={decoration} />
      </div>
    </>
  );
};

export default DetailsContent;
