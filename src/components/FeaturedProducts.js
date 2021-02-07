import React from "react";
import { ProductContext } from "../Context";
import Loading from "./Loading";
import Product from "./Product";
import Title from "./Title";

export default class FeaturedProducts extends React.Component {
  static contextType = ProductContext;
  render() {
    let { loading, featuredProducts: products } = this.context;
    products = products.map((product) => {
      return <Product key={product.id} product={product} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Productos Destacados" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : products}
        </div>
      </section>
    );
  }
}
