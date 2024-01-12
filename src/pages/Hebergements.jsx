import { SeparateLine } from "../components/SeparateLine";

export const Hebergements = () => {
  return (
    <div className="section">
      <section id="hébergements-landing" className="section__contents">
        <div className="section__title-wrapper">
          <p>Découvrez nos</p>
          <h1>Hébergements</h1>
        </div>
        <SeparateLine />
        <div className="links-board">
          <a href="#emplacements" className="links-board__item">
            <h2 className="links-board__item-title">Emplacements</h2>
            <img src="/assets/" alt="" />
          </a>
          <a href="#chalets" className="links-board__item">
            <h2 className="links-board__item-title">Chalets</h2>
          </a>
          <a href="#mobileHome" className="links-board__item">
            <h2 className="links-board__item-title">Mobile-home</h2>
          </a>
          <a href="#gites" className="links-board__item">
            <h2 className="links-board__item-title">Gîtes</h2>
          </a>
        </div>
      </section>
      <section id="emplacements" className="section__contents">
        <h1>Emplacement</h1>
        <SeparateLine />
      </section>
      <section id="chalets" className="section__contents">
        <h1>Chalets</h1>
        <SeparateLine />
      </section>
      <section id="mobileHome" className="section__contents">
        <h1>Mobile-home</h1>
        <SeparateLine />
      </section>
      <section id="gites" className="section__contents">
        <h1>Gîtes</h1>
        <SeparateLine />
      </section>
    </div>
  );
};
