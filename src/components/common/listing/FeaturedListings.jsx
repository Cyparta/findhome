import Link from "next/link";
import { useSelector } from "react-redux";
import featureContent from "../../../data/properties";

const FeaturedListings = () => {
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      {featureContent.slice(0, 3).map((item) => (
        <div className="media d-flex" key={item.id[lang]}>
          <Link href={`/listing-details-v1/${item.id[lang]}`}>
            <a>
              <img
                className="align-self-start me-3"
                src={item.img[lang]}
                alt="featured listing image"
              />
            </a>
          </Link>

          <div className="media-body">
            <h5 className="mt-0 post_title">
              <Link href={`/listing-details-v1/${item.id[lang]}`}>
                <a>{item.title[lang]}</a>
              </Link>
            </h5>
            <Link href={`/listing-details-v1/${item.id[lang]}`}>
              <a>
                {" "}
                ${item.price[lang]}/<small>/mo</small>
              </a>
            </Link>

            <ul className="mb0">
              {item.itemDetails.map((val, i) => (
                <li key={i} className="list-inline-item">
                  {val.name[lang]}:{val.number[lang]} &nbsp;
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
