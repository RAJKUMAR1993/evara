import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Layout,
  Home,
  Shop,
  ProductList,
  Cart,
  About,
  Contact,
  Wishlist,
  Login,
  Signup,
} from "./componets/Index";
//const token = localStorage.getItem("TOKEN_ID");
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="productList" element={<ProductList />} />

            <Route path="cart" element={<Cart />} />
            <Route path="wish-list" element={<Wishlist />} />
            <Route path="about-us" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
