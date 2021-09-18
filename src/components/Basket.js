import React from "react";

export default function Basket(props) {
  const { cart, onAddHandler, onRemoveHandler } = props;
  const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const tax = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 35;
  const totalPrice = itemPrice + tax + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cart.length === 0 && <div>There is No Item in Cart!</div>}</div>
      {cart.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button
              onClick={() => {
                onAddHandler(item);
              }}
              className="add"
            >
              +
            </button>
            <button
              onClick={() => {
                onRemoveHandler(item);
              }}
              className="remove"
            >
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cart.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${tax.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total</strong>
            </div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Checkout!")}>Checkout</button>
          </div>
        </>
      )}
    </aside>
  );
}
