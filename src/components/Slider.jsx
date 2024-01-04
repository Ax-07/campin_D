import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Slider = ({data, currentIndex}) => {
  const datas = data; console.log(datas);
  console.log(currentIndex)
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

  useEffect(() => {
    if (datas && datas.length > 0) {
      if (currentIndex !== undefined && currentIndex >= 0 && currentIndex < datas.length) {
        setActiveIndex(currentIndex);
        setPrevIndex((currentIndex - 1 + datas.length) % datas.length);
        setNextIndex((currentIndex + 1) % datas.length);
      } else {
        // Logique par défaut pour le cas où currentIndex n'est pas spécifié ou est invalide
        setPrevIndex(datas.length - 1);
        setNextIndex(1);
      }
    }
  }, [currentIndex, datas]);
  

  const updateIndex = (newActiveIndex) => {
    setPrevIndex((newActiveIndex - 1 + datas.length) % datas.length);
    setActiveIndex(newActiveIndex);
    setNextIndex((newActiveIndex + 1) % datas.length);
  };

  const next = () => updateIndex(nextIndex);
  const previous = () => updateIndex(prevIndex);

  // Gestion du swipe: position de départ lorsque l'utilisateur appuie sur l'ecran
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  // Gestion du swipe: position de fin lorsque l'utilisateur bouge son doigt sur l'ecran
  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  // Gestion du swipe: position de fin lorsque l'utilisateur relache l'ecran
  const handleTouchEnd = () => {
    if (startX && endX) {
      const deltaX = endX - startX;

      if (deltaX > 50) {
        previous();
      } else if (deltaX < -50) {
        next();
      }

      setStartX(null);
      setEndX(null);
    }
  };
  return (
        <div
      className="container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider">
        <ul className="slider__list">
          {datas?.map((data, index) => (
            <SliderItem
              key={index}
              data={data}
              index={index}
              activeIndex={activeIndex}
              prevIndex={prevIndex}
              nextIndex={nextIndex}
            />
          ))}
        </ul>
      </div>
      {datas && <SliderDots
        datas={datas}
        activeIndex={activeIndex}
        setIndex={updateIndex}
      />}
      <SliderArrow direction="left" onClick={previous} />
      <SliderArrow direction="right" onClick={next} />
    </div>
  );
};

const SliderItem = ({ data, index, activeIndex, prevIndex, nextIndex }) => (
  <li className={`slider__item ${index === activeIndex ? "slider__item--active" : ""} ${index === prevIndex ? "slider__item--prev" : ""} ${index === nextIndex ? "slider__item--next" : ""}`}
    style={{ backgroundImage: `url(${data.src})`, "--i": index }}
  >
    <span className="slider__img-tag">{data.alt}</span>
  </li>
);

const SliderDots = ({ datas, activeIndex, setIndex }) => (
  <div className="slider__dots">
    {datas?.map((_, index) => (
      <div key={index} className={`slider__dot ${index === activeIndex ? "slider__dot--active" : ""}`}
        onClick={() => setIndex(index)}
      />
    ))}
  </div>
);

const SliderArrow = ({ direction, onClick }) => (
  <div className={`slider__arrow slider__arrow-${direction} prev`} onClick={onClick}>
    <img src={`/camping_D/images/arrow_btn-${direction}.svg`} alt={`fleche ${direction}`} />
  </div>
);

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentIndex: PropTypes.number,
};

SliderItem.propTypes = {
  data: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  prevIndex: PropTypes.number.isRequired,
  nextIndex: PropTypes.number.isRequired,
};

SliderDots.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeIndex: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};

SliderArrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
