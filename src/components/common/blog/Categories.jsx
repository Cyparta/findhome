import { useSelector } from "react-redux";

const Categories = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const categorieContent = [
    { id: {en: 1, ar: 1}, name: {en: "Apartment", ar: "شقة"}, propertyNumber: {en: "6", ar: "6"} },
    { id: {en: 2, ar: 2}, name: {en: "Condo", ar: "شقة"}, propertyNumber: {en: "12", ar: "12"} },
    { id: {en: 3, ar: 3}, name: {en: "Family House", ar: "بيت العائلة"}, propertyNumber: {en: "8", ar: "8"} },
    { id: {en: 4, ar: 4}, name: {en: "Modern Villa", ar: "فيلا مودرن"}, propertyNumber: {en: "26", ar: "26"} },
    { id: {en: 5, ar: 5}, name: {en: "Town House", ar: "تاون هاوس"}, propertyNumber: {en: "89", ar: "89"} },
  ];
  const properties = {en: "properties", ar: "الخصائص"}
  return (
    <ul className="list_details">
      {categorieContent.map((item) => (
        <li key={item.id[lang]}>
          <a href="#">
            <i className="fa fa-caret-right mr10"></i>
            {item.name[lang]}{" "}
            <span className="float-end">{item.propertyNumber[lang]} {properties[lang]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
