import PropTypes from 'prop-types'

export const Parallax = ({ children }) => {
      
    return (
      <div className="parallax">
        {children}
      </div>
    );
  };
  
  export const ParallaxElement = ({ img, id, children }) => {
    console.log(img);
    return (
      <section
        id={id}
        className="section parallax__img "
        style={{ backgroundImage: `url(${img})` }}
      >
        {children}
      </section>
    );
  };

    Parallax.propTypes = {
        children: PropTypes.node.isRequired,
    };
    ParallaxElement.propTypes = {
        img: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
    };