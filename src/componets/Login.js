import React from "react";
import Meta from "../componets/Meta";
import Breadcrumb from "../componets/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userLoginApi } from "../apis/api";

const schema = yup
  .object({
    email: yup.string().email().max(150).required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (loginData) => {
    try {
      const response = await userLoginApi(loginData);
      console.log(response, "------>");
      if (response.status === 200) {
        const token = response.data.token;
        const cartId = response.data.cart_id;
       
        localStorage.setItem("TOKEN_ID", token);
        localStorage.setItem("CART_ID", cartId);

        toast.success("login successfully ");
        setTimeout(() => {
          navigate("/shop");
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
      <Meta title={"Login"} />
      <Breadcrumb title="Login" />
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4"></div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="">
              <h4 className="text-center text-success">Login</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small className="text-danger">{errors.email?.message}</small>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  <small className="text-danger">
                    {errors.password?.message}
                  </small>
                </div>
                <div className="form-group d-flex justify-content-between">
                  <button type="submit" className="btn btn-success ">
                    Submit
                  </button>
                  <p className="ml-3">Already have an account?</p>
                  <Link
                    to="/signup"
                    className=" text-decoration-none text-dark"
                  >
                    Sign in now
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
