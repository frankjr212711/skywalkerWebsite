import { GjrHeroSection } from "./GjrHeroSection";
import { GjrNavbar } from "./GjrNavbar";

const slides = [
  { url: "images/gjr-img-01.jpg", title: "image_1" },
  { url: "images/gjr-img-02.jpg", title: "image_2" },
  { url: "images/gjr-img-03.jpg", title: "image_3" },
  { url: "images/gjr-img-04.jpg", title: "image_4" },
  { url: "images/gjr-img-06.jpg", title: "image_5" }
];

const containerStyles = {
  width: "100%",
  height: "749px",
  margin: "10.5rem auto 0 auto",
  fontFamily: "Jost",
  zIndex: 9999,
};

export const GJR = () => {
  return (
    <>
      <GjrNavbar />

      <div style={containerStyles}>
        <GjrHeroSection slides={slides} />
     
      </div>
    </>
  );
};
