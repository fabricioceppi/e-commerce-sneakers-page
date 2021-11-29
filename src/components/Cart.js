import React from "react";
import Item from "./Item";

export default function Cart(props) {
  const items = props.items.map((item) => (
    <Item
      image={item.images[0].thumbnail}
      title={item.title}
      price={item.finalPrice}
      amount={item.amount}
      id={item.id}
      key={item.id}
      deleteItem={props.deleteItem}
    />
  ));
  const hasItems = props.items.length > 0;
  return (
    <div className={props.dynamicClass}>
      <div className="cart-container">
        <h3>Cart</h3>
        <div>
          {hasItems ? (
            <div>
              {items} <button className='checkout-button'>Checkout</button>
            </div>
          ) : (
            <p className="empty-message">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}
