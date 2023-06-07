import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";

const FilterTopBar2 = () => {
  const { length } = useSelector((state) => state.properties);
  const { statusType, featured } = useSelector((state) => state.filter);
  const [getStatus, setStatus] = useState(statusType);
  const [getFeatured, setFeatured] = useState(featured);

  //selector
  const lang = useSelector(state => state.lang.value.lang)
  const {status, sortBy} = useSelector(state=> state.lang.value.listingMap)
  const main = useSelector(state => state.lang.value.agent.topFilter)
  
  const dispatch = useDispatch();

  // add status
  useEffect(() => {
    dispatch(addStatusType(getStatus));
  }, [dispatch, addStatusType, getStatus]);

  // add featured
  useEffect(() => {
    dispatch(addFeatured(getFeatured));
  }, [dispatch, addFeatured, getFeatured]);

  // clear filter
  useEffect(() => {
    statusType === "" && setStatus("");
    featured === "" && setFeatured("");
  }, [statusType, setStatus, featured, setFeatured]);

  return (
    <>
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-5">
        <div className="left_area tac-xsd">
          <p>
            <span className={length === 0 ? "text-danger" : undefined}>
              {length}{" "}
            </span>
            {length !== 0 ? (
              `${main.search[lang]}`
            ) : (
              <span className="text-danger">Not found results</span>
            )}
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
        <div className="right_area text-end tac-xsd">
          <ul>
            <li className="list-inline-item">
              <span className="stts">{status.heading[lang]}</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setStatus(e.target.value)}
                value={getStatus}
              >
                <option value="">{status.opt[lang]}</option>
                <option value="old">{status.opt2[lang]}</option>
                <option value="recent">{status.opt3[lang]}</option>
              </select>
            </li>
            <li className="list-inline-item">
              <span className="shrtby">{sortBy.heading[lang]}</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setFeatured(e.target.value)}
                value={getFeatured}
              >
                <option value="">{sortBy.opt[lang]}</option>
                <option value="sale">{sortBy.opt2[lang]}</option>
                <option value="rent">{sortBy.opt3[lang]}</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default FilterTopBar2;
