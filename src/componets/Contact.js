import React from "react";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
import { AiOutlineHome, AiOutlineMail, AiFillInfoCircle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <Breadcrumb title="Contact" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-7 ">
            <h5 className="text-center text-success fst-italic fw-bold">
              Drop Us a Line
            </h5>
            <form class="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Your Mobile Number
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <label for="floatingTextarea2">Message</label>
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-success ">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5  ">
            <h5 className="text-center text-success fst-italic fw-bold">
              Get in touch with us.....!
            </h5>
            <div className=" py-3 mt-5 m-5">
              <ul className="ps-0 ">
                <li className="list-group-item  d-flex align-content-center gap-15">
                  <AiOutlineHome className="fs-4" />
                  <address>Hno.6-85/B, Kansas, oliva Street,USA</address>
                </li>
                <li className="list-group-item mb-3 d-flex align-content-center gap-15">
                  <BiPhoneCall className="fs-4" /> +91 9848604561
                </li>
                <li className="list-group-item mb-3 d-flex align-content-center gap-15">
                  <AiOutlineMail className="fs-4" />{" "}
                  rajkumarramineni19@gmail.com
                </li>
                <li className="list-group-item mb-3 d-flex align-content-center gap-15">
                  <AiFillInfoCircle className="fs-4" /> Monday - Friday
                  <b>10AM -7PM</b>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6402524.292984618!2d-102.7091991677511!3d38.41298999821053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skansas!5e0!3m2!1sen!2sin!4v1675322440077!5m2!1sen!2sin"
                width="1300"
                height="500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
