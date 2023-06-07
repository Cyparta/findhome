import { useSelector } from "react-redux";

const ShowFilter = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const button = {
    en: "Show Filter", ar: "عرض التصفية"
  } 
  return (
    <div id="main2" data-bs-toggle="offcanvas" data-bs-target="#sidebarListing">
      <span
        id="open2"
        className="flaticon-filter-results-button filter_open_btn style2"
      >
        {button[lang]}
      </span>
    </div>
  );
};

export default ShowFilter;
