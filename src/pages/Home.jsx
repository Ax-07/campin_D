import { Parallax, ParallaxElement } from "../layouts/Parallax";

export const Home = () => {
  const parallaxDatas = {
    home: {
      id: "home",
      url: "./images/vueDuLac/lacSnackBaseNautique.jpg",
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

  return (
    <Parallax>
      <ParallaxElement img={parallaxDatas.home.url} id={parallaxDatas.home.id}>
        <div className="section__contents">
          <h1 className="section__title">Le lac de Devesset</h1>
          <p className="section__slogan">Les vacances grandeur nature</p>
        </div>
      </ParallaxElement>
    </Parallax>
  );
};
