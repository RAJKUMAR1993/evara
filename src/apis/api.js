import axios from "axios";

// register user Api Data
const base_URL = "https://webla-api.uc.r.appspot.com/api/v1";
const product_URl = "https://fakestoreapi.com/products";
export const userRegisterApi = async (userRegData) => {
  const response = await axios({
    method: "POST",
    url: `${base_URL}/users/register`,
    data: {
      name: userRegData.name,
      email: userRegData.email,
      password: userRegData.password,
    },
    params: {},
    headers: {},
  });
  return response;
};

// Login Process
export const userLoginApi = async (userLoginData) => {
  const response = await axios({
    method: "POST",
    url: `${base_URL}/users/login`,
    data: {
      email: userLoginData.email,
      password: userLoginData.password,
    },

    headers: {},
  });
  return response;
};

export const getAllProducts = async () => {
  // console.log(setPageNum);
  // const token = localStorage.getItem("TOKEN_ID");
  const response = await axios({
    method: "GET",
    url: `${product_URl}`,
    // params: {
    //   per_page: 10,
    //   page: 3,
    // },
    // headers: {
    //   "X-Authorization": `Bearer ${token}`,
    // },
  });

  return response;
};
