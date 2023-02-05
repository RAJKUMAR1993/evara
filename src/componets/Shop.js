import React, { useState, useEffect } from "react";

// import ReactPaginate from "react-paginate";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
import { getAllProducts } from "../apis/api";
import Products from "../componets/Products";
import Cart from "../componets/Cart";
// import CartDetails from "../componets/CartDetails";

// import Navbar from "../componets/Navbar";

const Shop = () => {
  //products Showing
  const [product, setProduct] = useState([]);
  //addToCart
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const getProducts = async () => {
    try {
      const response = await getAllProducts();

      if ((response.status = 200)) {
        // setTotalRecords(response.data.length);
        setProduct(response.data);
        // console.log(response.config.params);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  //addToCart
  const addToCart = (cartData) => {
    // console.log(cart.length);
    setCart([...cart, { ...cartData, quantity: 1 }]);
  };

  return (
    <>
      <Meta title={"Shops"} />
      <Breadcrumb title="Shops" />
      {/* <Navbar count={cart.length} /> */}

      {showCart ? (
        <Cart carts={cart} />
      ) : (
        <Products products={product} addToCart={addToCart} />
      )}
    </>
  );
};

export default Shop;
