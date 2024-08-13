import "./breadCrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const BreadCrum = (props) => {
  const { product } = props;

  return (
    <div className="breadCrum">
      HOME <img src={arrow_icon} alt="Arrow" />
      SHOP <img src={arrow_icon} alt="Arrow" />
      {product.category} <img src={arrow_icon} alt="Arrow" />
      {product.name}
    </div>
  );
};

export default BreadCrum;
