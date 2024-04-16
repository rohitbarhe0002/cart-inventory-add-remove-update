import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import "../../App.css";
function Card({ cartItem, addItemToCart, addItemToFavorite }) {
  return (
    <div className="card">
      <div className="card-header">
        {cartItem?.isFavourite ? (
          <FaHeart
            size={30}
            color="red"
            onClick={() => addItemToFavorite(cartItem.id)}
          />
        ) : (
          <CiHeart size={30} onClick={() => addItemToFavorite(cartItem.id)} />
        )}

        <IoIosAdd size={30} onClick={() => addItemToCart(cartItem)} />
      </div>

      <img className="card-img" src={cartItem.itemImg} />
      <p className="card-title">{cartItem.name}</p>
      <p className="card-title">{cartItem.itemDesc}</p>
      <p className="card-price">${cartItem.price}</p>
    </div>
  );
}

export default Card;
