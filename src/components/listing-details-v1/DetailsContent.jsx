import { useSelector } from "react-redux";

import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";

import { buildinghome } from "../../data/menuData";

const DetailsContent = ({ id, typetofilter }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.listingStyle);
  return (
    <>
      <div className={`listing_single_description ${lang}`}>
        <PropertyDescriptions id={id} typetofilter={buildinghome} />
      </div>
    </>
  );
};

export default DetailsContent;
