import React from "react";
import { useContext } from "react";
import { ProductContext } from "../Context";

const getUniqueValues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function ProductFilter({ products }) {
  const context = useContext(ProductContext);
  const {
    handleChange,
    type,
    price,
    minPrice,
    maxPrice,
    stock,
  } = context;

  //getUniqueTypes
  let types = getUniqueValues(products, "type");
  //add all
  types = ["Todos", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      
      <form className="filter-form">
        {/*select type */}
        <div className="form-group">
          <label htmlFor="type">tipo de producto</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end of select type */}

        {/* product price */}
        <div className="form-group">
          <label htmlFor="price">precio por kilo: ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end product price */}

        {/* product size */}

        {/* stock */}
        <div className='form-group'>
        <div className="single-extra">
            <input
              type="checkbox"
              name="stock"
              id="stock"
              checked={stock}
              onChange={handleChange}
            />
            <label htmlFor="stock">stock permanente</label>
          </div>
        </div>
        {/* end of stock */}
      </form>
    </section>
    
  );
}

 /**
         <div className="form-group">
          <label htmlFor="size">tamaño</label>
          <div className="size-imputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
  */