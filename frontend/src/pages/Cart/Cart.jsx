import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const {
    food_list,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
    url,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <h2 className="cart-heading">Your Cart</h2>

      <div className="cart-items">
        <div className="cart-items-title" style={{ color: "white" }}>
          <p className="cart-title-item">Item</p>
          <p className="cart-title-title">Title</p>
          <p className="cart-title-price">Price</p>
          <p className="cart-title-quantity">Quantity</p>
          <p className="cart-title-total">Total</p>
          <p className="cart-title-remove">Remove</p>
        </div>

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <img src={url + "/images/" + item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">×</p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total card">
          <h3>Cart Totals</h3>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <div className="cart-total-details total">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
          <button className="checkout-btn" onClick={() => navigate("/order")}>
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promocode card">
          <p>If you have a promo code, enter it below:</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
