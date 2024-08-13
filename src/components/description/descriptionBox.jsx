import "./descriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="navigator">
        <div className="nav-box">Description</div>
        <div className="nav-box fade">Reviews (122)</div>
      </div>
      <div className="description">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual market place where businesses and individuals can
          showcase their products, interact with customers and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immence popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display product or service along with
          detailed description, prices, images, and any available variations
          (e.g., sizes, colors). Each product usually its own dedicated page
          with relavent information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
