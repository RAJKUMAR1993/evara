import React, { useState } from "react";
// import { AiFillAppstore } from "react-icons/ai";
import { addToCartData } from "../apis/api";
import { toast } from "react-toastify";

// create Context

export const CartContext = React.createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //addToCart
  const addToCart = async (cartData) => {
    try {
      const response = await addToCartData(cartData);

      if ((response.status = 200)) {
        // setTotalRecords(response.data.length);
        toast.success("Product added to cart successfully");
        setCart([...cart, { ...cartData, quantity: 1 }]);
        console.log(cart, "cart");
      }
    } catch (error) {
      console.log(error);
    }
    setCart([...cart, { ...cartData, quantity: 1 }]);
    window.localStorage.setItem("Cart", cart.length);

    window.localStorage.setItem("cartData", JSON.stringify(cart));
  };

  // useEffect(() => {
  //   addToCart();
  // });
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// gobal custom Hooks

// export const useGlobalContext = () => {
//   return useContext(CartProvider);
// };
export default CartProvider;
