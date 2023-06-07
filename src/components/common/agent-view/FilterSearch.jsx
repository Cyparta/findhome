import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addCity,
  addListen,
  addName,
} from "../../../features/agent/agentSlice";

const FilterSearch = () => {
  const { name, category, city } = useSelector((state) => state.agent) || {};
  const [getName, setName] = useState(name);
  const [getCategory, setCategory] = useState(category);
  const [getCity, setCity] = useState(city);
  const [isSelected, setSelected] = useState(false);
  const lang = useSelector((state) => state.lang.value.lang);
  const { find } = useSelector((state) => state.lang.value.agent);

  const dispatch = useDispatch();

  // name
  useEffect(() => {
    dispatch(addName(getName));
    // console.log(getName);
  }, [dispatch, addName, getName]);

  // category
  useEffect(() => {
    dispatch(addCategory(getCategory));
    // console.log(getCategory);
  }, [dispatch, addCategory, getCategory]);

  // city
  useEffect(() => {
    dispatch(addCity(getCity));
  }, [dispatch, addCity, getCity]);

  const clearHandler = () => {
    setName("");
    setCategory("");
    setCity("");
    dispatch(addListen(""));
  };
 
  return (
    <ul className="sasw_list mb0">
      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder={find.agentName[lang]}
            onChange={(e) => getvalueofinput(e.target.value, setName)}
            value={getName}
          />
        </div>
      </li>
      {/* End .search_area */}

      <li>
        <div className="search_option_two mb-3">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => getvalueofinput(e.target.value, setCategory)}
              className="selectpicker w100 show-tick form-select"
            >
              <option value="">{find.cate[lang]}</option>
              <option>{find.cate1[lang]}</option>
              <option>{find.cate2[lang]}</option>
            </select>
          </div>
        </div>
      </li>
      {/* End Categories search_area */}

      <li>
        <div className="search_option_two mb-3">
          <div className="candidate_revew_select">
            <select
              onChange={(e) => getvalueofinput(e.target.value, setCity)}
              className="selectpicker w100 show-tick form-select"
            >
              <option value="">{find.cities[lang]}</option>
              <option>{find.cities1[lang]}</option>
              <option>{find.cities2[lang]}</option>
              <option>{find.cities3[lang]}</option>
              <option>{find.cities4[lang]}</option>
              <option>{find.cities5[lang]}</option>
              <option>{find.cities6[lang]}</option>
            </select>
          </div>
        </div>
      </li>
      {/* End City search_area */}

      <li>
        <div className="search_option_button">
          <button
            onClick={clearHandler}
            type="button"
            className="btn btn-block btn-thm w-100"
          >
            {find.clearBtn[lang]}
          </button>
        </div>
      </li>
      {/* End submit serch button */}
    </ul>
  );
};

export default FilterSearch;
