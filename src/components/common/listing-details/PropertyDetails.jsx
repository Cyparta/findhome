import { useSelector } from "react-redux";

const PropertyDetails = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const { det } = useSelector((state) => state.lang.value.listingStyle);
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              {det.prop[lang]}: <span>HZ27</span>
            </p>
          </li>
          <li>
            <p>
              {det.price[lang]} : <span>$130,000</span>
            </p>
          </li>
          <li>
            <p>
              {det.size[lang]} : <span>1560 Sq Ft</span>
            </p>
          </li>
          <li>
            <p>
              {det.built[lang]} : <span>2016-01-09</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
            {det.bedRoom[lang]} : <span>8</span>
            </p>
          </li>
          <li>
            <p>
            {det.bathRoom[lang]} : <span>4</span>
            </p>
          </li>
          <li>
            <p>
              {det.garage[lang]} : <span>2</span>
            </p>
          </li>
          <li>
            <p>
            {det.gargeSize[lang]}: <span>200 SqFt</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
            {det.propType[lang]} : <span>{det.propValue[lang]}</span>
            </p>
          </li>
          <li>
            <p>
            {det.propStatus[lang]}  : <span>{det.statusValue[lang]}</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
