import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "../../App.css";
import { updateCartItem } from "../../redux/slices/cartSlice";
function CartItemCard({ cart }) {
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <div className="cart-item-content">
        <img
          className="cart-item-img"
          src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/parts/batch-4/93300103/93300103_TT.jpg?impolicy=myresize&rw=700"
        />

        <div className="cart-item-text">
          <h4>{cart.name}</h4>
          <p style={{ color: "#ccc" }}>
            Brightly serum{" "}
            <span>
              {" "}
              {cart?.isFavourite ? (
                <FaHeart size={30} color="red" />
              ) : (
                <CiHeart size={30} />
              )}{" "}
            </span>
          </p>

          <p style={{ fontWeight: "bold" }}>$ {cart.price}</p>
        </div>
        <div className="cart-item-quantity-btn">
          <button
            onClick={() =>
              dispatch(updateCartItem({ itemId: cart.id, actionType: "INCR" }))
            }
          >
            +
          </button>
          <p>{cart.quantity}</p>
          <button
            onClick={() =>
              dispatch(updateCartItem({ itemId: cart.id, actionType: "INCR" }))
            }
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
