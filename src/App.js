import Main from "./components/Main";
import Basket from "./components/Basket";
import Header from "./components/Header";
import data from "./data/data";
import React, { useState } from "react";

function App() {
  const { products } = data;
  const [cart, setCart] = useState([]);
  const onAddHandler = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const onRemoveHandler = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header countCartItem={cart.length}></Header>
      <div className="row">
        <Main onAddHandler={onAddHandler} products={products}></Main>
        <Basket
          onAddHandler={onAddHandler}
          onRemoveHandler={onRemoveHandler}
          cart={cart}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
