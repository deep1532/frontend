import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ id, image, name, new_price, old_price }) => {
  const handleImageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={handleImageClick} src={image} alt={`${name} Image`} />
      </Link>

      <p>{name}</p>

      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        {old_price && <div className="item-price-old">${old_price}</div>}
      </div>
    </div>
  );
};

export default Item;
