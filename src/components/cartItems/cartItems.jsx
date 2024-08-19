import { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../context/shopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  const cartProducts = all_product.filter(
    (product) => cartItems[product.id] > 0
  );

  return (
    <div className="cartItems">
      <div className="format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {cartProducts.map(({ id, image, name, new_price }) => (
        <>
          <div key={id} className="format format-main">
            <img src={image} alt={name} className="product-icon" />
            <p>{name}</p>
            <p>${new_price}</p>
            <button className="quantity">{cartItems[id]}</button>
            <p>${new_price * cartItems[id]}</p>
            <img
              className="remove-icon"
              src={remove_icon}
              alt="Remove"
              onClick={() => removeFromCart(id)}
            />
          </div>
          <hr />
        </>
      ))}

      <div className="cart-items-down">
        <div className="total">
          <h1>Cart Totals</h1>
          <div>
            <div className="total-items">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
