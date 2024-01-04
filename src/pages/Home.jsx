import { Slider } from "../components/Slider.jsx";
import { Parallax, ParallaxElement } from "../layouts/Parallax.jsx";
import { useLocation } from "react-router-dom";
import { useGetChaletsQuery } from "../services/api/chaletApi.js";
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
  const {data: chalets = []} = useGetChaletsQuery(); console.log(chalets);

  return (
    <Parallax>
      <ParallaxElement img={parallaxDatas.home.url} id={parallaxDatas.home.id}>
        <div className="section__contents">
          <h1 className="section__title">Les vacances grandeur nature</h1>
        </div>
      </ParallaxElement>
      <ParallaxElement img={null} id={parallaxDatas.hebergement.id}>
        <div className="section__contents">
          <p className="section__slogan">Des hébergements pour tous les goûts</p>
          {chalets && <Slider data={chalets}/>}
        </div>
      </ParallaxElement>
      <ParallaxElement img={parallaxDatas.activitées.url} id={parallaxDatas.activitées.id}>
        <div className="section__contents">
          <p className="section__slogan">Des activitées pour tous les goûts</p>
        </div>
      </ParallaxElement>
    </Parallax>
  );
};
