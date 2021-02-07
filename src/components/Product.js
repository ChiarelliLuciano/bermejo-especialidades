import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImg from "../images/inicio.jpg";
export default function Product({ product }) {
  const { name, slug, images, price } = product;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <p>desde</p>
          <h6>${price}</h6>
          <p>por Kg.</p>
        </div>
        <Link to={`/Productos/${slug}`} className="btn-primary room-link">
          {name}
        </Link>
      </div>
      
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
