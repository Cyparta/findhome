import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import { home, listing, blog, pages, sign, property } from "../../../data/nav";
import { useSelector } from "react-redux";
import LangBtn from "../../langBtn/LangBtn";

const MobileMenuContent = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.pages);
  const route = useRouter();
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
  const pages = [
    // { id: 1, name: main.aboutUs[lang], routerPath: "/about-us" },
    { id: 2, name: main.gallery[lang], routerPath: "/gallery" },
  ];
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/">
            <a className="sidebar-header-inner">
              <div className="col-lg-12 col-md-6 col-sm-6 h-100">
                <img
                  className="nav_logo_img img-fluid  h-100 d-flex"
                  src="/assets/images/logo/logo.png"
                  alt="header-logo2.png"
                />
              </div>
            </a>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <MenuItem>
            <Link
              href="/"
              className={
                home.some((page) => page.routerPath === route.pathname)
                  ? "ui-active"
                  : undefined
              }
            >
              {/* <li className="dropitem"> */}

              <span className="title">{main.home[lang]}</span>
            </Link>
          </MenuItem>

          {listing.map((ele, index) => {
            return (
              <MenuItem key={index}>
                <ul>
                  <li className="dropitem parent-menu-active">
                    <Link
                      href={ele.routerPath}
                      className={
                        ele.routerPath === route.pathname
                          ? "ui-active"
                          : undefined
                      }
                    >
                      <span className="title">{ele.title}</span>
                    </Link>
                  </li>
                </ul>
              </MenuItem>
            );
          })}
          <MenuItem>
            {/* End Pages Listing */}
            <ul>
              <li key={pages[0].id} className="dropitem">
                <Link href={pages[0].routerPath}>
                  <a
                    className={
                      pages[0].pathname === pages[0].routerPath
                        ? "ui-active"
                        : undefined
                    }
                  >
                    {pages[0].name}
                  </a>
                </Link>
              </li>
            </ul>
          </MenuItem>
          {/* End Pages Property */}
          <MenuItem>
            <ul>
              <li className="dropitem">
                <Link
                  href="/blog-list-3"
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
                  <span className="title">{main.blog1[lang]}</span>
                </Link>
              </li>
            </ul>
          </MenuItem>

          <MenuItem>
            <ul>
              <li className="last">
                <Link href="/contact">
                  <a
                    className={
                      route.pathname === "/contact" ? "ui-active" : undefined
                    }
                  >
                    {main.contact[lang]}
                  </a>
                </Link>
              </li>
            </ul>
          </MenuItem>
        </Menu>
        <LangBtn />
      </SidebarContent>
    </ProSidebar>
  );
};

export default MobileMenuContent;
