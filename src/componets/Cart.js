import React from "react";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
import CartDetails from "../componets/CartDetails";
// import { CartContext } from "../context/ProductContext";
const Cart = () => {

  // const { cart } = useContext(CartContext);
  // const count = cartCount.cart.length;
  // console.log(CartDetails, "Cart testing======>");
  return (
    <>
      <Meta title={"Cart"} />
      <Breadcrumb title="Shopping cart" />
      <div className="container">
        <section className="py-5">
          <h3 className=" text-center h5 text-uppercase mb-4">Shopping cart</h3>
          <div className="row">
            {/* {CartData.map((item) => {
              const urlImage =
                item.images && item.images.length > 0
                  ? item.images[0]
                  : "No Image";
              console.log(urlImage);
              return <CartDetails item={item} key={item.id} image={urlImage} />;
            })} */}
            <CartDetails />
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Cart total</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between">
                      <strong className="text-uppercase small font-weight-bold">
                        Subtotal
                      </strong>
                      <span className="text-muted small">$250</span>
                    </li>
                    <li className="border-bottom my-2"></li>
                    <li className="d-flex align-items-center justify-content-between mb-4">
                      <strong className="text-uppercase small font-weight-bold">
                        Total
                      </strong>
                      <span>$250</span>
                    </li>
                    <li>
                      <form action="#">
                        <div className="input-group mb-0">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your coupon"
                          />
                          <button
                            className="btn btn-dark btn-sm w-100"
                            type="submit"
                          >
                            <i className="fas fa-gift me-2"></i>Apply coupon
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
