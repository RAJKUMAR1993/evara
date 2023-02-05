import React from "react";
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import { AiOutlineExpand, AiOutlineHeart } from "react-icons/ai";

const Products = ({ products, addToCart }) => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3  ">
            <div>
              <h5 className="text-success fw-bold  text-center">
                FASHION & ACC
              </h5>
              <div className="d-flex flex-column ">
                <ul className="list-unstyled">
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Women's T-Shirts
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Men's T-Shirts
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Dresses
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Women's sunglasses
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Men's sunglasses
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-100 title-height-22 ">
              <h6 className="text-start m-2 mt-1">HEALTH & BEAUTY</h6>
            </div>
            <div>
              <div className="d-flex flex-column ">
                <ul className=" list-unstyled">
                  <li className="list-group-item text-decoration-none mt-3">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Shavers
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      bags
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Cosmetic
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Skin Masks & Peels
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Nail Art
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-100 title-height-22 ">
              <h6 className="text-start m-2 mt-1">ELECTRONICS</h6>
            </div>
            <div>
              <div className="d-flex flex-column ">
                <ul className=" list-unstyled">
                  <li className="list-group-item text-decoration-none mt-3">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Electronics
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      USB Flash drives
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Headphones
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Portable speakers
                    </Link>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <Link
                      to=""
                      className="text-decoration-none text-center text-dark fw-normal"
                    >
                      Cell Phone bluetooth headsets
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-100 title-height-22 ">
              <h6 className="text-center mt-1">PRICE RANGE</h6>
            </div>
            <div className="d-flex flex-column">
              <label for="customRange3" className="form-label">
                Example range
              </label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              ></input>
            </div>
            <div className="w-100 title-height-22 ">
              <h6 className="text-start m-2 mt-1">Item Condition</h6>
            </div>
            <div>
              <div className="d-flex flex-column ">
                <ul className=" list-unstyled">
                  <li className="list-group-item text-decoration-none mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      <span className="m-2"> New (1506)</span>
                    </label>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      <span className="m-2"> Refurbished (27)</span>
                    </label>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      <span className="m-2"> Used (45)</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-100 title-height-22 ">
              <h6 className="text-start m-2 mt-1">By Color</h6>
            </div>
            <div>
              <div className="d-flex flex-column ">
                <ul className=" list-unstyled">
                  <li className="list-group-item text-decoration-none mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      <span className="m-2">Black</span>
                    </label>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      <span className="m-2"> Blue</span>
                    </label>
                  </li>
                  <li className="list-group-item text-decoration-none mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      <span className="m-2">Green</span>
                    </label>
                    <li className="list-group-item text-decoration-none mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <span className="m-2">Grey</span>
                      </label>
                    </li>
                    <li className="list-group-item text-decoration-none mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <span className="m-2">Red</span>
                      </label>
                    </li>
                    <li className="list-group-item text-decoration-none mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        <span className="m-2">White</span>
                      </label>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-9 ">
            <div className="row mb-3 align-items-center">
              <div className="col-lg-6 mb-2 mb-lg-0">
                <p className="text-sm text-muted mb-0">
                  Showing 1–12 of 53 results
                </p>
              </div>
              <div className="col-lg-6">
                <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                  <li className="list-inline-item text-muted me-3">
                    <Link className="reset-anchor p-0" to="#!">
                      <AiFillAppstore className="fs-3 icon-color" />
                    </Link>
                  </li>
                  <li className="list-inline-item text-muted me-3">
                    <Link className="reset-anchor p-0" to="#!">
                      <FaThList className="fs-2 icon-color" />
                    </Link>
                  </li>
                  <li class="list-inline-item">
                    <select
                      className="selectpicker form-control"
                      data-customclass="form-control form-control-sm"
                    >
                      <option value>Sort By </option>
                      <option value="default">Default sorting </option>
                      <option value="popularity">Popularity </option>
                      <option value="low-high">Price: Low to High </option>
                      <option value="high-low">Price: High to Low </option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row">
              {products.map((productItem, index) => {
                return (
                  <>
                    <div className="col-lg-4 col-sm-6 col-sm-12 col-12">
                      <div className="product p-height text-center" key={index}>
                        <div className="mb-3 position-relative">
                          <div className="badge text-white bg-"></div>
                          <Link v="d-block" to="#">
                            <img
                              className="img-fluid w-100 productImageHeight"
                              src={productItem.image}
                              alt="noProduct"
                            />
                          </Link>
                          <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                              <li className="list-inline-item m-0 p-0">
                                <Link
                                  className="btn btn-sm btn-outline-dark"
                                  to="#"
                                >
                                  <AiOutlineHeart className="fs-2" />
                                </Link>
                              </li>
                              <li className="list-inline-item m-0 p-0">
                                <button
                                  className="btn btn-sm btn-dark"
                                  onClick={() => addToCart(productItem)}
                                >
                                  Add to cart
                                </button>
                              </li>
                              <li className="list-inline-item mr-0">
                                <Link
                                  className="btn btn-sm btn-outline-dark"
                                  to="#productView"
                                  data-bs-toggle="modal"
                                >
                                  <AiOutlineExpand className="fs-2" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h6>
                          <Link
                            className="reset-anchor text-decoration-none text-dark"
                            to="#"
                          >
                            {productItem.title}
                          </Link>
                        </h6>
                        <p className="small text-muted">
                          <b>${productItem.price}</b>
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <nav aria-label="Page navigation example"></nav>
        </div>
      </div>
    </>
  );
};

export default Products;
