import { useSelector } from "react-redux";

const TagList = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const tagContent = [
    { id: {en: 1, ar: 1}, name: {en: "Apartment", ar:"شقة"} },
    { id: {en: 2, ar: 2}, name: {en: "Real Estate", ar: "العقارات" }},
    { id: {en: 3, ar: 3}, name: {en: "Estate", ar: "ملكية"} },
    { id: {en: 4, ar: 4}, name: {en: "Luxury", ar: "فخم"} },
    { id: {en: 5, ar: 5}, name: {en: "real", ar: "حقيقي"} },
  ];
  return (
    <ul className="tag_list">
      {tagContent.map((item) => (
        <li className="list-inline-item" key={item.id[lang]}>
          <a href="#">{item.name[lang]}</a>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
