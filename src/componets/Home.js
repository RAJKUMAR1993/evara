import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
// import Loader from "react-js-loader";

import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineExpand,
} from "react-icons/ai";
import { BsEnvelopeOpen } from "react-icons/bs";
// import { HiCurrencyRupee } from "react-icons/hi";
//import { productData } from "../productData";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Slider />

      <section className="container grid-data py-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card rounded-3 position-relative ">
              <img
                src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/banner-1.png"
                alt=""
                className="img-responsive"
              />
              <div className="card-body position-absolute top-0 start-0">
                <h5 className="card-title ">Smart Offer</h5>
                <p className="card-text ">Save 20% on Woman Bag</p>
                <Link to="#" className="text-decoration-none">
                  Shop Now
                  <span>
                    <AiOutlineArrowRight className="text-dark fs-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="card rounded-3 position-relative">
              <img
                src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/banner-2.png"
                alt="banner"
                className="img-responsive"
              />
              <div className="card-body position-absolute top-0 start-0">
                <h5 className="card-title ">Sale off</h5>
                <p className="card-text ">Great Summer Collection</p>
                <Link to="#" className="text-decoration-none">
                  Shop Now
                  <span>
                    <AiOutlineArrowRight className="text-dark fs-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 ">
            <div className="card rounded-3 position-relative">
              <img
                src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/banner-3.png"
                alt=""
                className="img-responsive"
              />
              <div className="card-body position-absolute top-0 start-0">
                <h5 className="card-title ">New Arrivals</h5>
                <p className="card-text ">Shop Today’s Deals & Offers</p>
                <Link to="#" className="text-decoration-none">
                  Shop Now
                  <span>
                    <AiOutlineArrowRight className="text-dark fs-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <h5 className="fw-bold title">
              <span className="text-success">All</span> Products
            </h5>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8">
            <div className=""></div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-1 "></div>
        </div>
      </div>
      {/* <div className="modal fade" id="productView" tabindex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content overflow-hidden border-0">
            <button
              className="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body p-0">
              <div className="row align-items-stretch">
                <div className="col-lg-6 p-lg-0">
                  <Link
                    className="glightbox product-view d-block h-100 bg-cover bg-center"
                    // style="background: url(img/product-5.jpg)"
                    to="img/product-5.jpg"
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  ></Link>
                  <Link
                    class="glightbox d-none"
                    to="img/product-5-alt-1.jpg"
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  ></Link>
                  <Link
                    class="glightbox d-none"
                    to="img/product-5-alt-2.jpg"
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  ></Link>
                </div>
                <div className="col-lg-6">
                  <div className="p-4 my-md-4">
                    <ul className="list-inline mb-2">
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0 1">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0 2">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0 3">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                      <li className="list-inline-item m-0 4">
                        <i className="fas fa-star small text-warning"></i>
                      </li>
                    </ul>
                    <h2 className="h4">Red digital smartwatch</h2>
                    <p className="text-muted">$250</p>
                    <p className="text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ut ullamcorper leo, eget euismod orci. Cum sociis
                      natoque penatibus et magnis dis parturient montes nascetur
                      ridiculus mus. Vestibulum ultricies aliquam convallis.
                    </p>
                    <div className="row align-items-stretch mb-4 gx-0">
                      <div className="col-sm-7">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                          <span class="small text-uppercase text-gray mr-4 no-select">
                            Quantity
                          </span>
                          <div className="quantity">
                            <button className="dec-btn p-0">
                              <i class="fas fa-caret-left"></i>
                            </button>
                            <input
                              className="form-control border-0 shadow-0 p-0"
                              type="text"
                              value="1"
                            />
                            <button className="inc-btn p-0">
                              <i class="fas fa-caret-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <a
                          className="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0"
                          href="cart.html"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <a
                      className="btn btn-link text-dark text-decoration-none p-0"
                      href="#!"
                    >
                      <i className="far fa-heart me-2"></i>Add to wish list
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="container section-card py-2">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white bg-"></div>
                <a className="d-block" href="detail.html">
                  <img
                    className="img-fluid w-100"
                    src="img/product-1.jpg"
                    alt="..."
                  />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <AiOutlineHeart />
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="cart.html">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <AiOutlineExpand />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                <Link
                  className="reset-anchor text-decoration-none text-dark"
                  to="#"
                >
                  Kui Ye Chen’s AirPods
                </Link>
              </h6>
              <p className="small text-dark fw-bold">$250</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white bg-"></div>
                <a className="d-block" href="detail.html">
                  <img
                    className="img-fluid w-100"
                    src="img/product-2.jpg"
                    alt="..."
                  />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <AiOutlineHeart />
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="cart.html">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <AiOutlineExpand />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                <Link
                  className="reset-anchor text-decoration-none text-dark"
                  to="#"
                >
                  Air Jordan 12 gym red
                </Link>
              </h6>
              <p className="small text-dark fw-bold">$250</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white bg-"></div>
                <a className="d-block" href="detail.html">
                  <img
                    className="img-fluid w-100"
                    src="img/product-8.jpg"
                    alt="..."
                  />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <AiOutlineHeart />
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="cart.html">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <AiOutlineExpand />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                <Link
                  className="reset-anchor text-decoration-none text-dark"
                  to="#"
                >
                  Apple Watch
                </Link>
              </h6>
              <p className="small text-dark fw-bold">$250</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white bg-"></div>
                <a className="d-block" href="detail.html">
                  <img
                    className="img-fluid w-100"
                    src="img/product-3.jpg"
                    alt="..."
                  />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <AiOutlineHeart />
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="cart.html">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <AiOutlineExpand />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                <Link
                  className="reset-anchor text-decoration-none text-dark"
                  to="#"
                >
                  Cyan cotton t-shirt
                </Link>
              </h6>
              <p className="small text-dark fw-bold">$250</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white bg-"></div>
                <a className="d-block" href="detail.html">
                  <img
                    className="img-fluid w-100"
                    src="img/product-4.jpg"
                    alt="..."
                  />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <AiOutlineHeart />
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="cart.html">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <AiOutlineExpand />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                <Link
                  className="reset-anchor text-decoration-none text-dark"
                  to="#"
                >
                  Timex Unisex Originals
                </Link>
              </h6>
              <p className="small text-dark fw-bold">$250</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="product text-center">
              <div className="mb-3 position-relative">
                <div className="badge text-white bg-"></div>
                <a className="d-block" href="detail.html">
                  <img
                    className="img-fluid w-100"
                    src="img/product-5.jpg"
                    alt="..."
                  />
                </a>
                <div className="product-overlay">
                  <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-outline-dark" href="#!">
                        <AiOutlineHeart />
                      </a>
                    </li>
                    <li className="list-inline-item m-0 p-0">
                      <a className="btn btn-sm btn-dark" href="cart.html">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn btn-sm btn-outline-dark"
                        href="#productView"
                        data-bs-toggle="modal"
                      >
                        <AiOutlineExpand />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h6>
                <Link
                  className="reset-anchor text-decoration-none text-dark"
                  to="#"
                >
                  Red digital smartwatch
                </Link>
              </h6>
              <p className="small text-dark fw-bold">$250</p>
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-3">
        <h5 className="fw-bold title">
          <span className="text-success">Popular</span> Categories
        </h5>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex aline-items-center  justify-content-between">
                  <div className="mx-4 ww-25">
                    <img
                      src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-7.jpg"
                      alt="brand"
                      className="marqueWidth"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-1.jpg"
                      alt="brand"
                      className="marqueWidth"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-4.jpg"
                      alt="brand"
                      className="marqueWidth"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-7.jpg"
                      alt="brand"
                      className="marqueWidth"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-8.jpg"
                      alt="brand"
                      className="marqueWidth"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-1.jpg"
                      alt="brand"
                      className="marqueWidth"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-3.jpg"
                      alt="brand"
                      className="marqueWidth"
                    />
                  </div>
                  <div className="mx-4 ww-25">
                    <img
                      src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/category-thumb-6.jpg"
                      alt="brand"
                      className="marqueWidth"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ClassName="container-xl">
        <div ClassName="row">
          <div ClassName="col-md-9  mx-auto">
            <h2>
              <span>
                OUR <b>Categories</b>
              </span>
            </h2>
          </div>
          <div ClassName="col-md-3"></div>
        </div>
      </div>
      <section className="container-xl">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div class="card p-1 mb-2">
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Mobile</span> <span>Phones</span>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/b9zkoz0.jpg"
                    class="img-responsive imgfluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div class="card p-1 mb-2">
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Head</span> <span>Phones</span>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/SHWASPG.png"
                    class="img-responsive imgfluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div class="card p-1 mb-2">
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Smart</span> <span>Watches</span>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/Ya0OXCv.png"
                    class="img-responsive imgfluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div class="card p-1 mb-2">
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Air</span> <span>Purifiers</span>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/2gvGwbh.png"
                    class="img-responsive imgfluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div class="card p-1 mb-2">
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Vacuum</span> <span>Cleaners</span>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/UMQJpSG.png"
                    class="img-responsive imgfluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div class="card p-1 mb-2">
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Washing</span> <span>Machines</span>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/e9CyhXR.png"
                    class="img-responsive imgfluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div class="card p-1 mb-2">
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Smart</span> <span>Televisions</span>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/Zq8VigZ.png"
                    class="img-responsive imgfluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12">
            <div class="card p-1 mb-2">
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Laptops</span>
                </div>
                <div>
                  <img
                    src="https://i.imgur.com/6pK5oZl.jpg"
                    class="img-responsive imgfluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-xl py-4">
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img
              src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/banner-10.jpg"
              className="img-responsive w-100 h-100"
              alt=""
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <h6 className="text-success">Deals & Outlet</h6>
            <hr className="text-success " />
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-4.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="text-nowrap text-sm-start">
                Vintage Floral Print Dress
              </p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-5.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="text-sm-start fs-6">
                Multi-color Stripe Circle Print T-Shirt
              </p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-3.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="text-nowrap">Fish Print Patched T-shirt</p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <h6 className="text-success">Top Selling</h6>
            <hr className="text-success " />
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-6.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="m-2">Geometric Printed Long Sleeve Blosue</p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-7.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="m-2">Geometric Printed Long Sleeve Blosue</p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-8.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="m-2">Daisy Floral Print Straps Jumpsuit</p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <h6 className="text-success">Hot Releases</h6>
            <hr className="text-success " />
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-9.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="m-2">Floral Print Casual Cotton Dress</p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-1.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="m-2">Ruffled Solid Long Sleeve Blouse</p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
            <div className="d-flex justify-content-between mb-2 ">
              <div>
                <img
                  src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-2.jpg"
                  className="img-responsive imgfluid"
                  alt=""
                />
              </div>
              <p className="m-2">Multi-color Print V-neck T-Shirt</p>
              <div className="position-relative">
                <div class=" pricelist text-dark">$238.85</div>
                <div class=" pricelist-list">
                  <del className="text-danger">$245.8</del>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid py-2">
        <div className="row backgrounColor">
          <div className="col-sm-12 col-md-6 col-lg-12 ">
            <div className=" row ">
              <div className=" col-sm-12 col-md-6 col-lg-4">
                <div className="d-flex -justify-content-between  marginRight">
                  <BsEnvelopeOpen className="mt-2 fs-3" />
                  <h6 className="mt-2 fs-4">Sign up to Newsletter</h6>
                </div>
              </div>
              <div className=" col-sm-12 col-md-6 col-lg-4 ">
                <p className="mt-3">
                  ...and receive $25 coupon for first shopping.
                </p>
              </div>
              <div className=" col-sm-12 col-md-6 col-lg-4 ">
                <div className="mt-2">
                  <form
                    className="form-subcriber d-flex wow fadeIn animated animated animated"
                    style={{ visibility: "visible" }}
                  >
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="Enter your email"
                    />
                    <button className="btn bg-dark text-white" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
