import { useSelector } from "react-redux";
import Ratings from "./Ratings";

const Comments = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const commmetContent = [
    {
      id: {en: "1", ar: "1"},
      img: {en: "1", ar: "1"},
      name: {en: "Diana Cooper", ar: "ديانا كوبر"},
      ratings: (
        <>
          <Ratings />
        </>
      ),
      data: {en: "", ar:""},
      text: {en: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons!`, ar: `منزل جميل ، خلاب للغاية وقريب من كل شيء في جي تيري! دافئ قليلاً لقضاء عطلة نهاية أسبوع حارة ، لكنني أحب العودة خلال المواسم الباردة!`},
    },
    {
      id: {en: "2", ar: "2"},
      img: {en: "2", ar: "2"},
      name: {en: "Ali Tofan", ar: "علي توفان"},
      ratings: (
        <>
          <Ratings />
        </>
      ),
      data: {en: "", ar:""},
      text: {en: `Beautiful home, very picturesque and close to everything in jtree! A
      little warm for a hot weekend, but would love to come back during
      the cooler seasons!`, ar: `منزل جميل ، خلاب للغاية وقريب من كل شيء في جي تيري! دافئ قليلاً لقضاء عطلة نهاية أسبوع حارة ، لكنني أحب العودة خلال المواسم الباردة!`},
    },
  ];
  return (
    <>
      {commmetContent.map((item) => (
        <div className="mbp_first media" key={item.id[lang]}>
          <img
            src={`/assets/images/testimonial/${item.img[lang]}.png`}
            className="mr-3"
            alt={item.img[lang]}
          />
          <div className="media-body">
            <h4 className="sub_title mt-0">
              {item.name[lang]}
              <span className="sspd_review">
                <ul className="mb0 pl15">{item.ratings}</ul>
              </span>
            </h4>
            <a className="sspd_postdate fz14" href="#">
              {item.data[lang]}
            </a>
            <p className="fz14 mt10">{item.text[lang]}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comments;
