import React from "react";
import items from "./data";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    type: "Todos",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    uponRequest: false,
    stock: false,
  };

  componentDidMount() {
    let products = this.formatData(items);
    let featuredProducts = products.filter(
      (product) => product.featured === true
    );

    let maxPrice = Math.max(...products.map((item) => item.price));
    let maxSize = Math.max(...products.map((item) => item.size));

    this.setState({
      products: products,
      featuredProducts: featuredProducts,
      sortedProducts: products,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let product = { ...item.fields, images, id };
      return product;
    });
    return tempItems;
  }
  getProduct = (slug) => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find((product) => product.slug === slug);
    return product;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterProducts
    );
  };

  filterProducts = () => {
    let {
      products,
      type,
      price,
      stock,
    } = this.state;

    //all products
    let tempProducts = [...products];

    //transform value
    price = parseInt(price);

    if (type !== "Todos") {
      tempProducts = tempProducts.filter((product) => product.type === type);
    }

    //filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price);

    /**filter by size
    tempProducts = tempProducts.filter(
      (product) => product.size >= minSize && product.size <= maxSize
    );*/

    //filter by stock
    if (stock) {
      tempProducts = tempProducts.filter((product) => product.stock === true);
    }

    //change state
    this.setState({
      sortedProducts: tempProducts,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export function withProductConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {(value) => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}

export { ProductProvider, ProductConsumer, ProductContext };
