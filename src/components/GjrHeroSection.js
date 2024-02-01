import { useState } from 'react'
import './GjrHeroSection.css'

export const GjrHeroSection = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative'
}
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`
  }
  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    left: '32px',
    transform: 'translateY(0, -50%)',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    right: '32px',
    transform: 'translateY(-50%, 0%)',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  }
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex)
  }
  
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  }
  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
  }
  return (
    <div style={sliderStyles}>
      <div>
        <div className="fa fa-angle-left" style={leftArrowStyles} onClick={goToPrevious}></div>
        <div className="fa fa-angle-right" style={rightArrowStyles} onClick={goToNext}></div>
      </div>


      <div style={slideStyles}></div>

      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => {
          <div key={slideIndex} style={dotStyles}>
                ⚫️
            
          </div>
        })}
      </div>


    
  </div>
 
  )
}
