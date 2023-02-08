import React from "react";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
import CartDetails from "../componets/CartDetails";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <Breadcrumb title="Shopping cart" />
      <div className="container">
        <section className="py-5">
          <h3 className=" text-center h5 text-uppercase mb-4">Shopping cart</h3>
          <div className="row">
            <CartDetails />
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
