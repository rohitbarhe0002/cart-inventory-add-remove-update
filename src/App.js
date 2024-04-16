// import React, { useState } from "react";
// import "./App.css";
// const initialItems = [
//   {
//     id: 1,
//     name: "Adidas",
//     itemDesc: "EQT Gozezila",
//     itemImg:
//       "https://www.harley-davidson.com/content/dam/h-d/images/product-images/parts/batch-4/93300103/93300103_TT.jpg?impolicy=myresize&rw=700",
//     price: 280,
//     quantity: 1,
//     totalPrice: 280,
//   },
//   {
//     id: 2,
//     name: "Adidas",
//     itemDesc: "EQT Gozezila",
//     itemImg:
//       "https://www.harley-davidson.com/content/dam/h-d/images/product-images/parts/batch-4/93300103/93300103_TT.jpg?impolicy=myresize&rw=700",
//     price: 280,
//     quantity: 1,
//     totalPrice: 280,
//   },
//   {
//     id: 3,
//     name: "Adidas",
//     itemDesc: "EQT Gozezila",
//     itemImg:
//       "https://www.harley-davidson.com/content/dam/h-d/images/product-images/parts/batch-4/93300103/93300103_TT.jpg?impolicy=myresize&rw=700",
//     price: 280,
//     quantity: 1,
//     totalPrice: 280,
//   },

//   {
//     id: 4,
//     name: "Adidas",
//     itemDesc: "EQT Gozezila",
//     itemImg:
//       "https://www.harley-davidson.com/content/dam/h-d/images/product-images/parts/batch-4/93300103/93300103_TT.jpg?impolicy=myresize&rw=700",
//     price: 280,
//     quantity: 1,
//     totalPrice: 280,
//   },
// ];

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     const itemIsAdded = cart.findIndex((itm) => itm.id === item.id);
//     if (itemIsAdded !== -1) {
//       alert("Item already added");
//       return;
//     }
//     setCart([...cart, { ...item }]);
//   };

//   const removeFromCart = (itemId) => {
//     setCart(cart.filter((item) => item.id !== itemId));
//   };

//   const updateQuantity = (itemId, action) => {
//     const updatedCart = cart.map((item) => {
//       if (item.id === itemId) {
//         let newQuantity;
//         if (action === "INCR") {
//           newQuantity = item.quantity + 1;
//         } else {
//           newQuantity = item.quantity - 1 >= 0 ? item.quantity - 1 : 0;
//         }
//         return {
//           ...item,
//           quantity: newQuantity,
//           totalPrice: newQuantity * item.price,
//         };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//   };

//   return (
//     <div className="cards-container">
//       <ul>
//         {initialItems.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//             <button onClick={() => addToCart(item)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <h2>Cart</h2>
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price} - Quantity:
//               <button onClick={() => updateQuantity(item.id, "INCR")}>+</button>
//               {item.quantity}
//               <button onClick={() => updateQuantity(item.id, "DECR")}>-</button>
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               <p>Total Price: ${item.totalPrice}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./components/CartList";
import ProductList from "./components/ProductList";
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Home /> */}
        {/* <Post /> */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
