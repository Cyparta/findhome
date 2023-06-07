import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";

const FilterTopBar = () => {
  const { length } = useSelector((state) => state.properties);
  const { statusType, featured } = useSelector((state) => state.filter);
  const [getStatus, setStatus] = useState(statusType);
  const [getFeatured, setFeatured] = useState(featured);

  const lang = useSelector((state) => state.lang.value.lang);
  const topFilter = useSelector((state) => state.lang.value.agent.topFilter);

  const main = useSelector((state) => state.lang.value.filterTopBar);

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
          <p style={{ fontSize: "20px" }}>
            <span className={length === 0 ? "text-danger" : undefined}>
              {length}{" "}
            </span>
            {length !== 0 ? (
              `${topFilter.search[lang]}`
            ) : (
              <span className="text-danger">Not found results</span>
            )}
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
        <div
          className={
            lang === "en"
              ? "right_area text-end tac-xsd"
              : "right_area text-start tac-xsd"
          }
        >
          <ul>
            <li className="list-inline-item">
              <span className="stts">{main.statusText[lang]}</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setStatus(e.target.value)}
                value={getStatus}
              >
                <option value="">{main.status.opt[lang]}</option>
                <option value="old">{main.status.opt2[lang]}</option>
                <option value="recent">{main.status.opt3[lang]}</option>
              </select>
            </li>
            <li className="list-inline-item">
              <span className="shrtby">{main.sortBy.sort[lang]}</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setFeatured(e.target.value)}
                value={getFeatured}
              >
                <option value="">{main.sortBy.featured[lang]}</option>
                <option value="sale">{main.sortBy.sale[lang]}</option>
                <option value="rent">{main.sortBy.rent[lang]}</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default FilterTopBar;
