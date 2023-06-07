import { useSelector } from "react-redux";

const Pricing = () => {
  const pricingContent = [
    {
      id: {en: 1, ar: 1},
      price: {en: "56", ar: "56"},
      title: {en: "Standard Plan", ar: "الخطة القياسية"},
      features: [
        {en: "50 Property Listings", ar: "50 عقار القوائم"},
        {en: "60 Days Availability", ar: "توافر 60 يومًا"},
        {en: "20 Featured Property", ar: "20 خاصية مميزة"},
        {en: "Limited Support", ar: "دعم محدود"},
      ],
      button: {en: "select Package", ar: "حدد الحزمة"}
    },
    {
      id: {en: 2, ar: 2},
      price: {en: "56", ar: "56"},
      title: {en: "Standard Plan", ar: "الخطة القياسية"},
      features: [
        {en: "50 Property Listings", ar: "50 عقار القوائم"},
        {en: "60 Days Availability", ar: "توافر 60 يومًا"},
        {en: "20 Featured Property", ar: "20 خاصية مميزة"},
        {en: "Limited Support", ar: "دعم محدود"},
      ],
      button: {en: "select Package", ar: "حدد الحزمة"}
    },
    {
      id: {en: 3, ar: 3},
      price: {en: "56", ar: "56"},
      title: {en: "Standard Plan", ar: "الخطة القياسية"},
      features: [
        {en: "50 Property Listings", ar: "50 عقار القوائم"},
        {en: "60 Days Availability", ar: "توافر 60 يومًا"},
        {en: "20 Featured Property", ar: "20 خاصية مميزة"},
        {en: "Limited Support", ar: "دعم محدود"},
      ],
      button: {en: "select Package", ar: "حدد الحزمة"}
    },

  ];
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      {pricingContent.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id[lang]}>
          <div className="pricing_table">
            <div className="pricing_header">
              <div className="price">${item.price[lang]}</div>
              <h4>{item.title[lang]}</h4>
            </div>
            <div className="pricing_content">
              <ul className="mb0">
                {item.features.map((val, i) => (
                  <li key={i}>{val[lang]}</li>
                ))}
              </ul>
            </div>
            <div className="pricing_footer">
              <a className="btn pricing_btn btn-block" href="#">
                {item.button[lang]}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
