import "./productDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="Product image list" />
          <img src={product.image} alt="Product image list" />
          <img src={product.image} alt="Product image list" />
          <img src={product.image} alt="Product image list" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-img-main"
            src={product.image}
            alt="Product image"
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_dull_icon} alt="star dull icon" />
          <p>(122)</p>
        </div>
        <div className="price">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="description">
          A lightweight, usually knitted, pullover shirt, close fitting and with
          a round necklines and short sleevs, worn as an undershirt or outer
          garment.
        </div>
        <div className="size">
          <h1>Select Size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="category">
          <span>Category : </span>Women, T-shirt, Crop top
        </p>
        <p className="category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
