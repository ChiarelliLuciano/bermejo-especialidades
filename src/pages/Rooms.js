import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ProductContainer from "../components/ProductContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Nuestros Productos">
          <Link to="/" className="btn-primary">
            Ir a Home
          </Link>
        </Banner>
      </Hero>
      <ProductContainer />
    </>
  );
};

export default Rooms;
