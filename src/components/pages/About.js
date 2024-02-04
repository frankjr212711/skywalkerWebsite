import './About.css'
import { HomeNavbar } from './HomeNavbar'

export const About = () => {
  return (
    <>
       <HomeNavbar/>
    <div className="about__content_wrapper">
      <div className="about__content">
        <h1>About Us</h1>
      </div>
    </div>
    
    </>
 
  )
}