import React from "react";
import deleteButton from "../assets/icons/icon-delete.svg";

export default function Item(props) {
  return (
    <div className='cart-item' id={props.id}>
      <img src={props.image} alt={props.title} />
      <div>
        <h4>{props.title}</h4>
        <p>
          <span>
            ${props.price} x {props.amount}
          </span>
          <span className='total-price'>${props.price * props.amount}</span>
        </p>
      </div>
      <button type='button'
        onClick={(e) => props.deleteItem(props.id)}
      >
          <img src={deleteButton} className='bin' alt='Bin icon. Press to delete this item from the cart'/>
      </button>
    </div>
  );
}
