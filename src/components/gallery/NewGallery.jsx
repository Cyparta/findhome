import Link from "next/link";
import React, { useEffect } from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useSelector } from "react-redux";
function NewGallery({ result }) {
  const lang = useSelector((state) => state.lang.value.lang);
  useEffect(() => {
    console.log(result);
  }, []);
  return (
    <Gallery>
      <div className="row">
        {result.map((singleItem) => {
          console.log(result[0]);
          return (
            <div
              className="col-md-6 col-lg-4 col-xl-4"
              key={singleItem.id[lang]}
            >
              <div className="for_blog feat_property">
                <div className="thumb">
                  <a>
                    <img
                      className="img-whp"
                      src={singleItem.img[lang]}
                      alt="bh1.jpg"
                    />
                  </a>
                </div>
                <div className="details">
                  <div className="tc_content">
                    <h3>{singleItem.title[lang]} </h3>
                    <p>{singleItem.address[lang]} </p>
                    <div className="stylebedbath row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <FaBath />
                        <p>{singleItem.Beds[lang]} </p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <FaBed />
                        <p>{singleItem.bathrooms[lang]}</p>
                      </div>
                    </div>
                    <div>{singleItem.price[lang]}</div>
                    <Link
                      href={`/gallery-details/${singleItem.id[lang]}`}
                      className="styleurl"
                    >
                      {singleItem.link[lang]}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Gallery>
  );
}

export default React.memo(NewGallery);
