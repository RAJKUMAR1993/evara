import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcLeft } from "react-icons/fc";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { CartContext } from "../context/ProductContext";

function CartDetails() {
  const contextData = useContext(CartContext);
  const { removeProduct, amountIncrease, decreaseAmount } =
    useContext(CartContext);

  return (
    <>
      <div className="col-lg-8 mb-4 mb-lg-0">
        <div className="table-responsive mb-4">
          <table className="table text-nowrap">
            <thead className="bg-light">
              <tr>
                <th className="border-0 p-3" scope="col">
                  <strong className="text-sm text-uppercase">Product</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  <strong className="text-sm text-uppercase">Price</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  <strong className="text-sm text-uppercase">Quantity</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  <strong className="text-sm text-uppercase">Total</strong>
                </th>
                <th className="border-0 p-3" scope="col">
                  <strong className="text-sm text-uppercase">Remove</strong>
                </th>
              </tr>
            </thead>
            <tbody className="border-0">
              {contextData.cart.length > 0 ? (
                contextData.cart.map((item, index) => {
                  const urlImage =
                    item.images && item.images.length > 0
                      ? item.images[0]
                      : "No Image";
                  return (
                    <>
                      <tr key={index}>
                        <th className="ps-0 py-3 border-light" scope="row">
                          <div className="d-flex align-items-center">
                            <a
                              className="reset-anchor d-block animsition-link"
                              href="detail.html"
                            >
                              <img src={urlImage} alt="..." width="70" />
                            </a>
                            <div className="ms-3">
                              <strong className="h6">
                                <Link
                                  className="reset-anchor text-decoration-none text-dark animsition-link"
                                  to="#"
                                >
                                  {item.item}
                                </Link>
                              </strong>
                            </div>
                          </div>
                        </th>
                        <td className="p-3 align-middle border-light">
                          <p className="mb-0 small">{item.price}</p>
                        </td>
                        <td className="p-3 align-middle border-light">
                          <div className="border d-flex align-items-center justify-content-between px-3">
                            <span className="small text-uppercase text-gray headings-font-family">
                              Quantity
                            </span>
                            <div className="quantity">
                              <div className="quantity">
                                <div className="counter">
                                  <AiOutlineMinus
                                    onClick={() => {
                                      decreaseAmount(item.id);
                                    }}
                                  />
                                  <input
                                    className="iform-control form-control-sm border-0 shadow-0 p-0"
                                    type="text"
                                    value={item.quantity}
                                    min="0"
                                    max="10"
                                  />
                                  <AiOutlinePlus
                                    onClick={() => {
                                      amountIncrease(item.id);
                                    }}
                                  />
                                </div>
                                {/* <input
                                className="form-control form-control-sm border-0 shadow-0 p-0"
                                type="number"
                                min="0"
                                
                              /> */}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 align-middle border-light">
                          <p className="mb-0 small">
                            {parseFloat(item.quantity * item.price).toFixed(2)}
                          </p>
                        </td>
                        <td className="p-3 align-middle border-light">
                          <button
                            style={{ marginLeft: 5 }}
                            className="btn btn-danger btn-xs"
                            onClick={() => {
                              removeProduct(item.id);
                            }}
                          >
                            <AiFillDelete />
                          </button>
                          {/* <button
                          className="reset-anchor"
                          onClick={() => removeProduct(item)}
                        >
                          <i className="fas fa-trash-alt small fs-3">
                            <AiFillDelete className="text-danger" />
                          </i>
                        </button> */}
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <h5 className="d-flex  justify-content-center pt-5 text-success">
                  The Cart is empty
                </h5>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-light px-4 py-3">
          <div className="row align-items-center text-center">
            <div className="col-md-6 mb-3 mb-md-0 text-md-start">
              <Link className="btn btn-link p-0 text-dark btn-sm" to="/">
                <FcLeft className="fas fa-long-arrow-alt-left me-2 fs-3" />
                Continue shopping
              </Link>
            </div>
            <div className="col-md-6 text-md-end">
              {}
              <Link className="btn btn-outline-dark btn-sm" to="/">
                Procceed to checkout
                <i className="fas fa-long-arrow-alt-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
