import Link from "next/link";
import MobileMenuContent from "./MobileMenuContent";
import { useSelector } from "react-redux";

const MobileMenu = () => {
  let lang = useSelector((state) => state.lang.value.lang);
  return (
    // <!-- Main Header Nav For Mobile -->
    <div className="stylehome1 h0 mega-menu-wrapper">
      <div className="mobile-menu">
        <div className="header stylehome1 ">
          <div
            dir={lang == "ar" ? "ltr" : ""}
            className={
              lang === "ar"
                ? "col-lg-12 col-md-6 col-sm-6 h-100 me-auto"
                : "col-lg-12 col-md-6 col-sm-6 h-100 d-flex"
            }
          >
            <img
              className="nav_logo_img img-fluid  h-100 d-flex"
              src="/findhome/assets/images/logo/logo.png"
              alt="header-logo2.png"
            />
          </div>

          {/* main_logo_home2 */}
          <div>
            <ul className="menu_bar_home2">
              <li
                className="list-inline-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMenu"
                aria-controls="offcanvasMenu"
              >
                <a>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
          {/* menu_bar_home2 */}
        </div>
      </div>
      {/* <!-- /.mobile-menu --> */}

      <div
        className={
          lang === "en"
            ? "offcanvas offcanvas-start"
            : "offcanvas offcanvas-end"
        }
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
        data-bs-scroll="true"
      >
        <MobileMenuContent />
      </div>
    </div>
  );
};

export default MobileMenu;
