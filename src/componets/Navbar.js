import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import Logo from "../logo/logo.svg";
import { CartContext } from "../context/ProductContext";

const Navbar = () => {
  const cartCount = useContext(CartContext);
  const count = cartCount.cart.length;
  return (
    <>
      <div className="superNav border-bottom py-2   d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className=" me-5 border-0 bg-light w-25">
                <option value="en-us">EN-US</option>
                <option value="en-aus">EN-AUS</option>
                <option value="en-uk">EN-UK</option>
                <option value="en-in">EN-IN</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>rajkumarramineni19@gmail.com</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 text-warning"></i>
                <strong>+91-9542346230</strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3">
                <Link className=" m-1 text-white" to="/login">
                  <AiOutlineUser className="fs-5" />
                  Login
                </Link>
                /
                <Link className="text-white m-1" to="/signup">
                  Signup
                </Link>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-file  text-muted me-2"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-1 shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {Logo ? (
              <img src={Logo} alt="no-ime" className="w50 height_image" />
            ) : (
              <strong>GEAR SHOP</strong>
            )}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link mx-2  active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 " to="/shop">
                  Shop
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link mx-2 " to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/category">
                  Category
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link mx-2 " to="/about-us">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link mx-2  " to="/cart">
                  <BsFillCartCheckFill className="fs-4  " />

                  <sup>{count}</sup>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 " to="wish-list">
                  <AiOutlineHeart className="fs-4" /> WishList
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
