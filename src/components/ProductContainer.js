import React from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { withProductConsumer } from "../Context";
import Loading from "./Loading";

function ProductContainer({ context }) {
  const { loading, sortedProducts, products } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ProductFilter products={products} />
      <ProductList products={sortedProducts} />
    </>
  );
}

export default withProductConsumer(ProductContainer);