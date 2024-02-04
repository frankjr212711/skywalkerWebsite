import { Link } from "react-router-dom";
import "./SkyNavbar.css";
import { Hero } from "../Hero";

export const SkyNavbar = () => {
  return (
    <>
      <div className="sky__nav">
        <div className="home_link">
          <i className="fa fa-arrow-left"></i>
          <Link to="/" className="anchor">
            Main Page
          </Link>
        </div>

        <div className="first__banner">
          <div className="first__section_content">
            <h2>Quality Drinking Waters delivered across Ghana</h2>
            <div className="social__media">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa fa-envelope"></i>
            </div>
          </div>
        </div>

        <div className="second__banner">
          <div className="second__section_content">
            <div className="second__logo_box">
              <Link to="/skywalker">
                <span>
                  <i className="fa fa-snowflake"></i>
                </span>
                <div className="second__banner_logo_title">
                  <h1>SKYWALKER</h1>
                </div>
                <p>water never tasted soo good...</p>
              </Link>
            </div>
            <ul className="second__banner_contact_section">
              <li>
                <span>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:info@skywalkerghana.com">
                    info@skywalkerghana.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-clock"></i>
                  <p>09:00AM - 5:00PM | MON-FRI</p>
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-phone"></i>
                  <p>+233 24 585 385</p>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="third__banner">
          <div className="third__section_content">
            <ul className="third_links">
              <li>
                <Link to="/skywalker">HOME</Link>
              </li>
              <li className="third_link">
                <span>WATERS</span>
                <i className="fa fa-caret-down"></i>
                <div className="sky__dropdown_menu-water">
                  <ul className="sky__dropdown_content">
                    <li>
                      <span>SACHET WATER</span>
                      <div className="items">
                        <p>Treated filtered Water</p>
                        <p>Natural mineral water</p>
                        <p>Sachet Water Production</p>
                        <p>Sachet Water Production</p>
                      </div>
                    </li>
                    <li>
                      <span>BOTTLED WATER </span>
                      <div className="items">
                        <p>Treated filtered Water</p>
                        <p>Natural mineral water</p>
                        <p>Sachet Water Production</p>
                        <p>Sachet Water Production</p>
                      </div>
                    </li>
                    <li>
                      <span>DISPENSER BOTTLES</span>
                      <div className="items">
                        <p>Treated filtered Water</p>
                        <p>Natural mineral water</p>
                        <p>Sachet Water Production</p>
                        <p>Sachet Water Production</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/skydelivery">DELIVERY INFORMATION</Link>
              </li>
              <li>
                <Link to="/skyterms">TERMS & CONDITIONS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Hero />
    </>
  );
};
