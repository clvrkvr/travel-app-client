import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--clear"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onCLick,
  buttonStyle,
  buttonSize,
  path,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={`${path}`} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onCLick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};