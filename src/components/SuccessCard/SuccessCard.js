import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SuccessCard.css";
import IconSucces from "../../assets/images/icon-success.svg";

function SuccessReact() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "Correo no proporcionado";
  
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container-success">
      <img src={IconSucces} alt="success" />
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button onClick={handleClick}>Dismiss message</button>
    </div>
  );
}

export default SuccessReact;
