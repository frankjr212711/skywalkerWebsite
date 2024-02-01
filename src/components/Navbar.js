import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// Components
import { Button } from "./Button";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scroll, setScroll] = useState(true);
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
    console.log("scroll");
    if (window.innerHeight <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <nav>
      <div className="nav__top">
        <div className="wrapper">
          <div className="call__line_container">
            <span className="">
              <i className="fa-solid fa-envelope"></i>
              <p>info@skywalkerghana.com</p>
            </span>
            <span className="">
              <i className="fa-solid fa-phone"></i>
              <p>+233 245 855 385 | +233 245 855 385 </p>
            </span>
          </div>
        </div>
      </div>

      <div className="nav__bottom">

        <Link to="/" className="logo_link">
          <div className="nav__logo_box">
            <h3>Skywalker</h3>
            <i className="fab fa-typo3"></i>
          </div>
        </Link>

        <div className={click ? "nav__links active" : "nav__links"}>

          <div className="nav__header">
            <Link to="/" onClick={closeMenu}>
              <div className="nav__logo_box">
                <h4>Skywalker</h4>
                <i className="fab fa-typo3"></i>
              </div>
            </Link>
            <div className="nav__close_btn" onClick={closeMenu}>
              <i className="fa-solid fa-times"></i>
            </div>
          </div>

          <ul className="navs">
            <li className="nav__link">
              <Link to="/about" className="nav__link" onClick={closeMenu}>
                <span>Why Us?</span>
              </Link>
            </li>
            {/* <li className="nav__link">
              <span>
                Kitchens
                <i className="fa fa-angle-down"></i>
              </span>

              <div className="mega__dropdown">
                <ul className="mega__dropdown_container">
                  <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Classic English Kitchen</h4>
                    <span>
                      <Link>Classic Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Heirloom Collection</h4>
                    <span>
                      <Link>Heirloom Furniture & Doors</Link>
                      <Link>Heirloom Accessories</Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Sabastian Cox Kitchen</h4>
                    <span>
                      <Link>The Sabastian Projects</Link>
                      <Link>Sabastian Catalogue </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>

                </ul>
              </div>
            </li> */}
            {/* <li className="nav__link">
              <span>
                Wardrobes
                <i className="fa fa-angle-down"></i>
              </span>
              <div className="mega__dropdown">
                <ul className="mega__dropdown_container">
                  <li>

                    <header>
                      <h4>Fitted Wardrobes</h4>
                    </header>

                    <span>

                      <Link>Avon Fitted</Link>
                      <Link>Cliveden</Link>
                      <Link>Croft</Link>
                      <Link>New Elemore</Link>
                      <Link>Elkin</Link>
                      <Link>Langton</Link>
                      <Link>Langton Mirrored</Link>
                      <Link>Libretto</Link>
                      <Link>Linje</Link>
                      <Link>Marden</Link>
                      <Link>Radley</Link>
                      <Link>Rialto Curved</Link>
                      <Link>Rialto Square</Link>
                      <Link>Seton</Link>
                      <Link>Willesley</Link>

                    </span>
                  </li>
                  <li>
                    <h4>Sliding Wardrobes</h4>
                    <span>
                      <Link>High Gloss Sliding</Link>
                      <Link>Matt Finish Sliding </Link>
                      <Link>Mirrored Sliding </Link>
                      <Link>Painted Sliding </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Heirloom Collection</h4>
                    <span>
                      <Link>Heirloom Furniture & Doors</Link>
                      <Link>Heirloom Accessories</Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Sabastian Cox Kitchen</h4>
                    <span>
                      <Link>The Sabastian Projects</Link>
                      <Link>Sabastian Catalogue </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </li> */}
            {/* <li className="nav__link">
              <span>
                TV Units
                <i className="fa fa-angle-down"></i>
              </span>

              <div className="mega__dropdown">
                <ul className="mega__dropdown_container">
                  <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Classic English Kitchen</h4>
                    <span>
                      <Link>Classic Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Heirloom Collection</h4>
                    <span>
                      <Link>Heirloom Furniture & Doors</Link>
                      <Link>Heirloom Accessories</Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Sabastian Cox Kitchen</h4>
                    <span>
                      <Link>The Sabastian Projects</Link>
                      <Link>Sabastian Catalogue </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                  <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </li> */}
          
            <li className="nav__link nav__link_icon">
              <span>
                Our Companies
                <i className="fa fa-angle-down"></i>
              </span>
              <div className="mega__dropdown">
                <ul className="mega__dropdown_container">
                  <li>

                    <header>
                      <Link to='/gjr' onClick={closeMenu}>
                      <i className="fa fa-arrow-right"></i>
                        <h3>GJR FURNITURES</h3>
                      </Link>
                    </header>

                    <span>
                      <Link>Kitchens</Link>
                      <Link>Wardrobes</Link>
                      <Link>TV Units</Link>
                      <Link>Vanity Units</Link>
                      {/* <Link>Building Construction</Link> */}
                      {/* <Link>Janitorial Services</Link> */}
                      <Link>Others</Link>
                    </span>
                  </li>
                  <li>
                    <Link to='/skywalker'>
                      <i className="fa fa-arrow-right"></i>
                      <h3>SKYWALKER WATER</h3>
                    </Link>
                    <span>
                      <Link>Sachet Water Production & Distribution</Link>
                      <Link>Water Despenser</Link>
                      <Link>Dispenser Bottles</Link>
                      <Link>Delivery </Link>
                    </span>
                  </li>
                  <li>
                    <Link to='/librex'>
                      <i className="fa fa-arrow-right"></i>
                      <h3>LIBREX HOLDINGS</h3>
                    </Link>
                
                    <span>
                      <Link>Pamello Hot & Cold Water Purifier</Link>
                      <Link>Crystello Water Purifier</Link>
                      <Link>Waterello Water Treatment System</Link>
                      <Link>Ritello Water Filteration Vacuum Cleaner</Link>
                    </span>
                  </li>
                  <li>
                    <Link to='/fifthstar'>
                      <i className="fa fa-arrow-right"></i>
                      <h3>5TH STAR ALUMINIUMS</h3>
                    </Link>
                    <span>
                      <Link>Cookwares</Link>
                      <Link>Frying Pans & Metch</Link>
                      <Link>Set of Cooking Pots All Sizes</Link>
                      <Link>Others</Link>
                    </span>
                  </li>
                  {/* <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li> */}
                  {/* <li>
                    <h4>The Real Kitchen</h4>
                    <span>
                      <Link>Real Projects</Link>
                      <Link>Projects Gallery & prices </Link>
                    </span>
                  </li> */}
                </ul>
              </div>
            </li>
            <li className="nav__link nav__link_icon">
              <span>
                Company
                <i className="fa fa-angle-down"></i>
              </span>
              <div className="dropdown__menu">
                <ul>
                  <li >
                    <Link to="/about" onClick={closeMenu}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav__link">
              <span>
                <Button
                  buttonStyle="btn--primary"
                  buttinSize="btn--large"
                  closeMenu={closeMenu}
                >
                  Contact Sales
                </Button>
                {/* <i className="fa-sold fa-plus"></i> */}
              </span>
            </li>
          </ul>


        </div>

        <div className="nav__menu_btn" onClick={handleClick}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};
