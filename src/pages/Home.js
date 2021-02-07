import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedProducts from "../components/FeaturedProducts";
import EmailForm from "../components/EmailForm";
import Title from "../components/Title";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Bermejo Hnos. Especialidades"
          subtitle="Fabricación de Embutidos y Chacinados"
        >
          <Link to="/Productos" className="btn-primary">
            Productos
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedProducts />
      <Title
        title="Contacto"
        subtitle="Maquinista Carregal 2176, CP1605 ||  4760-9813 / 4760-5524"
      />
      <Map />
      <EmailForm />
      <Footer />
    </>
  );
}
