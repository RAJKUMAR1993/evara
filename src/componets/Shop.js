import React, { useState, useEffect } from "react";

// import ReactPaginate from "react-paginate";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
import { getAllProducts } from "../apis/api";
import Products from "../componets/Products";

const Shop = () => {
  // const firstName = useContext(CartContext);
  //products Showing
  const [product, setProduct] = useState([]);
  //addToCart
  // const [showCart, setShowCart] = useState(false);
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

  return (
    <>
      <Meta title={"Shops"} />
      <Breadcrumb title="Shops" />

      <Products products={product} />
    </>
  );
};

export default Shop;
