import Link from "next/link";
import { useSelector } from "react-redux";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { about, quickLinks, contactUS, followUs } = useSelector(
    (state) => state.lang.value.footer
  );
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>{about.heading[lang]}</h4>
          <p>{about.text[lang]}</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>{quickLinks.heading[lang]}</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>{quickLinks.li1[lang]}</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-grid-v1">
                <a>{quickLinks.li2[lang]}</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-grid-v2">
                <a>{quickLinks.li3[lang]}</a>
              </Link>
            </li>
            <li>
              <Link href="/listing-grid-v3">
                <a>{quickLinks.li4[lang]}</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a>{quickLinks.li5[lang]}</a>
              </Link>
            </li>
            <li>
              <Link href="/blog-list-3">
                <a>{quickLinks.li6[lang]}</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>{quickLinks.li7[lang]}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>{contactUS.heading[lang]}</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@findhouse.com">{contactUS.li1[lang]}</a>
            </li>
            <li>
              <a href="#">{contactUS.li2[lang]}</a>
            </li>

            <li>
              <a href="tel:01050403363">{contactUS.li4[lang]}</a>
            </li>
            <li>
              <a href="tel:01050403364">{contactUS.li5[lang]}</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>{followUs.heading[lang]}</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>{followUs.subscribe[lang]}</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
