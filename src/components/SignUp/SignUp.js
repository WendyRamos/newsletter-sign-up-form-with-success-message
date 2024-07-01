import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { FaCheckCircle } from "react-icons/fa";
import SignUpImageDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import SignUpImageMobile from "../../assets/images/illustration-sign-up-mobile.svg";

function SignUp() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setEmailError("");
      navigate('/success', {state: { email: email} });
    } else {
      setEmailError("Valid email required");
    }
  };

  return (
    <div className="container-sign-up">
      <div className="container-register">
        <div className="container-list">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <FaCheckCircle className="icon-check-circle" />
              Product discovery and building what matters
            </li>
            <li>
              <FaCheckCircle className="icon-check-circle" />
              Measuring to ensure updates are a success
            </li>
            <li>
              <FaCheckCircle className="icon-check-circle" />
              And much more!
            </li>
          </ul>
        </div>
        <div className="container-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="flexbox">
              <label htmlFor="email">Email address</label>
              <p className="message-error">{emailError}</p>
            </div>
            <input
              className={emailError == "" ? "" : "error"}
              type="email"
              name="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
      </div>
      <div className="container-image">
        <img
          src={SignUpImageDesktop}
          alt="ImageDesktop"
          className="image-desktop"
        />
        <img
          src={SignUpImageMobile}
          alt="ImageMobile"
          className="image-mobile"
        />
      </div>
    </div>
  );
}

export default SignUp;
