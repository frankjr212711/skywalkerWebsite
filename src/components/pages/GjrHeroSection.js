import { useState } from "react";
import "./GjrHeroSection.css";



export const GjrHeroSection = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const leftArrowStyles = {
    // width: '100px',
    // height: '100%',
    border: "1px solid red",
    position: "absolute",
    top: "50%",
    left: "32px",
    transform: "translate(0, -50%)",
    fontSize: "35px",
    color: "#111",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    right: "32px",
    transform: "translate(-50%, 0%)",
    fontSize: "35px",
    color: "#111",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const dotContainerStyles = {
    position: "absolute",
    bottom: "32px",
    left: "50%",
    transform: "translate(-50%, 0)",
    height: "100px",
    width: "200px",
    border: "1px solid red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const dotStyles = {
    margin: "0 auto",
    cursor: "pointer",
    fontSize: "20px",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      
      <div style={leftArrowStyles}>
        <i className="fa fa-angle-left" onClick={goToPrevious}></i>
      </div>

      <div style={rightArrowStyles}>
        <i className="fa fa-angle-right" onClick={goToNext}></i>
      </div>

      <div style={slideStyles}>
        <div style={dotContainerStyles}>
          {/* {slides.map((slide, slideIndex) => {
            <div
              key={slideIndex}
              style={dotStyles}
              onClick={() => goToSlide(slideIndex)}
            >
             
              <i className="fas fa-circle"></i>
            </div>; 
          })}*/}
        </div>
      </div>

    </div>
  );
};
