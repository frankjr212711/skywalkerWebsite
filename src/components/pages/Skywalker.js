import { SkyHeroSection } from "./SkyHeroSection";
import "./Skywalker.css";
import { Link } from "react-router-dom";

export const Skywalker = () => {
  return (
    <>
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
                <p>EMAIL</p>
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
          <ul>
          <li className="t_link">
              <Link to='/skywalker'>
                HOME
              </Link>
              {/* <i className="fa fa-caret-down"></i> */}
            </li>
            <li className="t_link">
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
            <li className="t_link">
              <span>MORE INFORMATION</span>
              <i className="fa fa-caret-down"></i>
              <div className="sky__dropdown_menu-info">
              <ul >
                <li>
                  <Link>CONTACT US</Link>
                </li>
                <li>
                  <Link>DELIVERY INFORMATION</Link>
                </li>
                <li>
                  <Link>TERMS & CONDITIONS</Link>
                </li>
                <li>
                  <Link>CAREERS</Link>
                  </li>
              </ul>
              </div>
          
            </li>
          </ul>
        </div>
      </div>


      <SkyHeroSection />
      
      <div className="items__container">
      <div className="item">
          <div className="item__img_box">
            image
          </div>
          <div className="info__box">
            <h5 className="item__desc">22 ARTESIAN</h5>
            <p className="item__post">2 PRODUCTS</p>
          </div>
        </div>

        <div className="item">
          <div className="item__img_box">
            image
          </div>
          <div className="info__box">
            <h5 className="item__desc">22 ARTESIAN</h5>
            <p className="item__post">2 PRODUCTS</p>
          </div>
        </div>
      

        <div className="item">
          <div className="item__img_box">
            image
          </div>
          <div className="info__box">
            <h5 className="item__desc">22 ARTESIAN</h5>
            <p className="item__post">2 PRODUCTS</p>
          </div>
        </div>

        <div className="item">
          <div className="item__img_box">
            image
          </div>
          <div className="info__box">
            <h5 className="item__desc">22 ARTESIAN</h5>
            <p className="item__post">2 PRODUCTS</p>
          </div>
        </div>

      </div>
    </>
  );
};
