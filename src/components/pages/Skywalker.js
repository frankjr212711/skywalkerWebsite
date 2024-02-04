import "./SkyNavbar.css";
import { Link } from "react-router-dom";

// components
import { SkyHeroSection } from "./SkyHeroSection";
import { SkyNavbar } from "./SkyNavbar";
import { SkyCategorySection } from "./SkyCategorySection";

const slides = [
  { url: "images/sky-img-01.jpg", title: "image_1" },
  { url: "images/sky-img-02.jpg", title: "image_2" },
  { url: "images/sky-img-03.jpg", title: "image_3" },
  { url: "images/sky-img-04.jpg", title: "image_4" },
  { url: "images/sky-img-06.jpg", title: "image_5" },
];

const containerStyles = {
  width: "100%",
  height: "749px",
  margin: "10.5rem auto 0 auto",
  fontFamily: "Jost",
  zIndex: 9999,
};



export const Skywalker = () => {
  return (
    <>
      <div className="sky__wrapper">
        <SkyNavbar />

        <div style={containerStyles}>
          <SkyHeroSection slides={slides} />
        </div>

        <div>
          <SkyCategorySection />
        </div>
      </div>
    </>
  );
};
