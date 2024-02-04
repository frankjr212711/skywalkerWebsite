
import "./GjrHeroSection.css";
import { useState, useRef, useEffect } from 'react';

import img1 from "../../assets/gjr-img-03.jpg";
import img2 from "../../assets/gjr-img-02.jpg";
import img3 from "../../assets/gjr-img-01.jpg";
import img4 from "../../assets/gjr-img-03.jpg";
import img5 from "../../assets/gjr-img-02.jpg";



export const GjrHeroSection = () => {
  const [open, setOpen] = useState(0);

  const sliderContent = [
    {
      img: img1, 
      name: 'Wanda Maximoff',
    },
    {
      img: img2, 
      name: 'The Hulk',
    },
    {
      img: img3, 
      name: 'Iron Man',
    },
    {
      img: img4, 
      name: 'Black Panther',
    },
    {
      img: img5, 
      name: 'Black Panther',
    }
]

return (
  <>
   <div className="gjr_hero_wrapper">
        <div className="gjr_hero_content">
          {
            sliderContent.map((slide, i) => {
              return (
                <img src={slide.img} key={i}  alt="slideImg_01" className={`${i === open ? "clip-visible": "clip-hidden"}`} />
              )
            })
          }
          <div>
          <button>
            <i className="fa fa-angle-left"></i>
            </button>
          </div>
          
        </div>
      
     
      </div>
    </>
  );
};
