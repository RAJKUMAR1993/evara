import React from "react";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userRegisterApi } from "../apis/api";

const schema = yup
  .object({
    name: yup.string().min(5).max(10).required(),
    email: yup.string().email().max(150).required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required();

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (userData) => {
    if (userData.password !== userData.confirmPassword) {
      toast.error("Passwords do not match... ");
      return;
    }
    // console.log(userData);
    try {
      const response = await userRegisterApi(userData);
      if (response.status === 200) {
        toast.success("User Register successfully ");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      if (error && error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Meta title={"Signup"} />
      <Breadcrumb title="Signup" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4"></div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="">
              <h4 className="text-center text-success">Login</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                  <small className="text-danger">{errors.name?.message}</small>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                  <small className="text-danger">{errors.email?.message}</small>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                  />
                  <small className="text-danger">
                    {errors.password?.message}
                  </small>
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    className="form-control"
                  />
                  <small className="text-danger">
                    {errors.confirmPassword?.message}
                  </small>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-3 form-check">
                    <label
                      className="form-check-label"
                      for="exampleCheck1"
                    ></label>
                  </div>
                  <div className="mb-3 form-check">
                    <Link
                      to="/"
                      className="form-check-label text-decoration-none text-dark"
                      for="exampleCheck1"
                    >
                      Forgot Password
                    </Link>
                  </div>
                </div>

                <button type="submit" className="btn btn-success btnTop">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;
