import React, { useState } from "react";

const initialItems = [
  { id: 1, name: "Item 1", price: 10, quantity: 1 },
  { id: 2, name: "Item 2", price: 15, quantity: 1 },
  { id: 3, name: "Item 3", price: 20, quantity: 1 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Increment the quantity in initialItems array
    const itemIsAdded = cart.findIndex((itm) => itm.id === item.id);
    if (itemIsAdded !== -1) {
      alert("Item already added");
      return;
    }

    setCart([...cart, { ...item, totalPrice: item.price }]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        let newQuantity;
        if (action === "INCR") {
          newQuantity = item.quantity + 1;
        } else {
          newQuantity = item.quantity - 1 >= 0 ? item.quantity - 1 : 0; // Ensure quantity doesn't go below zero
        }
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newQuantity * item.price,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Simple React Shopping Cart</h1>
      <div>
        <h2>Items</h2>
        <ul>
          {initialItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - Quantity:
              <button onClick={() => updateQuantity(item.id, "INCR")}>+</button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, "DECR")}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <p>Total Price: ${item.totalPrice}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
