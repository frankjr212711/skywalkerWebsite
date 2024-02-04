
import "./GjrNavbar.css";

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

      <div className="nav__gjr">
        
          <div className="nav__content_gjr">
          <div className="nav__banner_gjr">
          <div className="gjr_home_link">
          <i className="fa fa-arrow-left"></i>
          <Link to='/' className="anchor">Main Page</Link>
        </div>
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
              <li className="gjr_link">
                <Link to="/gjr">Home</Link>
              </li>
              <li className="gjr_link">
              <span>
               Kitchens
              </span>
              <i className="fa fa-angle-down"></i>
              <div className="gjr_mega_dropdown">

              </div>
              </li>
              <li className="gjr_link">
              <span>
                Wardrobes
              </span>
              <i className="fa fa-angle-down"></i>
              <div className="gjr_mega_dropdown">
                
              </div>
              </li>
              <li className="gjr_link">
              <span>
                TV Unit
              </span>
              <i className="fa fa-angle-down"></i>
              <div className="gjr_mega_dropdown">
                
              </div>
              </li>
            <li className="gjr_link">
              <span>
                Vanity Unit
              </span>
              <i className="fa fa-angle-down"></i>
          

              <div className="gjr_mega_dropdown">
                
              </div>
              </li>
            </ul>
          </div>
      </div>
      
      
          <Hero/>
    
    </>
  );
};
