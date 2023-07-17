import React from "react";
import './CartItem.css'

const CartItem = ({ item, onInc, onDec, remove}) => {
  return (
    <div className="Cart-Item">
      <div className="left">
        <img src={item.image} alt="" />
        <h4> {item.title}</h4>
      </div>
      <div className="right">
        <div>
          <button > <i className="fa-solid fa-minus" onClick={()=>onDec(item.id)}></i></button>
          <span> {item.qty}</span>
          <button><i className="fa-solid fa-plus" onClick={()=>onInc(item.id)}></i></button>
        </div>
        <p> ${item.price}</p>

        <i class="fa-solid fa-trash-can remove" onClick={()=>remove(item.id)}></i>
      </div>
    </div>
  );
};

export default CartItem;
