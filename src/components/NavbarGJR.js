import { GjrHeroSection } from "./GjrHeroSection";
import "./NavbarGJR.css";
import { Link } from "react-router-dom";

const containerStyles = {
  width: '100%',          
  margin: '0 auto',
  gridRow: 'span 3'
};

export const NavbarGJR = () => {
  const slides = [
    { url: 'images/img-1.jpg', title: 'Beach' },
    { url: 'images/img-2.jpg', title: 'Boat' },
    { url: 'images/img-3.jpg', title: 'Forest' },
    { url: 'images/img-4.jpg', title: 'City' },
    { url: 'images/img-5.jpg', title: 'Italy' }
  ];


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
              <span>Furniture</span>
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
        <div style={containerStyles}>
          <GjrHeroSection slides={slides } />

        </div>
      </section>
 


    </>
  );
};
