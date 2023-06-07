import { useSelector } from "react-redux";
import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
  const lang = useSelector((state) => state.lang.value.lang);
  const main = useSelector((state) => state.lang.value.heroPage);

  return (
    <div className="home_content">
      <div className="home-text text-center">
        <h2 className="fz55">{main.heading[lang]}</h2>
        <p className="fz18 color-white">{main.text[lang]}</p>
      </div>
      {/* End .home-text */}

      {/* <GlobalHeroFilter /> */}
    </div>
  );
};

export default HeroFilter;
