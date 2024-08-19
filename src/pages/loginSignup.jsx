import { useCallback, useState } from "react";
import "./CSS/loginSignup.css";

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });

  const inputFields = [
    { type: "text", name: "name", placeholder: "Your Name" },
    { type: "email", name: "email", placeholder: "Email Address" },
    { type: "password", name: "password", placeholder: "Password" },
  ];

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>

        <div className="signup-fields">
          {inputFields.map(({ type, name, placeholder }) => (
            <input
              key={name}
              type={type}
              name={name}
              value={formData[name]}
              placeholder={placeholder}
              onChange={handleChange}
            />
          ))}
        </div>

        <button>Continue</button>
        <p className="login">
          Already have an account? <span>Login Here</span>
        </p>

        <div className="login-signup-agree">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
