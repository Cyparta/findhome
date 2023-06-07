import Link from "next/link";
import { useSelector } from "react-redux";

const TermsCondions = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {terms} = useSelector(state => state.lang.value)
  const termsContent = [
    {
      id: { en: 1, ar: 1 },
      title: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
      text1: {
        en: `Curabitur massa magna, tempor in blandit id, porta in ligula.
      Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.
      Mauris risus lectus, tristique at nisl at, pharetra tristique
      enim.`,
        ar: `طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية`,
      },
      text2: {
        en: `Nullam this is a link nibh facilisis, at malesuada orci congue.
      Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat eu
      varius malesuada, pulvinar eu ligula. Ut et adipiscing erat.
      Curabitur adipiscing erat vel libero tempus congue. Nam pharetra
      interdum vestibulum. Aenean gravida mi non aliquet porttitor.
      Praesent dapibus, nisi a faucibus tincidunt, quam dolor
      condimentum metus, in convallis libero ligula ut`,
        ar: `لوريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية.`,
      },
    },
    {
      id: { en: 1, ar: 1 },
      title: { en: "Our Terms", ar: "شروطنا" },
      text1: {
        en: `Curabitur massa magna, tempor in blandit id, porta in ligula.
      Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.
      Mauris risus lectus, tristique at nisl at, pharetra tristique
      enim.`,
        ar: `طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية`,
      },
      text2: {
        en: `Nullam this is a link nibh facilisis, at malesuada orci congue.
      Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat eu
      varius malesuada, pulvinar eu ligula. Ut et adipiscing erat.
      Curabitur adipiscing erat vel libero tempus congue. Nam pharetra
      interdum vestibulum. Aenean gravida mi non aliquet porttitor.
      Praesent dapibus, nisi a faucibus tincidunt, quam dolor
      condimentum metus, in convallis libero ligula ut`,
        ar: `لوريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة النهائية.`,
      },
    },
  ];

  const navigationList = [
    { id: {en: 1, ar: 1}, routeLink: {en: "#", ar: "#"}, name: {en: "Welcome Text", ar: "نص ترحيبي"} },
    { id: {en: 2, ar: 2}, routeLink: {en: "#", ar: "#"}, name: {en: "Our Terms", ar: "شروطنا"} },
    { id: {en: 3, ar: 3}, routeLink: {en: "#", ar: "#"}, name: {en: "Conditions", ar: "الظروف"} },
    { id: {en: 4, ar: 4}, routeLink: {en: "#", ar: "#"}, name:{en:  "Your Privacy" , ar:  "خصوصيتك" }},
    { id: {en: 5, ar: 5}, routeLink: {en: "#", ar: "#"}, name: {en: "Informations We Collect", ar: "المعلومات التي نجمعها"} },
  ];

  return (
    <div className="row">
      <div className="col-lg-8 col-xl-8">
        <div className="terms_condition_grid">
          {termsContent.map((item,index) => (
            <div className="grids mb30" key={item.id[lang]}>
              <h4>{item.title[lang]}</h4>
              <p className="mb20">{item.text1[lang]}</p>
              <p>{item.text2[lang]}</p>
            </div>
          ))}
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="terms_condition_widget">
          <h4 className="title">{terms[lang]}</h4>
          <div className="widget_list">
            <ul className="list_details">
              {navigationList.map((list) => (
                <li key={list.id[lang]}>
                  <Link href={list.routeLink[lang]}>
                    <a>
                      <i className="fa fa-caret-right mr10"></i>
                      {list.name[lang]}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondions;
