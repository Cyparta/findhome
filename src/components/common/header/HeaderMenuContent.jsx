import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import LangBtn from "../../langBtn/LangBtn";
const HeaderMenuContent = ({ float = "" }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.pages);
  const route = useRouter();

  const home = [
    {
      id: 1,
      name: main.home[lang],
      routerPath: "/",
    },
  ];

  const listing = [
    {
      id: 1,
      title: main.grid1[lang],
      routerPath: "/listing-grid-v1",
    },
    {
      id: 2,
      title: main.grid2[lang],
      routerPath: "/listing-grid-v2",
    },
    {
      id: 3,
      title: main.grid3[lang],
      routerPath: "/listing-grid-v3",
    },
  ];

  const property = [
    {
      id: 1,
      title: main.userAdmin[lang],
      items: [
        {
          name: main.dashboard[lang],
          routerPath: "/my-dashboard",
        },
        {
          name: main.properties[lang],
          routerPath: "/my-properties",
        },
        {
          name: main.message[lang],
          routerPath: "/my-message",
        },
        {
          name: main.review[lang],
          routerPath: "/my-review",
        },
        {
          name: main.fav[lang],
          routerPath: "/my-favourites",
        },
        {
          name: main.profile[lang],
          routerPath: "/my-profile",
        },
        {
          name: main.package[lang],
          routerPath: "/my-package",
        },
        {
          name: main.saved[lang],
          routerPath: "/my-saved-search",
        },
        {
          name: main.addProp[lang],
          routerPath: "/create-listing",
        },
      ],
    },
    {
      id: 2,
      title: main.listingSingle[lang],
      items: [
        {
          name: main.single1[lang],
          routerPath: "/listing-details-v1",
        },
        {
          name: main.single2[lang],
          routerPath: "/listing-details-v2",
        },
        {
          name: main.single3[lang],
          routerPath: "/listing-details-v3",
        },
        {
          name: main.single4[lang],
          routerPath: "/listing-details-v4",
        },
      ],
    },
  ];

  const blog = [{ id: 3, name: main.blog3[lang], routerPath: "/blog-list-3" }];

  const pages = [
    // { id: 1, name: main.aboutUs[lang], routerPath: "/about-us" },
    { id: 2, name: main.gallery[lang], routerPath: "/gallery" },
    // { id: 3, name: main.faq[lang], routerPath: "/faq" },
    // { id: 4, name: main.logIn[lang], routerPath: "/login" },
    // { id: 5, name: main.compare[lang], routerPath: "/compare" },
    // { id: 6, name: main.membership[lang], routerPath: "/membership" },

    // { id: 7, name: main.register[lang], routerPath: "/register" },
    // { id: 8, name: main.service[lang], routerPath: "/service" },
    // { id: 9, name: main.error[lang], routerPath: "/404" },
    // { id: 10, name: main.terms[lang], routerPath: "/terms" },
  ];

  return (
    <ul
      id="respMenu"
      className={`ace-responsive-menu text-end d-lg-block d-none ${lang}`}
      data-menu-style="horizontal"
    >
      <li className="dropitem">
        <Link
          href="/"
          className={
            home.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title mx-2 text-capitalize">{main.home[lang]}</span>
          {/* <span className="arrow"></span> */}
        </Link>
        {/* <!-- Level Two--> */}
      </li>
      {/* End .dropitem */}
      {listing.map((ele, index) => {
        return (
          <li className="dropitem" key={index}>
            <Link
              href={ele.routerPath}
              className={
                ele.routerPath === route.pathname ? "ui-active " : undefined
              }
            >
              <span className="title  mx-2 text-capitalize">{ele.title}</span>
              {/* <span className="arrow"></span> */}
            </Link>

            {/* <!-- Level Two--> */}
          </li>
        );
      })}
      {/* End .dropitem */}

      {/* End .dropitem */}

      {/* <li > */}
      {/* <ul className="sub-menu "> */}
      {/* {pages.map( */}
      {/* (item) => ( */}
      {/* console.log(pages[0]), */}
      {/* ( */}
      <li key={pages[0].id} className="dropitem">
        <Link href={pages[0].routerPath}>
          <a
            className={
              pages[0].pathname === pages[0].routerPath
                ? "ui-active  mx-2 text-capitalize"
                : undefined
            }
          >
            {pages[0].name}
          </a>
        </Link>
      </li>
      {/* ) */}
      {/* ) */}
      {/* )} */}
      {/* </ul> */}
      {/* </li> */}
      {/* End .dropitem */}

      <li className="dropitem">
        <Link
          href="/blog-list-3"
          className={
            blog.some(
              (page) =>
                page.routerPath === route.pathname ||
                page.routerPath + "/[id]" === route.pathname
            )
              ? "ui-active  mx-2 text-capitalize"
              : undefined
          }
        >
          <span className="title text-capitalize">{main.blog1[lang]}</span>
          {/* <span className="arrow"></span> */}
        </Link>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link href="/contact">
          <a
            className={
              route.pathname === "/contact"
                ? "ui-active  mx-2 text-capitalize"
                : undefined
            }
          >
            {main.contact[lang]}
          </a>
        </Link>
      </li>
      {/* End .dropitem */}

      {/* End .dropitem */}
      <LangBtn />

      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
