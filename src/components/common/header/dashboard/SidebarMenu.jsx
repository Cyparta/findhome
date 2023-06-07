import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  isParentPageActive,
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";

const SidebarMenu = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const main = useSelector(state => state.lang.value.dashPages)
  const route = useRouter();

  const myProperties = [
    { id: 1, name: "General Elements", route: "/my-properties" },
    { id: 2, name: "Advanced Elements", route: "/my-properties" },
    { id: 3, name: "Editors", route: "/my-properties" },
  ];
  const reviews = [
    { id: 1, name: "My Reviews", route: "/my-review" },
    { id: 2, name: "Visitor Reviews", route: "/my-review" },
  ];
  const manageAccount = [
    {
      id: 1,
      name: {en: "My Package", ar: "حزمة"},
      route: "/my-package",
      icon: "flaticon-box",
    },
    {
      id: 2,
      name: {en: "My Profile", ar: "ملفي"},
      route: "/my-profile",
      icon: "flaticon-user",
    },
    { id: 3, name: {en: "Logout", ar: "تسجيل خروج"}, route: "/login", icon: "flaticon-logout" },
  ];

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
            <a>
              <img
                src="/assets/images/header-logo2.png"
                alt="header-logo2.png"
              />
              <span>FindHouse</span>
            </a>
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/my-dashboard", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-dashboard">
                <a>
                  <i className="flaticon-layers"></i>
                  <span>{main.dashboard[lang]}</span>
                </a>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/create-listing", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/create-listing">
                <a>
                  <i className="flaticon-plus"></i>
                  <span> {main.create[lang]}</span>
                </a>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/my-message", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-message">
                <a>
                  <i className="flaticon-envelope"></i>
                  <span> {main.message[lang]}</span>
                </a>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>{main.manage[lang]}</span>
          <ul>
            <li
              className={`treeview ${
                isParentPageActive(myProperties, route.pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-home"></i> <span>{main.prop[lang]}</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <a>
                        <i className="fa fa-circle"></i> {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* end properties */}

            <li
              className={`treeview ${
                isParentPageActive(reviews, route.pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#review">
                <i className="flaticon-chat"></i>
                <span>{main.reviews[lang]}</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="review">
                {reviews.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <a>
                        <i className="fa fa-circle"></i> {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* End Review */}

            <li
              className={`treeview ${
                isSinglePageActive("/my-favourites", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-favourites">
                <a>
                  <i className="flaticon-magnifying-glass"></i>
                  <span> {main.favorites[lang]}</span>
                </a>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/my-saved-search", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-saved-search">
                <a>
                  <i className="flaticon-magnifying-glass"></i>
                  <span> {main.saved[lang]}</span>
                </a>
              </Link>
            </li>
          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>{main.manageAccount[lang]}</span>
          <ul>
            {manageAccount.map((item) => (
              <li
                className={
                  isSinglePageActive(item.route, route.pathname) ? "active" : ""
                }
                key={item.id}
              >
                <Link href={item.route}>
                  <a>
                    <i className={item.icon}></i> <span>{item.name[lang]}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
