import { useSelector } from "react-redux";

const WhyChoose = ({ style = "" }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const whyCooseContent = [
    {
      id: { en: "1", ar: "1" },
      icon: { en: "flaticon-high-five", ar: "flaticon-high-five" },
      title: { en: "TRUSTED BY THOUSANDS", ar: "موثوق من قبل الآلاف" },
      descriptions: {
        en: `We use modern technology along with our market knowledge, unsurpassed negotiation and sales skills, professional experience and collaboration to assist you in identifying your desired property and securing the best price and terms, while protecting your interests.We can help you with home preparation and staging including facilitating repairs, so you can net the highest price possible`,
        ar: "نحن نستخدم التكنولوجيا الحديثة جنبًا إلى جنب مع معرفتنا بالسوق ومهارات التفاوض والمبيعات غير المسبوقة والخبرة المهنية والتعاون لمساعدتك في تحديد الممتلكات التي تريدها وتأمين أفضل الأسعار والشروط ، مع حماية اهتماماتك.",
      },
    },
    {
      id: { en: "2", ar: "2" },
      icon: { en: "flaticon-high-five", ar: "flaticon-high-five" },
      title: { en: "OUR TEAM OF PROFESSIONALS ", ar: "فريق المحترفين لدينا" },
      descriptions: {
        en: `has been working together for well over a decade. Our agents, attorneys and mortgage brokers maintain constant flawless communication which ensures high level of reliability. As a valuable addition to our team we frequently use the services of many fine local professionals such as home inspectors, stagers, various contractors, vendors and service providers`,
        ar: "نعمل معًا منذ أكثر من عقد. يحافظ وكلاؤنا والمحامون وسماسرة الرهن العقاري لدينا على اتصال مستمر لا تشوبه شائبة مما يضمن مستوى عالٍ من الموثوقية. كإضافة قيمة لفريقنا ، نستخدم بشكل متكرر خدمات العديد من المهنيين المحليين المتميزين مثل مفتشي المنازل والمشرفين والمقاولين المختلفين والبائعين ومقدمي الخدمات",
      },
    },
    {
      id: { en: "3", ar: "3" },
      icon: { en: "flaticon-high-five", ar: "flaticon-high-five" },
      title: { en: "HOME PRICING ", ar: "تسعير المنزل" },
      descriptions: {
        en: `We take pricing your home very seriously and offer the wisdom and knowledge gained through decades of collective real estate experience. With a careful, in-dept analysis of all of the unique features of your property and the existing market conditions we will expertly advise you on a pricing strategy that creates a clear path towards your goal of a successful home sale.`,
        ar: "نحن نأخذ تسعير منزلك على محمل الجد ونقدم الحكمة والمعرفة المكتسبة من خلال عقود من الخبرة الجماعية في مجال العقارات. من خلال التحليل الدقيق والمتعمق لجميع الميزات الفريدة للممتلكات الخاصة بك وظروف السوق الحالية ، سننصحك بخبرة بشأن إستراتيجية التسعير التي تخلق مسارًا واضحًا نحو هدفك المتمثل في بيع منزل ناجح.",
      },
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id[lang]}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon[lang]}></span>
            </div>
            <div className="details">
              <h4>{item.title[lang]}</h4>
              <p>{item.descriptions[lang]}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
