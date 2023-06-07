import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderMenuContent from "../common/header/HeaderMenuContent";
import logo from "../../../public/assets/images/logo/logo.png";
import Image from "next/image";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.pages);
  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu  ${
        navbar ? "stricky-fixed " : "stricky-fixed"
      }`}
    >
      <div className="container-fluid p0">
        {/* <!-- Ace Responsive Menu --> */}

        <Link href="/">
          <a className=" float-start dn-smd">
            <Image
              className="logo2 "
              src={logo}
              alt="header-logo.png"
              width={100}
              height={100}
            />
          </a>
        </Link>
        {/* site logo brand */}
        <nav>
          <HeaderMenuContent main={main} lang={lang} />
        </nav>
        {/* End .navbar */}
      </div>
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
