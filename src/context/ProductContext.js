import React, { useEffect, useState } from "react";
// import { AiFillAppstore } from "react-icons/ai";
import { addToCartData, cartRemoveAll } from "../apis/api";
import { toast } from "react-toastify";

// create Context

export const CartContext = React.createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  // update Item Amount

  useEffect(() => {
    const total = cart.reduce((accumlator, currentItemAmount) => {
      return accumlator + currentItemAmount.price * currentItemAmount.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumlator, currentItemAmount) => {
        return accumlator + currentItemAmount.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //addToCart
  const addToCart = async (cartData, id) => {
    try {
      const response = await addToCartData(cartData);
      if ((response.status = 200)) {
        const newItem = { ...cartData, amount: 1 };

        //item already in the cart
        const cartItem = cart.find((item) => {
          return item.id === id;
        });
        //if cart item already in the cart
        if (cartItem) {
          const newCart = [...cart].map((item) => {
            if (item.id === id) {
              return { ...item, amount: cartItem.amount + 1 };
            } else {
              return item;
            }
          });
          // console.log(amount);
          setCart(newCart);
        } else {
          setCart([...cart, newItem]);
        }
        toast.success("Product added to cart successfully");
      }

      //
    } catch (error) {
      console.log(error);
    }
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
    const cartItem = cart.find((item) => item.id === id);
    // console.log(item);
    addToCart(cartItem, id);
    //toast.info("Cart Update successfully");
  };
  //decrease Amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      if (cartItem.amount > 2) {
      }
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        total,
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
