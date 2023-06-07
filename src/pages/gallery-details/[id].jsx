import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
import Footer from "../../components/common/footer/Footer";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import { gallerys } from "../../data/gallery";
import { useSelector } from "react-redux";
import { FaBath, FaBed } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

function GalleryDetails() {
  const router = useRouter();
  const id = router.query.id;
  const lang = useSelector((state) => state.lang.value.lang);
  let [gallery, setGallery] = useState(
    gallerys.find((item) => item.id[lang] == id)
  );
  useEffect(() => {
    setGallery(gallerys.find((item) => item.id[lang] == id));
  }, [id]);

  // console.log(gallery);
  return (
    <>
      <div className={lang === "en" ? "en" : "ar"}>
        {/* <!-- Main Header Nav --> */}
        <Header />

        {/* <!--  Mobile Menu --> */}
        <MobileMenu />

        {/* <!-- Modal --> */}
        <PopupSignInUp />
        <section>
          <div className="container">
            <div className="row needmargin">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Image src={gallery?.img[lang]} alt="imagegallery" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h2>{gallery?.title[lang]}</h2>
                <p>{gallery?.address[lang]}</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <FaBath />
                    <p>{gallery?.Beds[lang]} </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <FaBed />
                    <p>{gallery?.bathrooms[lang]} </p>
                  </div>
                </div>
                <p>{gallery?.features1[lang]}</p>
                <p>{gallery?.features2[lang]}</p>
                <p>{gallery?.features3[lang]}</p>
                <p>{gallery?.features4[lang]}</p>
                <p>{gallery?.features5[lang]}</p>
                <p>{gallery?.features6[lang]}</p>
                <p>{gallery?.features7[lang]}</p>
                <p>{gallery?.features8[lang]}</p>
                <p>{gallery?.features9[lang]}</p>
                <p>{gallery?.features10[lang]}</p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0834309933534!2d30.946411599999998!3d29.977032199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145856fa27605d37%3A0x766a95dd7569ad65!2z2KzYp9mF2LnYqSDZpiDYo9mD2KrZiNio2LE!5e0!3m2!1sar!2seg!4v1685967276999!5m2!1sar!2seg"
            width="645"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <section className="footer_one">
          <div className="container">
            <div className="row">
              <Footer />
            </div>
          </div>
        </section>

        {/* <!-- Our Footer Bottom Area --> */}
        <section className="footer_middle_area pt40 pb40">
          <div className="container">
            <CopyrightFooter />
          </div>
        </section>
      </div>
    </>
  );
}

export default GalleryDetails;
