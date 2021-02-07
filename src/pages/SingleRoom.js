import React, { Component } from "react";
import defaultBcg from "../images/inicio.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
import StyledHero from "../components/StyledHero";
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'
import cerdo from '../images/cerdo.png'
import vaca from '../images/vaca.png'
import panceta from '../images/bacon.png'

SwiperCore.use([Navigation,Pagination,Autoplay])

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = ProductContext;
  // componentDidMount() {}

  render() {
    const { getProduct } = this.context;
    const product = getProduct(this.state.slug);
    if (!product) {
      return (
        <div className="error">
          <Hero>
          <Banner title="Error 404" subtitle="Producto inexistente">
            <Link to="/Productos" className="btn-primary">
              Volver a Productos
            </Link>
          </Banner>
          </Hero>
        </div>
      );
    }
    const {
      name,
      description,
      extras,
      images,
    } = product; 
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/Productos" className="btn-primary">
              Volver a Productos
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
        <div className="single-product-description">
              <p>{description}</p>
        </div>
          <section className="room-extras">
            <ul className="extras">
              {extras.map((item, index) => {
                return (
                  <li key={index}>
                      {item.pig === true ? <img src={cerdo} alt={item.name}/> : ''}
                      {item.cow === true ? <img src={vaca} alt={item.name}/> : ''}
                      {item.bacon === true ? <img src={panceta} alt={item.name}/> : ''}
                    <h3>{item.name} </h3>
                     <p>{item.desc}</p>
                  </li>
                );
              })}
            </ul>
          </section>
            <Swiper 
            tag='section' 
            wrapperTag='ul' 
            id='main' 
            navigation 
            pagination
            spaceBetween={0} 
            slidesPerView={2} 
            autoplay={{delay:3000,disableOnInteraction: false}}>
                {images.map((item, index) => {
              return <SwiperSlide key={index} tag='li' >
                <img key ={index} src={item} alt={name}/>
              </SwiperSlide>;
            })}
            </Swiper>
          <div className="single-product-footer">
            <h4>TODOS NUESTROS PRODUCTOS SON APTOS PARA CELÍACOS.</h4>
          </div>
        </section>
      </>
    );
  }
}      