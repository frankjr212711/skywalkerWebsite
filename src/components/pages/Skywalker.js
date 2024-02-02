import { Button } from "../Button";
import "./Skywalker.css";
import { Link } from "react-router-dom";
// components
import { SkyHeroSection } from "./SkyHeroSection";

const slides = [
  { url: "images/img-1.jpg", title: "image_1" },
  { url: "images/img-2.jpg", title: "image_2" },
  { url: "images/img-3.jpg", title: "image_3" },
  { url: "images/img-4.jpg", title: "image_4" },
  { url: "images/img-5.jpg", title: "image_5" },
];

const containerStyles = {
  width: "100%",
  height: "749px",
  margin: "14rem auto 0 auto",

  border: "1px solid red",
};
export const Skywalker = () => {
  return (
    <>
      <div className="sky__nav">
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
            <ul>
              <li className="t_link">
                <Link to="/skywalker">HOME</Link>
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
                  <ul className="sky__dropdown_content">
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
      </div>

      <div style={containerStyles}>
        <SkyHeroSection slides={slides} />
      </div>

      <div className="category__section">
        <div className="items__container">
          <div className="item">
            <div className="item__img_box">image</div>
            <div className="info__box">
              <h5 className="item__desc">22 ARTESIAN</h5>
              <p className="item__post">2 PRODUCTS</p>
            </div>
          </div>

          <div className="item">
            <div className="item__img_box">image</div>
            <div className="info__box">
              <h5 className="item__desc">22 ARTESIAN</h5>
              <p className="item__post">2 PRODUCTS</p>
            </div>
          </div>

          <div className="item">
            <div className="item__img_box">image</div>
            <div className="info__box">
              <h5 className="item__desc">22 ARTESIAN</h5>
              <p className="item__post">2 PRODUCTS</p>
            </div>
          </div>

          {/* <div className="item">
          <div className="item__img_box">
            image
          </div>
          <div className="info__box">
            <h5 className="item__desc">22 ARTESIAN</h5>
            <p className="item__post">2 PRODUCTS</p>
          </div>
        </div> */}
        </div>

        <div className="notice__board_container">
          <h1>
            Why Drink just any Water when you can drink <span>Pure,</span> &{" "}
            <span>Clean</span> instead
          </h1>

          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sit perspiciatis rem, ducimus hic impedit quibusdam omnis cum a,
            officia quo deleniti voluptate repellendus dolores? Voluptate fugiat
            adipisci temporibus atque.
          </h3>

          <Button>READ MORE</Button>
          <Button>READ MORE</Button>
        </div>
      </div>
    </>
  );
};
