import { useContext } from "react";
import { useParams } from "react-router-dom";
import BreadCrum from "../components/breadCrum/breadCrum";
import { ShopContext } from "../context/shopContext";
import ProductDisplay from "../components/productDisplay/productDisplay";
import DescriptionBox from "../components/description/descriptionBox";
import RelatedProducts from "../components/relatedProducts/relatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts product={product} />
    </div>
  );
};

export default Product;
