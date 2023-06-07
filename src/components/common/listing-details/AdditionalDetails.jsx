import { useSelector } from "react-redux";

const AdditionalDetails = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const {add} = useSelector(state => state.lang.value.listingStyle)
  return (
    <>
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
          <li>
            <p>
              {add.deposit[lang]} : <span>20%</span>
            </p>
          </li>
          <li>
            <p>
            {add.poolSize[lang]} : <span>300 Sqft</span>
            </p>
          </li>
          <li>
            <p>
              {add.addRooms[lang]} : <span>{add.addValue[lang]}</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-6">
        <ul className="list-inline-item">
          <li>
            <p>
            {add.last[lang]} : <span>1987</span>
            </p>
          </li>
          <li>
            <p>
            {add.Amenities[lang]} : <span>{add.club[lang]}</span>
            </p>
          </li>
          <li>
            <p>
            {add.equip[lang]} : <span>Grill - Gas</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdditionalDetails;
