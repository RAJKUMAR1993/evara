import React from "react";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
// import { CartContext } from "../context/ProductContext";

function ProductList({ products }) {
  // const { addToCart } = useContext(CartContext);

  return (
    <>
      <Meta title={"ProductList"} />
      <Breadcrumb title="ProductList" />
    </>
  );
}

export default ProductList;
