import { useState, useEffect } from "react";
import { getDataChalets } from "../services/api/chaletApi.js";
import PropTypes from "prop-types";

export const Slider = () => {
  const [chalets, setChalets] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    initializeSlider();
  }, []);

  const initializeSlider = async () => {
    try {
      const data = await getDataChalets();
      setChalets(data);
      setPrevIndex(data.length - 1);
      setNextIndex(1);
    } catch (error) {
      console.error("Failed to initialize slider:", error);
    }
  };

  const updateIndex = (newActiveIndex) => {
    setPrevIndex((newActiveIndex - 1 + chalets.length) % chalets.length);
    setActiveIndex(newActiveIndex);
    setNextIndex((newActiveIndex + 1) % chalets.length);
  };

  const next = () => updateIndex(nextIndex);
  const previous = () => updateIndex(prevIndex);

  return (
    <div className="container">
      <div className="slider">
        <ul className="slider__list">
          {chalets.map((chalet, index) => (
            <SliderItem
              key={index}
              chalet={chalet}
              index={index}
              activeIndex={activeIndex}
              prevIndex={prevIndex}
              nextIndex={nextIndex}
            />
          ))}
        </ul>
      </div>
      <SliderDots
        chalets={chalets}
        activeIndex={activeIndex}
        setIndex={updateIndex}
      />
      <SliderArrow direction="left" onClick={previous} />
      <SliderArrow direction="right" onClick={next} />
    </div>
  );
};

const SliderItem = ({ chalet, index, activeIndex, prevIndex, nextIndex }) => (
  <li className={`slider__item ${index === activeIndex ? "slider__item--active" : ""} ${index === prevIndex ? "slider__item--prev" : ""} ${index === nextIndex ? "slider__item--next" : ""}`}
    style={{ backgroundImage: `url(${chalet.src})`, "--i": index }}
  >
    <span className="slider__img-tag">{chalet.alt}</span>
  </li>
);

const SliderDots = ({ chalets, activeIndex, setIndex }) => (
  <div className="slider__dots">
    {chalets.map((_, index) => (
      <div key={index} className={`slider__dot ${index === activeIndex ? "slider__dot--active" : ""}`}
        onClick={() => setIndex(index)}
      />
    ))}
  </div>
);

const SliderArrow = ({ direction, onClick }) => (
  <div className={`slider__arrow slider__arrow-${direction} prev`} onClick={onClick}>
    <img src={`/images/arrow_btn-${direction}.svg`} alt={`fleche ${direction}`} />
  </div>
);

SliderItem.propTypes = {
  chalet: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  prevIndex: PropTypes.number.isRequired,
  nextIndex: PropTypes.number.isRequired,
};

SliderDots.propTypes = {
  chalets: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeIndex: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};

SliderArrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
