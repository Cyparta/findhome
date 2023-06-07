import { useSelector } from "react-redux";

const BreadCrumb = ({ title = "", url = "" }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const pages = useSelector((state) => state.lang.value.pages);

  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href={"/"}>{pages.home[lang]}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href={""}>{title}</a>
        </li>
      </ol>
    </>
  );
};

export default BreadCrumb;
