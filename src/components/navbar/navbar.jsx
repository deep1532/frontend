import React, { useContext, useRef, useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import nav_dropdown from "../assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const categories = [
    { name: "Shop", key: "shop", path: "/" },
    { name: "Men", key: "men", path: "/men" },
    { name: "Women", key: "women", path: "/women" },
    { name: "Kids", key: "kids", path: "/kids" },
  ];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper logo" />
        <p>Shopper</p>
      </div>

      <img
        className="nav-dropdown"
        onClick={dropdownToggle}
        src={nav_dropdown}
        alt="Nav dropdown"
      />
      <ul ref={menuRef} className="nav-menu">
        {categories.map((item) => (
          <li key={item.key} onClick={() => setActiveCategory(item.key)}>
            <Link style={{ textDecoration: "none" }} to={item.path}>
              {item.name}
            </Link>
            {activeCategory === item.key && <hr />}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
