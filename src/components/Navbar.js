import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// COMPONENTS
import { Button } from "./Button";

export const Navbar = () => {
  // STATES
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scroll, setScroll] = useState(true);

  // FUNCTIONS
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const showOnScroll = () => {
    console.log("scrolll");
    if (window.innerHeight <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  return (
    <nav>
      <div className="call_line">
        <ul>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <p>info@skywalkerghana.com</p>
            {/* <p>info@skywalkerghana.com</p> */}
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            <p>+233 245 855 385 | +233 245 855 385 </p>
          </li>
        </ul>
      </div>

      {/* <div className="nav__content"> */}
      <div className="nav__data">
        <div className="nav__logo_box" onClick={closeMenu}>
          <Link to="/">
            {/* <img src="" alt="" /> */}
            <h2>SKYWALKER</h2>
          </Link>
        </div>
        <div className="nav__menu_btn" onClick={handleClick}>
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className={click ? "nav__links active" : "nav__links"}>
        <div className="call_line active">
          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <p>info@skywalkerghana.com</p>
              {/* <p>info@skywalkerghana.com</p> */}
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>+233 245 855 385 | +233 245 855 385 </p>
            </li>
          </ul>
        </div>

        <div className="nav__links_header">
          <div className="nav__logo_box" onClick={closeMenu}>
            <Link to="/">
              {/* <img src="" alt="" /> */}
              <h2>SKYWALKER</h2>
            </Link>
          </div>

          <div className="nav__close_btn" onClick={closeMenu}>
            <i className="fa fa-times"></i>
          </div>
        </div>

        <ul className="navs">
          <li className="nav__link">
            <Link to="/about" className="" onClick={closeMenu}>
              Why Us?
            </Link>
          </li>
          <li className="nav__link">
            <span className="nav__btn">
              Kitchens
              <i className="fa fa-plus"></i>
            </span>
          </li>
          <li className="nav__link">
            <span className="nav__btn">
              Wardrobes
              <i className="fa fa-plus"></i>
            </span>
          </li>
          <li className="nav__link">
            <span className="nav__btn">
              TV Units
              <i className="fa fa-plus"></i>
            </span>
          </li>
          <li className="nav__link ">
            <span className="nav__btn">
              Services
              <i className="fa fa-plus"></i>
            </span>
          </li>
          <li className="nav__link ">
            <span className="nav__btn">
              Company
              <i className="fa fa-plus"></i>
            </span>

            <div className="dropdown__menu">
              <Link to="/about" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
              <Link to="/careers" onClick={closeMenu}>
                Careers
              </Link>
            </div>
          </li>
          <li className="nav__link">
            {/* <Link to="/sales" className="nav__link" onClick={closeMenu}>
              Contact Sales
            </Link> */}
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              closeMenu={closeMenu}
            >
              Contact Sales
            </Button>
          </li>
        </ul>
      </div>

      {/* </div> */}
    </nav>
  );
};
