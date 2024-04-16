import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initialItems } from "../utils/constant";
import "../App.css";
import { addCartItem } from "../redux/slices/cartSlice";
import Card from "./shared/Card";
const ProductList = () => {
  const [products, setProducts] = useState(initialItems);

  const { cart: cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const addToCart = (item) => {
    const itemIsAdded = cartItems.findIndex((itm) => itm.id === item.id);
    if (itemIsAdded !== -1) {
      alert("Item already added");
      return false;
    }
    dispatch(addCartItem(item));
    navigate("/cart");
  };

  const addItemToFavorites = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, isFavourite: !product.isFavourite }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="cards-container">
      {products.map((cartItem, i) => (
        <Card
          addItemToCart={addToCart}
          key={i}
          cartItem={cartItem}
          addItemToFavorite={addItemToFavorites}
        />
      ))}
    </div>
  );
};

export default ProductList;
