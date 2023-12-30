import { useEffect } from "react";
import { Slider } from "../components/Slider.jsx";
import { Parallax, ParallaxElement } from "../layouts/Parallax.jsx";
import { displayElementOnScroll } from "../utils/functions/scrollEvents";
import { useLocation } from "react-router-dom";
export const Home = () => {
  const parallaxDatas = {
    home: {
      id: "home",
      url: "./images/vueDuLac/coucherDeSoleilSurLeLac.jpg",
    },
    hebergement: {
      id: "hebergements",
      url: "./images/chalet/chalet.jpg",
    },
    activitées: {
      id: "activitées",
      url: "./images/vueDuLac/lacSnackBaseNautique.jpg",
    },
    tarifs: {
      id: "tarifs",
      url: "./images/vueDuLac/20211011_194517.jpg",
    },
    contact: {
      id: "contact",
      url: "./images/vueDuLac/lacSnackBaseNautique.jpg",
    },
  };
  const location = useLocation(); console.log(location.pathname);
  useEffect(() => {
  displayElementOnScroll({header: ".header", logo: ".header__logo"});
  },[]);

  return (
    <Parallax>
      <ParallaxElement img={parallaxDatas.home.url} id={parallaxDatas.home.id}>
        <div className="section__contents">
          <h1 className="section__title"></h1>
          <p className="section__slogan">Les vacances grandeur nature</p>
        </div>
      </ParallaxElement>
    </Parallax>
  );
};
