import { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={url + "/images/" + image} alt={name} className="food-item-image" />
      </div>

      <div className="food-item-content">
        <div className="food-item-header">
          <h3 className="food-item-title">{name}</h3>
          <div className="food-item-rating">
            <img src={assets.rating_starts} alt="Rating" />
          </div>
        </div>

        <p className="food-item-description">{description}</p>

        <div className="food-item-footer">
          <div className="food-item-price">${price}</div>

          {!cartItems[id] ? (
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(id)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="cart-controls">
              <button
                className="cart-btn remove-btn"
                onClick={() => removeFromCart(id)}
              >
                -
              </button>
              <span className="cart-quantity">{cartItems[id]}</span>
              <button
                className="cart-btn add-btn"
                onClick={() => addToCart(id)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
