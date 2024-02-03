import { GjrHeroSection, Slider } from "./GjrHeroSection";
import "./NavbarGJR.css";
import { Link } from "react-router-dom";

const gjr_hero_container = {
  width: "100%",
  margin: "0 auto",
  height: '100vh',
  // gridRow: "span 2",
};

export const NavbarGJR = () => {

  const imgOne = "images/img-1.jpg";
  const imgTwo = "images/img-2.jpg";
  const imgThre = "images/img-4.jpg";
  const imgFour = "images/img-4.jpg";
  const imgFive = "images/img-5.jpg";

  return (
    <>
      <section className="nav__gjr_wrapper">
        <div className="nav__gjr">
          <div className="nav__content_gjr">
            <div className="nav__banner_gjr">
              <div className="logo_gjr">
                {/* <img src="" alt="gjr_logo" /> */}
                <i className="fas fa-snowflake"></i>
              </div>
              <h1 className="nav__title">
                GJR
                <span>COMPANY LIMITED</span>
              </h1>
              <p>The Right Fit For Your Home & Office</p>
            </div>

            <ul>
              <li>
                <Link to="/gjr">Home</Link>
              </li>
              <li>
                <Link>Kitchens</Link>
              </li>
              <li>
                <Link>Wordrobes</Link>
              </li>
              <li>
                <Link>TV Units</Link>
              </li>
              <li>
                <Link>Vanity Units</Link>
              </li>
            </ul>
          </div>
        </div>
        <div style={gjr_hero_container}>
          <GjrHeroSection />
        </div>
      </section>
    </>
  );
};
