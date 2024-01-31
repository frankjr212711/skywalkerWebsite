import { useState } from 'react'
import './GjrHeroSection.css'

export const GjrHeroSection = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: '750px',
    position: 'relative'
}
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`
  }
  return (
    <div style={sliderStyles}>

        <div style={slideStyles}></div>


    
  </div>
 
  )
}
