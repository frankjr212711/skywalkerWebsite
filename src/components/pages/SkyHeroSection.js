
import { useState } from 'react';
import './SkyHeroSection.css';


export const SkyHeroSection = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,

  }

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}></div>

    </div>
  )
}