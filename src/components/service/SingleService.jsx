import { useSelector } from "react-redux";
import serviceContent from "../../data/service";

const SingleService = () => {
  const lang = useSelector(state => state.lang.value.lang)
  return (
    <>
      {serviceContent.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id[lang]}>
          <div className="service_grid">
            <div className="thumb">
              <img className="img-fluid w100" src={item.img[lang]} alt={item.img[lang]} />
            </div>
            <div className="details">
              <h4>{item.title[lang]}</h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleService;
