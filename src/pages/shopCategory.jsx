import { useContext, useMemo } from "react";
import "./CSS/shopCategory.css";
import { ShopContext } from "../context/shopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = useMemo(
    () => all_product.filter((item) => item.category === props.category),
    [all_product, props.category]
  );

  return (
    <div className="shop-category">
      <img
        className="shopCategory-banner"
        src={props.banner}
        alt="Category Banner"
      />

      <div className="shopCategory-imageSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>

      <div className="shopCategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopCategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
