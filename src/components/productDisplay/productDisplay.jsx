import "./productDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const capitalizeCategory = (category) => {
    if (!category) return "";
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          {Array(4)
            .fill(product.image)
            .map((image, index) => (
              <img key={index} src={image} alt={`Product image ${index + 1}`} />
            ))}
        </div>

        <div className="product-display-img">
          <img
            className="product-display-img-main"
            src={product.image}
            alt="Product main"
          />
        </div>
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          {Array(4)
            .fill(star_icon)
            .map((star, index) => (
              <img key={index} src={star} alt="Star icon" />
            ))}
          <img src={star_dull_icon} alt="Dull star icon" />
          <p>(122)</p>
        </div>

        <div className="price">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>

        <div className="description">
          {`A lightweight, usually knitted, pullover shirt, close fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.`}
        </div>

        <div className="size">
          <h1>Select Size</h1>
          <div className="sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="category">
          <span>Category : </span>
          {capitalizeCategory(product.category)}
        </p>
        <p className="category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
