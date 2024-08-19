import "./relatedProducts.css";
import data_product from "../assets/data";
import Item from "../item/item";

const RelatedProducts = ({ product }) => {
  const relatedProducts = data_product
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {relatedProducts.map((item, i) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
