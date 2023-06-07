import React, { useState } from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleLang } from "../../features/lang/langSlice";

const LangBtn = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const [toggleLangto, setToggle] = useState(lang);

  const dispatch = useDispatch();
  const handleToggleLangto = (e) => {
    localStorage.setItem("lang", e.target.value);
    setToggle(localStorage.getItem("lang"));
    dispatch(toggleLang(localStorage.getItem("lang")));
  };

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    document.querySelector("body").setAttribute("className", lang);
    setToggle(lang);
  }, [toggleLangto, lang]);
  return (
    <li className="list-inline-item add_listing" style={{ width: "100px" }}>
      <select
        id="valueneed"
        name="country"
        className="theme-btn"
        value={toggleLangto}
        onChange={(e) => handleToggleLangto(e)}
      >
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
      {/* <a href="#">{toggleLangto === "en" ? "ar" : "en"} </a> */}
    </li>
  );
};

export default LangBtn;
