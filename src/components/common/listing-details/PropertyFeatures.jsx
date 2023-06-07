import { useSelector } from "react-redux";

const PropertyFeatures = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const propertyFeatures = [
    {
      id: 1,
      list: [{en: "air condition", ar: "تكيف"}, {en: "Lawn", ar: "العشب"}],
    },
    {
      id: 2,
      list: [{en: "Swimming Pool", ar: "حمام السباحة"}],
    },
    {
      id: 3,
      list: [{en: "list", ar: "تكيف"}],
    },
  ];
  return (
    <>
      {propertyFeatures.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <ul className="order_list list-inline-item">
            {item.list.map((val, i) => (
              <li key={i}>
                <span className="flaticon-tick"></span>
                {val[lang]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
