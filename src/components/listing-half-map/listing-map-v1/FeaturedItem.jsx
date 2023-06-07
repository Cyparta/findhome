import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";

const FeaturedItem = () => {
  const { keyword, status, bathrooms, bedrooms, yearBuilt, amenities } =
    useSelector((state) => state.properties);
    const lang = useSelector(state => state.lang.value.lang)
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  // keyword filter
  const keywordHandler = (item) =>
    item.title[lang].toLowerCase().includes(keyword?.toLowerCase());

  // status handler
  const statusHandler = (item) =>
    item.type[lang].toLowerCase().includes(status.toLowerCase());

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

  // built years handler
  const builtYearsHandler = (item) =>
    yearBuilt !== "" ? item?.built == yearBuilt : true;

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
  let content = properties
    ?.slice(0, 9)
    ?.filter(keywordHandler)
    ?.filter(statusHandler)
    ?.filter(bathroomHandler)
    ?.filter(bedroomHandler)
    ?.filter(builtYearsHandler)
    ?.filter(advanceHandler)
    ?.sort(statusTypeHandler)
    ?.filter(featuredHandler)
    .map((item) => (
      <div
        className={`${
          isGridOrList ? "col-12 list_map feature-list" : "col-md-6 col-lg-4"
        } `}
        key={item.id[lang]}
      >
        <div
          className={`feat_property home7 style4 ${
            isGridOrList ? "d-flex align-items-center" : undefined
          }`}
        >
          <div className="thumb">
            <img className="img-whp" src={item.img[lang]} alt="fp1.jpg" />
            {/* <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">Featured</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.featured[lang]}
                  </a>
                </li>
              </ul>
              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>

              <Link href={`/listing-details-v1/${item.id}`}>
                <a className="fp_price">
                  ${item.price[lang]}
                  <small>/mo</small>
                </a>
              </Link>
            </div> */}
          </div>
          {/* <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.type[lang]}</p>
              <h4>
                <Link href={`/listing-details-v1/${item.id[lang]}`}>
                  <a>{item.title[lang]}</a>
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {item.location[lang]}
              </p>

              <ul className="prop_details mb0">
                {item.itemDetails.map((val, i) => (
                  <li className="list-inline-item" key={i}>
                    <a href="#">
                      {val.name[lang]}: {val.number[lang]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>
                      <img src={item.posterAvatar[lang]} alt="pposter1.png" />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>{item.posterName[lang]}</a>
                  </Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{item.postedYear[lang]}</div>
            </div>
            {/* End .fp_footer */}
          {/* </div> */}
        </div>
      </div>
    ));

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, addLength, content]);

  return <>{content}</>;
};

export default FeaturedItem;
