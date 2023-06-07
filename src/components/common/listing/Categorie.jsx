import { useSelector } from "react-redux";

const Categorie = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { cate } = useSelector((state) => state.lang.value.agent);
  
  return (
    <>
      <li>
        <a href="#">
          <i className="fa fa-caret-right mr10"></i>
          {cate.cate1[lang]}{" "}
          <span className="float-end">6 {cate.property[lang]}</span>
        </a>
      </li>
      {/* End li */}

      <li>
        <a href="#">
          <i className="fa fa-caret-right mr10"></i>
          {cate.cate2[lang]}{" "}
          <span className="float-end">12 {cate.property[lang]}</span>
        </a>
      </li>
      {/* End li */}

      <li>
        <a href="#">
          <i className="fa fa-caret-right mr10"></i>
          {cate.cate3[lang]}{" "}
          <span className="float-end">8 {cate.property[lang]}</span>
        </a>
      </li>
      {/* End li */}

      <li>
        <a href="#">
          <i className="fa fa-caret-right mr10"></i>
          {cate.cate4[lang]}{" "}
          <span className="float-end">26 {cate.property[lang]}</span>
        </a>
      </li>
      {/* End li */}

      <li>
        <a href="#">
          <i className="fa fa-caret-right mr10"></i>
          {cate.cate5[lang]}{" "}
          <span className="float-end">89 {cate.property[lang]}</span>
        </a>
      </li>
    </>
  );
};

export default Categorie;
