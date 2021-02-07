import React from "react";
import Product from "./Product";

export default function ProductList({ products }) {
  if (products.lenght === 0) {
    return (
      <div className="empty-search">
        <h3>Ningún producto coincide con tu búsqueda...</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {products.map((item) => {
          return <Product key={item.id} product={item} />;
        })}
      </div>
    </section>
  );
}
