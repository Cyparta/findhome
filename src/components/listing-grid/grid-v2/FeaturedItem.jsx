import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/menuData";
import Pagination from "../../common/blog/Pagination";

const FeaturedItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    price,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
  } = useSelector((state) => state.properties);
  let { data } = useSelector((state) => state.page);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );
  const lang = useSelector((state) => state.lang.value.lang);
  let [result, setResult] = useState(properties.buildinghome);
  const building = useSelector((state) => state.building);
  console.log(building);
  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) =>
    item.title[lang].toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  const locationHandler = (item) => {
    return item.location[lang].toLowerCase().includes(location.toLowerCase());
  };

  // status handler
  const statusHandler = (item) =>
    item.type[lang].toLowerCase().includes(status.toLowerCase());

  // properties handler
  const propertiesHandler = (item) =>
    item.type[lang].toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  const priceHandler = (item) =>
    item.price[lang] < price?.max && item.price > price?.min;

  // bathroom handler
  const bathroomHandler = (item) => {
    if (bathrooms !== "") {
      return item.itemDetails[1].number == bathrooms;
    }
    return true;
  };

  // bedroom handler
  const bedroomHandler = (item) => {
    if (bedrooms !== "") {
      return item.itemDetails[0].number == bedrooms;
    }
    return true;
  };

  // garages handler
  const garagesHandler = (item) =>
    garages !== ""
      ? item.garages?.toLowerCase().includes(garages.toLowerCase())
      : true;

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  const areaHandler = (item) => {
    if (area.min !== 0 && area.max !== 0) {
      if (area.min !== "" && area.max !== "") {
        return (
          parseInt(item.itemDetails[2].number) > area.min &&
          parseInt(item.itemDetails[2].number) < area.max
        );
      }
    }
    return true;
  };

  // advanced option handler
  const advanceHandler = (item) => {
    if (amenities.length !== 0) {
      return amenities.find((item2) =>
        item2.toLowerCase().includes(item.amenities.toLowerCase())
      );
    }
    return true;
  };

  // status filter
  const statusTypeHandler = (a, b) => {
    if (statusType === "recent") {
      return a.created_at + b.created_at;
    } else if (statusType === "old") {
      return a.created_at - b.created_at;
    } else if (statusType === "") {
      return a.created_at + b.created_at;
    }
  };

  // featured handler
  const featuredHandler = (item) => {
    if (featured !== "") {
      return item.featured === featured;
    }
    return true;
  };

  // status handler
  let content = data[0]?.map((item) => (
    <>
      <div
        className={`${
          isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
        } `}
        key={item.id[lang] && item.id[lang]}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb">
            <img
              className="img-whp"
              src={item.img && item.img[lang]}
              alt="fp1.jpg"
            />
          </div>
          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type[lang]}</p>
              <h4>
                <Link href={`/listing-details-v2/${item.id[lang]}`}>
                  <a>{item.title[lang]}</a>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  ));

  // add length of filter items
  useEffect(() => {
    // console.log(lang, building, "building");
    dispatch(addLength(properties.realestateforrent.length));
  }, [dispatch, addLength, content, building]);

  return (
    <>
      {content}
      <Pagination itemsPerPage={3} data={properties.realestateforrent} />
    </>
  );
};

export default FeaturedItem;
