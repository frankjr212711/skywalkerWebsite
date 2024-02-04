import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  closeMenu
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/contact" className="btn-mobile" onClick={closeMenu}>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};