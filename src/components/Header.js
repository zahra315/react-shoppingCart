import React from "react";

export default function Header(props) {
  const { countCartItem } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>React Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/">
          Cart{" "}
          {countCartItem ? (
            <button className="badge">{countCartItem}</button>
          ) : (
            ""
          )}
        </a>{" "}
      </div>
    </header>
  );
}
