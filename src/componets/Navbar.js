import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { toast } from "react-toastify";

import Logo from "../logo/logo.svg";
import { CartContext } from "../context/ProductContext";

const Navbar = () => {
  const navigate = useNavigate();
  const cartCount = useContext(CartContext);
  const count = cartCount.cart.length;
  const userId = localStorage.getItem("userId");
  const UserName = localStorage.getItem("UserName");
  //const tokenId = localStorage.getItem("TOKEN_ID");
  const cartID = localStorage.getItem("CART_ID");

  const logout = () => {
    localStorage.removeItem("TOKEN_ID");
    localStorage.removeItem("CART_ID");
    localStorage.removeItem("userId");
    localStorage.removeItem("UserName");

    window.localStorage.clear();
    toast.success("logout Successfully..");
    navigate("/login");
  };

  return (
    <>
      <div className="superNav border-bottom py-2   d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-4 col-sm-12  bloc centerOnMobile justify-content-around  ">
              <div className="row">
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 ">
                  <div className=" justify-content-center  me-3">
                    {/* <select className=" me-5 border-0 bg-light  from-control mrgintop">
                      <option value="en-us">EN-US</option>
                      <option value="en-aus">EN-AUS</option>
                      <option value="en-uk">EN-UK</option>
                      <option value="en-in">EN-IN</option>
                    </select> */}
                    <select
                      className="form-select form-select-sm border-0 bg-light m-0"
                      aria-label=".form-select-sm example"
                    >
                      <option value="en-us">EN-US</option>
                      <option value="en-aus">EN-AUS</option>
                      <option value="en-uk">EN-UK</option>
                      <option value="en-in">EN-IN</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 mrgintop">
                  <span className="   me-3">
                    <strong>rajkumarramineni19@gmail.com</strong>
                  </span>
                </div>
                <div className="col-12 col-lg-4 col-md-4 col-sm-12 mrgintop">
                  <span className="me-3 ">
                    <i className="fa-solid fa-phone me-1 "></i>
                    <strong>+91-9542346230</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 justify-content-center  mrgintop text-end ">
              <div className="row">
                <div className="col-12 col-lg-6 col-md-4 col-sm-12 "></div>
                <div className="col-12 col-lg-6 col-md-4 col-sm-12 ">
                  {userId && UserName ? (
                    <span className="me-3 text-decoration-none">
                      <button
                        className=" m-1 text-white btn btn-infobtn btn-sm "
                        onClick={() => logout()}
                      >
                        <strong>Logout</strong>
                        <CgLogOut className="fs-5 text-white m-1" />
                      </button>
                      <span className="text-decoration-none m-4">
                        <strong>{UserName}</strong>
                      </span>
                    </span>
                  ) : (
                    <span className="me-3 ">
                      <Link
                        className=" m-1 text-white text-decoration-none"
                        to="/login"
                      >
                        <AiOutlineUser className="fs-5 " />
                        Login
                      </Link>
                      /
                      <Link
                        className="text-white m-1 text-decoration-none"
                        to="/signup"
                      >
                        Signup
                      </Link>
                    </span>
                  )}

                  <span className="me-3">
                    <i className="fa-solid fa-file  text-muted me-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-1 shadow-sm">
        <div className="container">
          <Link className="navbar-brand " to="/">
            {Logo ? (
              <img src={Logo} alt="no-img" className="w50 height_image" />
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
                  {cartID ? <sup>{count}</sup> : <sup>{0}</sup>}
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
