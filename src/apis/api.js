import axios from "axios";

// register user Api Data
const base_URL = "https://webla-api.uc.r.appspot.com/api/v1";

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
  const token = localStorage.getItem("TOKEN_ID");
  const response = await axios({
    method: "GET",
    url: `${base_URL}/products`,
    // params: {
    //   per_page: 10,
    //   page: 3,
    // },
    headers: {
      "X-Authorization": `Bearer ${token}`,
    },
  });

  return response;
};

export const addToCartData = async (cartData) => {
  const token = localStorage.getItem("TOKEN_ID");
  const cartID = localStorage.getItem("CART_ID");

  const response = await axios({
    method: "POST",
    url: `${base_URL}/carts/${cartID}`,
    data: {
      id: cartData.id,
      quantity: 1,
    },
    headers: {
      "X-Authorization": `Bearer ${token}`,
    },
  });
  return response;
};

export const cartRemoveAll = async (id) => {
  const cartID = localStorage.getItem("CART_ID");
  const token = localStorage.getItem("TOKEN_ID");

  const response = await axios({
    method: "DELETE",

    url: `${base_URL}/carts/${cartID}/remove/${id}`,
    data: {
      id: id,
    },
    headers: {
      "X-Authorization": `Bearer ${token}`,
    },
  });
  return response;
};
