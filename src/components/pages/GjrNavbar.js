
import "./GjrNavbar.css";
import { GjrHeroSection } from './GjrHeroSection';
import { Hero } from "../Hero";
import { Link } from "react-router-dom";


export const GjrNavbar = () => {

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

        
        <div>
          <Hero/>
        </div>
     
      </section>
    </>
  );
};
