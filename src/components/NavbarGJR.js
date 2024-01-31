import './NavbarGJR.css';
import { Link } from 'react-router-dom';
export const NavbarGJR = () => {
  return (
    <nav className='nav__gjr'>
      <div className="nav__content_gjr">
        <div className="nav__banner_gjr">
          <div className="logo_gjr">
            {/* <img src="" alt="gjr_logo" /> */}
            <i className="fab fa-typo3"></i>
          </div>
          <h1 className='nav__title'>
            GJR
            <span>Furniture</span>
          </h1>
        </div>
          <p>The Right Fit For Your Home & Office</p>

        <ul>
          <li>
            <Link>
              Kitchens
            </Link>
          </li>
          <li>
            <Link>
              Wordrobes
            </Link>
          </li>
          <li>
            <Link>
              TV Units
            </Link>
          </li>
          <li>
            <Link>
              Vanity Units
            </Link>
          </li>
        </ul>
      </div>
    
    </nav>
  )
}