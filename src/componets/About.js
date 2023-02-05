import React from "react";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const About = () => {
  return (
    <>
      <Meta title={"About-Us"} />
      <Breadcrumb title="About-Us" />
      <div className="container py-3">
        <div className="row">
          <h6 className="text-success">OUR COMPANY</h6>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 align-team-center ">
            <div>
              <h4 className="mb-5">
                We are Building The Destination For Getting Things Done
              </h4>
              <p>
                Tempus ultricies augue luctus et ut suscipit. Morbi arcu,
                ultrices purus dolor erat bibendum sapien metus.
              </p>
              <p>
                Tempus ultricies augue luctus et ut suscipit. Morbi arcu,
                ultrices purus dolor erat bibendum sapien metus. Sit mi,
                pharetra, morbi arcu id. Pellentesque dapibus nibh augue
                senectus.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className=" ">
              <img
                className="img-fluid img-thumbnail w-60"
                src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/page/about-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="row">
          <h5 className="text-success">OUR TEAM</h5>
          <h4 className="text-success">Top team of experts</h4>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mb-3" style={{ width: "18rem", height: "25" }}>
              <img
                src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/page/avatar-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body"></div>
              <ul className="list-unstyled text-center">
                <li className="list-group-item">
                  <h5 className="text-success">Patric Adams</h5>
                </li>
                <li className="list-group-item">
                  <p className="text-success">CEO & Co-Founder</p>
                </li>
              </ul>
              <div
                className="mobile-social-icon wow d-flex justify-content-center  fadeIn animated   animated animated"
                style={{ visibility: "visible" }}
              >
                <Link to="#">
                  <BsFacebook className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsTwitter className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsInstagram className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsPinterest className="bgsecondary" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mb-3" style={{ width: "18rem", height: "25" }}>
              <img
                src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/page/avatar-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body"></div>
              <ul className="list-unstyled text-center">
                <li className="list-group-item">
                  <h5 className="text-success">Patric Adams</h5>
                </li>
                <li className="list-group-item">
                  <p className="text-success">CEO & Co-Founder</p>
                </li>
              </ul>
              <div
                className="mobile-social-icon wow d-flex justify-content-center  fadeIn animated   animated animated"
                style={{ visibility: "visible" }}
              >
                <Link to="#">
                  <BsFacebook className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsTwitter className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsInstagram className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsPinterest className="bgsecondary" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mb-3" style={{ width: "18rem", height: "25" }}>
              <img
                src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/page/avatar-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body"></div>
              <ul className="list-unstyled text-center">
                <li className="list-group-item">
                  <h5 className="text-success">Patric Adams</h5>
                </li>
                <li className="list-group-item">
                  <p className="text-success">CEO & Co-Founder</p>
                </li>
              </ul>
              <div
                className="mobile-social-icon wow d-flex justify-content-center  fadeIn animated   animated animated"
                style={{ visibility: "visible" }}
              >
                <Link to="#">
                  <BsFacebook className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsTwitter className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsInstagram className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsPinterest className="bgsecondary" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
            <div className="card mb-3" style={{ width: "18rem", height: "25" }}>
              <img
                src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/page/avatar-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body"></div>
              <ul className="list-unstyled text-center">
                <li className="list-group-item">
                  <h5 className="text-success">Patric Adams</h5>
                </li>
                <li className="list-group-item">
                  <p className="text-success">CEO & Co-Founder</p>
                </li>
              </ul>
              <div
                className="mobile-social-icon wow d-flex justify-content-center  fadeIn animated   animated animated"
                style={{ visibility: "visible" }}
              >
                <Link to="#">
                  <BsFacebook className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsTwitter className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsInstagram className="bgsecondary" />
                </Link>
                <Link to="#">
                  <BsPinterest className="bgsecondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-2">
        <div className="row">
          <h4 className="text-success">Our Products</h4>
          <div className="col-12 col-sm-12 col-md-6 col-lg-12 ">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex aline-items-center  justify-content-between">
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
    </>
  );
};

export default About;
