import React, { useState } from "react";
import minus from "../assets/icons/icon-minus.svg";
import plus from "../assets/icons/icon-plus.svg";
import Gallery from "./Gallery";
import CartIcon from "../assets/icons/CartIcon";
import { nanoid } from "nanoid";

export default function Product(props) {
  const discountPrice = ((props.productData.price * props.productData.discount) / 100);
  const [productAmount, setProductAmount] = useState(0);
  const [isLightBoxActive, setLightBoxActive] = useState(false);
  const thisProduct = {...props.productData, finalPrice: discountPrice};
  const lightBox = isLightBoxActive ? <div className='lightbox'><Gallery images={thisProduct.images} closeLightBox={closeLightBox} closable={true}/></div> : '';

  function updateAmount(value) {
    const newAmount = value <= 0 ? 0 : value >= 20 ? 20 : isNaN(value) ? '' : value;
    setProductAmount(newAmount);
  }

  function openLightBox() {
    if (window.innerWidth > 700) {
      setLightBoxActive(true);
    }
  }

  function closeLightBox() {
    setLightBoxActive(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.updateCart({...thisProduct, amount: productAmount, id: nanoid()});
  }

  return (
    <div className='product'>
      <Gallery images={thisProduct.images} openLightBox={openLightBox} closable={false}/>
      {isLightBoxActive ? lightBox : ''}
      <div className="product-info">
        <h1>Sneaker Company</h1>
        <h2 className="prominent-text">{thisProduct.title}</h2>
        <p>{thisProduct.description}</p>
        <p className="prominent-text">
          ${thisProduct.finalPrice.toFixed(2)}
          <span className="discount">{thisProduct.discount}%</span>
          <span className="previous-price">${thisProduct.price.toFixed(2)}</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="custom-input">
            <img 
              src={minus} 
              alt="Minus button" 
              role="button" 
              onClick={() => updateAmount(productAmount - 1)}
              />
            <input
              type="number"
              id="product-input"
              aria-label="product amount"
              value={productAmount}
              onChange={(e) => updateAmount(e.target.valueAsNumber)}
            ></input>
            <img 
              src={plus} 
              alt="Plus button" 
              role="button" 
              onClick={() => updateAmount(productAmount + 1)}
              />
          </div>
          <button
            type="submit"
            className="add-to-cart"
            aria-label="add to cart"
          >
            <CartIcon color="hsl(25, 100%, 94%)" />
            <span>Add to cart</span>
          </button>
        </form>
      </div>
    </div>
  );
}
