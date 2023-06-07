import { useSelector } from "react-redux";

const MortgageFiltering = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {calc} = useSelector(state => state.lang.value.listingList)
  return (
    <>
      <li className="search_area">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            placeholder={calc.total[lang]}
          />
          <label htmlFor="exampleInputName1">
            <span className="flaticon-money-bag"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputAmount"
            placeholder={calc.down[lang]}
          />
          <label htmlFor="exampleInputAmount">
            <span className="flaticon-money-bag"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputAmount2"
            placeholder={calc.rate[lang]}
          />
          <label htmlFor="exampleInputAmount2">
            <span className="flaticon-percent"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li className="search_area">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputYear"
            placeholder={calc.loan[lang]}
          />
          <label htmlFor="exampleInputYear">
            <span className="flaticon-calendar"></span>
          </label>
        </div>
      </li>
      {/* End li */}

      <li>
        <div className="search_option_two mb-3">
          <div className="candidate_revew_select">
            <select className="selectpicker w100 show-tick  form-select">
              <option>{calc.date.opt[lang]}</option>
              <option>{calc.date.opt2[lang]}</option>
              <option>{calc.date.opt3[lang]}</option>
              <option>{calc.date.opt4[lang]}</option>
              <option>{calc.date.opt5[lang]}</option>
            </select>
          </div>
        </div>
      </li>
      {/* End li */}
      <li>
        <div className="search_option_button style2">
          <button type="submit" className="btn btn-block btn-thm w-100">
            {calc.search[lang]}
          </button>
        </div>
      </li>
    </>
  );
};

export default MortgageFiltering;
