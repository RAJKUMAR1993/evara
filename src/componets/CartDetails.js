import React from "react";
import { Link } from "react-router-dom";
import { FcLeft } from "react-icons/fc";

function CartDetails() {
  const cartData = localStorage.getItem("cartData");
  const CartData = JSON.parse(cartData);
  console.log(CartData, "=====>");
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
                  <strong className="text-sm text-uppercase"></strong>
                </th>
              </tr>
            </thead>
            <tbody className="border-0">
              {CartData.map((item) => {
                const urlImage =
                  item.images && item.images.length > 0
                    ? item.images[0]
                    : "No Image";
                return (
                  <>
                    <tr>
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
                            <input
                              className="form-control form-control-sm border-0 shadow-0 p-0"
                              type="number"
                              min="0"
                              value={item.quantity}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-3 align-middle border-light">
                        <p className="mb-0 small">{item.price}</p>
                      </td>
                      <td className="p-3 align-middle border-light">
                        <a className="reset-anchor" href="#!">
                          <i className="fas fa-trash-alt small text-muted"></i>
                        </a>
                      </td>
                    </tr>
                    ;
                  </>
                );
              })}
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
