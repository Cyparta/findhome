import { useSelector } from "react-redux";

const WalkScore = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const {walk: main} = useSelector(state => state.lang.value.listingStyle)
  return (
    <>
      <h4 className="mb30">
        {main.heading[lang]}{" "}
        <span className="float-end">
          <img src="/assets/images/resource/wscore.png" alt="wscore.png" />
        </span>
      </h4>
      <div className="iba_container">
        <div className="icon_box_area">
          <div className="score">
            <span>70</span>
          </div>
          <div className="details">
            <h5>{main.walkScore[lang]}</h5>
            <p>{main.li[lang]}</p>
          </div>
        </div>
        <div className="icon_box_area">
          <div className="score">
            <span>40</span>
          </div>
          <div className="details">
            <h5>{main.li[lang]}</h5>
            <p>{main.li2[lang]}</p>
          </div>
        </div>
      </div>
      <a className="more_info" href="#">
        {main.btn[lang]}
      </a>
    </>
  );
};

export default WalkScore;
