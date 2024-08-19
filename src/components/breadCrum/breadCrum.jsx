// import "./breadCrum.css";
// import arrow_icon from "../assets/breadcrum_arrow.png";

// const BreadCrum = (props) => {
//   const { product } = props;

//   return (
//     <div className="breadCrum">
//       HOME <img src={arrow_icon} alt="Arrow" />
//       SHOP <img src={arrow_icon} alt="Arrow" />
//       {product.category} <img src={arrow_icon} alt="Arrow" />
//       {product.name}
//     </div>
//   );
// };

// export default BreadCrum;

import "./breadCrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const BreadCrum = ({ product }) => {
  if (!product) return null; // Early return if product is not provided

  const breadcrumbItems = [
    { label: "HOME" },
    { label: "SHOP" },
    { label: product.category },
    { label: product.name },
  ];

  return (
    <div className="breadCrum">
      {breadcrumbItems.map((item, index) => (
        <span key={index}>
          {item.label}
          {index < breadcrumbItems.length - 1 && (
            <img src={arrow_icon} alt="Arrow" />
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadCrum;
