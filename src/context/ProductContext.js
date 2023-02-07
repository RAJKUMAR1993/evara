import React, { useState } from "react";
// import { AiFillAppstore } from "react-icons/ai";
import { addToCartData, cartRemoveAll } from "../apis/api";
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
        toast.success("Product added to cart successfully");
        setCart([...cart, { ...cartData, quantity: 1 }]);
      }
    } catch (error) {
      console.log(error);
    }
    setCart([...cart, { ...cartData, quantity: 1 }]);
    localStorage.setItem("Cart", cart.length);
  };

  // Remove Cart

  const removeProduct = async (id) => {
    try {
      const response = await cartRemoveAll(id);
      const delCart = cart.filter((item) => {
        return item.id !== id;
      });
      setCart(delCart);
      if ((response.status = 200)) {
        toast.error("Product removed from cart successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Increase Amount
  const amountIncrease = (id) => {
    const inAmount = cart.find((inAmount, index) => inAmount.id === id);
    addToCart(inAmount, id);
  };
  //decrease Amount
  const decreaseAmount = (id) => {
    console.log(id, "decreaseAmount");
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeProduct,
        amountIncrease,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// gobal custom Hooks

// export const useGlobalContext = () => {
//   return useContext(CartProvider);
// };
export default CartProvider;
