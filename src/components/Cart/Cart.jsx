import React, { useState } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = ({ items, onInc, onDec, subtotal, remove, removeAll }) => {
  const [search, setSearch] = useState("");

  const filtered = items.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="Cart">
      {/* Search  */}
      <input
        type="search"
        placeholder="Search Cart . . ."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Heading */}
      <div className="Head">
        <div>
          <i class="fa-solid fa-cart-shopping"></i>
          <span> Order Summary</span>
        </div>

        <div>
          <button
            onClick={removeAll}
            disabled={items.length > 0 ? false : true}
          >
            Remove all
          </button>
        </div>
      </div>

      {/* List all items */}

      {filtered.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onInc={onInc}
          onDec={onDec}
          remove={remove}
        />
      ))}

      <hr />
      {/* Toatal  */}

      {items.length > 0 && (
        <>
          <div className="total-row">
            <h6> Subtotal</h6>
            <p> ${subtotal.toFixed(2)}</p>
          </div>
          <div className="total-row">
            <h6> Taxes</h6>
            <p> ${(subtotal * 0.089).toFixed(2)}</p>
          </div>
          <div className="total-row">
            <h6> Total(including Taxes)</h6>
            <p> ${(subtotal * 1.089).toFixed(2)}</p>
          </div>
        </>
      )}

      {items.length === 0 && (
        <p className="text-center">No items in the cart !</p>
      )}
    </div>
  );
};

export default Cart;
