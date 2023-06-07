import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import MyAccount from "./MyAccount";

const HeaderMenuContent = ({ float = "" }) => {
  const route = useRouter();

  // useSELECTOR
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.pages);
  const person = useSelector((state) => state.lang.value.person);

  const home = [
    {
      id: 1,
      name: { en: "Home 1", ar: "الصفحة الرئيسية 1" },
      routerPath: "/",
    },
    {
      id: 2,
      name: { en: "Home 2", ar: "الصفحة الرئيسية 2" },
      routerPath: "/home-2",
    },
    {
      id: 3,
      name: { en: "Home 3", ar: "الصفحة الرئيسية 3" },
      routerPath: "/home-3",
    },
    {
      id: 4,
      name: { en: "Home 4", ar: "الصفحة الرئيسية 4" },
      routerPath: "/home-4",
    },
    {
      id: 5,
      name: { en: "Home 5", ar: "الصفحة الرئيسية 5" },
      routerPath: "/home-5",
    },
    {
      id: 6,
      name: { en: "Home 6", ar: "الصفحة الرئيسية 6" },
      routerPath: "/home-6",
    },
    {
      id: 7,
      name: { en: "Home 7", ar: "الصفحة الرئيسية 7" },
      routerPath: "/home-7",
    },
    {
      id: 8,
      name: { en: "Home 8", ar: "الصفحة الرئيسية 8" },
      routerPath: "/home-8",
    },
    {
      id: 9,
      name: { en: "Home 9", ar: "الصفحة الرئيسية 9" },
      routerPath: "/home-9",
    },
    {
      id: 10,
      name: { en: "Home 10", ar: "الصفحة الرئيسية 10" },
      routerPath: "/home-10",
    },
  ];

  const listing = [
    {
      id: 1,
      title: { en: "Listing Grid", ar: "قائمة الشبكة" },
      items: [
        {
          name: { en: "Grid v1", ar: "الشبكة 1" },
          routerPath: "/listing-grid-v1",
        },
        {
          name: { en: "Grid v2", ar: "الشبكة 2" },
          routerPath: "/listing-grid-v2",
        },
        {
          name: { en: "Grid v3", ar: "الشبكة 3" },
          routerPath: "/listing-grid-v3",
        },
        {
          name: { en: "Grid v4", ar: "الشبكة 4" },
          routerPath: "/listing-grid-v4",
        },
        {
          name: { en: "Grid v5", ar: "الشبكة 5" },
          routerPath: "/listing-grid-v5",
        },
        {
          name: { en: "Grid v1", ar: "الشبكة 1" },
          routerPath: "/listing-grid-v6",
        },
      ],
    },
    {
      id: 2,
      title: { en: "Listing List", ar: "قائمة" },
      items: [
        {
          name: { en: "List v1", ar: "قائمة v1" },
          routerPath: "/listing-list-v1",
        },
      ],
    },
    {
      id: 3,
      title: { en: "Listing Style", ar: "نمط القائمة" },
      items: [
        {
          name: { en: "Parallax Style", ar: "نمط المنظر" },
          routerPath: "/parallax-style",
        },
        {
          name: { en: "Slider Style", ar: "نمط المنزلق" },
          routerPath: "/slider-style",
        },
        {
          name: { en: "Map Header", ar: "رأس الخريطة" },
          routerPath: "/map-header",
        },
      ],
    },
    {
      id: 4,
      title: { en: "Listing Half", ar: "نصف القائمة" },
      items: [
        {
          name: { en: "Map V1", ar: "الخريطة V1" },
          routerPath: "/listing-map-v1",
        },
        {
          name: { en: "Map V2", ar: "الخريطة V2" },
          routerPath: "/listing-map-v2",
        },
        {
          name: { en: "Map V3", ar: "الخريطة V3" },
          routerPath: "/listing-map-v3",
        },
        {
          name: { en: "Map V4", ar: "الخريطة V4" },
          routerPath: "/listing-map-v4",
        },
      ],
    },
    {
      id: 5,
      title: { en: "Agent View", ar: "عرض الوكيل" },
      items: [
        {
          name: { en: "Agent V1", ar: "العامل V1" },
          routerPath: "/agent-v1",
        },
        {
          name: { en: "Agent V2", ar: "العامل V2" },
          routerPath: "/agent-v2",
        },
        {
          name: { en: "Agent Details", ar: "تفاصيل الوكيل" },
          routerPath: "/agent-details",
        },
      ],
    },
    {
      id: 6,
      title: { en: "Agencies View", ar: "عرض الوكالات" },
      items: [
        {
          name: { en: "Agencies V1", ar: "الوكالات V1" },
          routerPath: "/agency-v1",
        },
        {
          name: { en: "Agencies V2", ar: "الوكالات V2" },
          routerPath: "/agency-v2",
        },
        {
          name: { en: "Agencies Details", ar: "تفاصيل الوكالات" },
          routerPath: "/agency-details",
        },
      ],
    },
  ];

  const property = [
    {
      id: 1,
      title: { en: "User Admin", ar: "مسؤول المستخدم" },
      items: [
        {
          name: { en: "Dashboard", ar: "لوحة" },
          routerPath: "/my-dashboard",
        },
        {
          name: { en: "My Properties", ar: "خصائصي" },
          routerPath: "/my-properties",
        },
        {
          name: { en: "My Message", ar: "رسالتي" },
          routerPath: "/my-message",
        },
        {
          name: { en: "My Review", ar: "تقييمي" },
          routerPath: "/my-review",
        },
        {
          name: { en: "My Favourites", ar: "المفضلة" },
          routerPath: "/my-favourites",
        },
        {
          name: { en: "My Profile", ar: "ملفي" },
          routerPath: "/my-profile",
        },
        {
          name: { en: "My Package", ar: "حزمة" },
          routerPath: "/my-package",
        },
        {
          name: { en: "My Saved Search", ar: "بحثي المحفوظ" },
          routerPath: "/my-saved-search",
        },
        {
          name: { en: "Add Property", ar: "إضافة خاصية" },
          routerPath: "/create-listing",
        },
      ],
    },
    {
      id: 2,
      title: { en: "Listing Single", ar: "قائمة واحدة" },
      items: [
        {
          name: { en: "Single V1", ar: "واحد V1" },
          routerPath: "/listing-details-v1",
        },
        {
          name: { en: "Single V2", ar: "واحد V2" },
          routerPath: "/listing-details-v2",
        },
        {
          name: { en: "Single V3", ar: "واحد V3" },
          routerPath: "/listing-details-v3",
        },
        {
          name: { en: "Single V4", ar: "واحد V4" },
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];

  const blog = [
    {
      id: 1,
      name: { en: "Blog List 1", ar: "قائمة المقالات 1" },
      routerPath: "/blog-list-1",
    },
    {
      id: 2,
      name: { en: "Blog List 2", ar: "قائمة المقالات 2" },
      routerPath: "/blog-list-2",
    },
    {
      id: 3,
      name: { en: "Blog List 3", ar: "قائمة المقالات 3" },
      routerPath: "/blog-list-3",
    },
    {
      id: 4,
      name: { en: "Blog Details", ar: "تفاصيل المقالات" },
      routerPath: "/blog-details",
    },
  ];

  const pages = [
    {
      id: 1,
      name: { en: "About Us", ar: "معلومات عنا" },
      routerPath: "/about-us",
    },
    { id: 2, name: { en: "Gallery", ar: "الصور" }, routerPath: "/gallery" },
    { id: 3, name: { en: "Faq", ar: "التعليمات" }, routerPath: "/faq" },
    { id: 4, name: { en: "LogIn", ar: "تسجيل الدخول" }, routerPath: "/login" },
    { id: 5, name: { en: "compare", ar: "يقارن" }, routerPath: "/compare" },
    {
      id: 6,
      name: { en: "Membership", ar: "عضوية" },
      routerPath: "/membership",
    },

    { id: 7, name: { en: "Register", ar: "يسجل" }, routerPath: "/register" },
    { id: 8, name: { en: "Service", ar: "خدمة" }, routerPath: "/service" },
    { id: 9, name: { en: "404 Page", ar: "404 صفحة" }, routerPath: "/404" },
    {
      id: 10,
      name: { en: "Terms & Conditions", ar: "البنود و الظروف" },
      routerPath: "/terms",
    },
  ];

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <a
          href="/"
          className={
            home.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">{main.home[lang]}</span>
          {/* <span className="arrow"></span> */}
        </a>
        {/* <!-- Level Two--> */}

        <ul className="sub-menu ">
          {home.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name[lang]}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            listing.some((parent) => {
              return parent.items.some(
                (page) => page.routerPath === route.pathname
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">{main.listing[lang]}</span>
          <span className="arrow"></span>
        </a>
        {/* <!-- Level Two--> */}
        <ul className="sub-menu ">
          {listing.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some((page) => page.routerPath === route.pathname)
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title[lang]}
              </a>
              {/* <!-- Level Three--> */}
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link href={val.routerPath}>
                      <a
                        className={
                          route.pathname === val.routerPath
                            ? "ui-active"
                            : undefined
                        }
                      >
                        {val.name[lang]}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            property.some((parent) => {
              return parent.items.some(
                (page) =>
                  page.routerPath === route.pathname ||
                  page.routerPath + "/[id]" === route.pathname
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">{main.property[lang]}</span>{" "}
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {property.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some(
                    (page) =>
                      page.routerPath === route.pathname ||
                      page.routerPath + "/[id]" === route.pathname
                  )
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title[lang]}
              </a>
              {/* <!-- Level Three--> */}
              <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link href={val.routerPath}>
                      <a
                        className={
                          route.pathname === val.routerPath ||
                          val.routerPath + "/[id]" === route.pathname
                            ? "ui-active"
                            : undefined
                        }
                      >
                        {val.name[lang]}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            pages.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">{main.pagesHead[lang]}</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {pages.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ? "ui-active" : undefined
                  }
                >
                  {item.name[lang]}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            blog.some(
              (page) =>
                page.routerPath === route.pathname ||
                page.routerPath + "/[id]" === route.pathname
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">{main.blog[lang]}</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {blog.map((item) => (
            <li key={item.id}>
              <Link href={item.routerPath}>
                <a
                  className={
                    route.pathname === item.routerPath ||
                    item.routerPath + "/[id]" === route.pathname
                      ? "ui-active"
                      : undefined
                  }
                >
                  {item.name[lang]}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link href="/contact">
          <a
            className={route.pathname === "/contact" ? "ui-active" : undefined}
          >
            {main.contact[lang]}
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="user_setting">
        <div className="dropdown">
          <a className="btn dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <img
              className="rounded-circle"
              src="/assets/images/team/e1.png"
              alt="e1.png"
            />
            <span className="dn-1199 ms-1">{person[lang]}</span>
          </a>
          <div className="dropdown-menu">
            <MyAccount />
          </div>
        </div>
      </li>
      {/* End ."user_setting */}

      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/create-listing">
          <a>
            <span className="flaticon-plus"></span>
            <span className="dn-lg"> {main.createListing[lang]}</span>
          </a>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
