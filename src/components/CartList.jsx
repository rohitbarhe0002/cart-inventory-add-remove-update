import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
import CartItemCard from "../components/shared/CartItemCard";
import { resetCart } from "../redux/slices/cartSlice";

const CartList = () => {
  const { cart: cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="cart-items-header">
        <MdKeyboardArrowLeft size={30} onClick={() => navigate(-1)} />
        <h3>Cart</h3>
        <FaRegTrashCan size={30} onClick={() => dispatch(resetCart())} />
      </div>
      {cartItems.map((itm) => (
        <CartItemCard cart={itm} />
      ))}
    </>
  );
};

export default CartList;
