import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";
import {
  addAmenities,
  addAreaMax,
  addAreaMin,
  addBathrooms,
  addBedrooms,
  addGarages,
  addKeyword,
  addLocation,
  addPrice,
  addPropertyType,
  addStatus,
  addYearBuilt,
  resetAmenities,
} from "../../../features/properties/propertiesSlice";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { buildinghome } from "../../../data/menuData";
import { addbuilding } from "../../../features/building/buildingSlice";
import { useGetBuildingQuery } from "../../../features/building/buildingApi";

const FilteringItem = () => {
  const {
    keyword,
    location,
    status,
    propertyType,
    bathrooms,
    bedrooms,
    garages,
    yearBuilt,
    area,
    amenities,
    price,
  } = useSelector((state) => state.properties);
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.globalListingGrid);
  document.cookie = "cookieName=cookieValue; SameSite=None; Secure";
  // input state
  const [getKeyword, setKeyword] = useState(keyword);
  const [getLocation, setLocation] = useState(location);
  const [getStatus, setStatus] = useState(status);
  // const [getPropertiesType, setPropertiesType] = useState(propertyType);
  const [getBathroom, setBathroom] = useState(bathrooms);
  const [getBedroom, setBedroom] = useState(bedrooms);
  const [getGarages, setGarages] = useState(garages);
  const [getBuiltYear, setBuiltYear] = useState(yearBuilt);
  const [getAreaMin, setAreaMin] = useState(area.min);
  const [getAreaMax, setAreaMax] = useState(area.max);
  const [getPrice, setPrice] = useState(price);

  const dispath = useDispatch();

  const Router = useRouter();

  // keyword
  useEffect(() => {
    dispath(addKeyword(getKeyword));
  }, [dispath, addKeyword, getKeyword]);

  // location
  useEffect(() => {
    dispath(addLocation(getLocation));
  }, [dispath, addLocation, getLocation]);

  // status
  useEffect(() => {
    dispath(addStatus(getStatus));
  }, [dispath, addStatus, getStatus]);

  // properties type
  // useEffect(() => {
  //   dispath(addPropertyType(getPropertiesType));
  // }, [dispath, addPropertyType, getPropertiesType]);

  // bathroom
  useEffect(() => {
    dispath(addBathrooms(getBathroom));
  }, [dispath, addBathrooms, getBathroom]);

  // bedroom
  useEffect(() => {
    dispath(addBedrooms(getBedroom));
  }, [dispath, addBedrooms, getBedroom]);

  // garages
  useEffect(() => {
    dispath(addGarages(getGarages));
  }, [dispath, addGarages, getGarages]);

  // built years
  useEffect(() => {
    dispath(addYearBuilt(getBuiltYear));
  }, [dispath, addYearBuilt, getBuiltYear]);

  // area min
  useEffect(() => {
    dispath(dispath(addAreaMin(getAreaMin)));
  }, [dispath, addAreaMin, getAreaMin]);

  // area max
  useEffect(() => {
    dispath(dispath(addAreaMax(getAreaMax)));
  }, [dispath, addAreaMax, getAreaMax]);

  // clear filter
  const clearHandler = () => {
    clearAllFilters();
  };
  // const [price, setPrice] = useState(10000);
  // const dispath = useDispatch();

  const handleOnChange = (value) => {
    setPrice(value);
    console.log(value);
  };

  // price add to state
  useEffect(() => {
    dispath(addPrice(price));
  }, [dispath, price, addPrice]);
  const clearAllFilters = () => {
    setKeyword("");
    setLocation("");
    setStatus("");
    // setPropertiesType("");
    dispath(addPrice(0));
    setPrice(0);
    setBathroom("");
    setBedroom("");
    setBedroom("");
    setGarages("");
    setBuiltYear("");
    setAreaMin("");
    setAreaMax("");
    dispath(resetAmenities());
    dispath(addStatusType(""));
    dispath(addFeatured(""));
    clearAdvanced();
  };

  // clear advanced
  // const clearAdvanced = () => {
  //   const changed = getAdvanced.map((item) => {
  //     item.isChecked = false;
  //     return item;
  //   });
  //   setAdvanced(changed);
  // };

  // add advanced
  // const advancedHandler = (id) => {
  //   const data = getAdvanced.map((feature) => {
  //     if (feature.id === id) {
  //       if (feature.isChecked) {
  //         feature.isChecked = false;
  //       } else {
  //         feature.isChecked = true;
  //       }
  //     }
  //     return feature;
  //   });

  //   setAdvanced(data);
  // };
  function getvalueofinput(e, needfunctiontochange) {
    needfunctiontochange(e);
    console.log(e);
  }
  function filterHandler() {
    console.log("13000" <= "1300");
    let result = buildinghome.filter((ele) => {
      return (
        ele.title[lang].includes(getKeyword) &&
        (ele.price[lang] <= getPrice || ele.price[lang] > getPrice) &&
        (ele.Baths[lang] <= getBathroom || ele.Baths[lang] > getBathroom) &&
        (ele.Beds[lang] <= getBedroom || ele.Baths[lang] > getBathroom)
      );
    });
    dispath(addbuilding(result));
    console.log(getPrice, getKeyword, getBathroom, getBedroom);
    console.log(result);
  }
  return (
    <ul className="sasw_list mb0">
      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={main.keyword[lang]}
            value={getKeyword}
            onChange={(e) => getvalueofinput(e.target.value, setKeyword)}
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      {/* <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail"
            placeholder={main.location[lang]}
            value={getLocation}
            onChange={(e) => getvalueofinput(e.target.value, setLocation)}
          />
          <label htmlFor="exampleInputEmail">
            <span className="flaticon-maps-and-flags"></span>
          </label>
        </div>
      </li> */}
      {/* End li */}

      {/* <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => getvalueofinput(e.target.value, setStatus)}
              className="selectpicker w100 show-tick form-select"
              value={getStatus}
            >
              <option value="">{main.status.opt[lang]}</option>
              <option value={main.status.opt2[lang]}>
                {main.status.opt2[lang]}
              </option>
              <option value={main.status.opt3[lang]}>
                {main.status.opt3[lang]}
              </option>
              <option value={main.status.opt4[lang]}>
                {main.status.opt4[lang]}
              </option>
              <option value={main.status.opt5[lang]}>
                {main.status.opt5[lang]}
              </option>
              <option value={main.status.opt6[lang]}>
                {main.status.opt6[lang]}
              </option>
              <option value={main.status.opt7[lang]}>
                {main.status.opt7[lang]}
              </option>
            </select>
          </div>
        </div>
      </li> */}
      {/* End li */}

      {/* End li */}

      <li>
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={main.price[lang]}
              value={getPrice.value}
              onChange={(e) => handleOnChange(e.target.value)}
            />
            <label>
              <span className="flaticon-magnifying-glass"></span>
            </label>
          </div>
        </li>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => getvalueofinput(e.target.value, setBathroom)}
              className="selectpicker w100 show-tick form-select"
              value={getBathroom}
            >
              <option value="">{main.bathroom[lang]}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => getvalueofinput(e.target.value, setBedroom)}
              className="selectpicker w100 show-tick form-select"
              value={getBedroom}
            >
              <option value="">{main.bedroom[lang]}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_button mb-4">
          <button
            onClick={filterHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            {main.addBtn[lang]}
          </button>
        </div>
      </li>
      <li>
        <div className="search_option_button">
          <button
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            {main.clearBtn[lang]}
          </button>
        </div>
      </li>
      {/* End li */}
    </ul>
  );
};

export default FilteringItem;
