import Link from "next/link";
import { useSelector } from "react-redux";

const CopyrightFooter = () => {
  let lang = useSelector((state) => state.lang.value.lang);
  let datatranslate = [
    {
      id: { en: 1, ar: 1 },
      role: {
        en: " All rights reserved to Dar Farha Real Estate Development",
        ar: "جميع الحقوق محفوظة لاجل دار فرحة للتطوير العقــارى",
      },
    },
  ];
  return (
    <div className="row">
      {/* End .col */}

      <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
        <div className="copyright-widget text-center">
          <p>
            &copy; {new Date().getFullYear()}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            ></a>
            {datatranslate[0].role[lang]}
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
