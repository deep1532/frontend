import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers in Your Inbox</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
