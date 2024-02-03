import { Button } from "../Button";
import "./Skywalker.css";
import { Link } from "react-router-dom";
// components
import { SkyHeroSection } from "./SkyHeroSection";
import { NavbarSkywalker } from "./NavbarSkywalker";

const slides = [
  { url: "images/img-1.jpg", title: "image_1" },
  { url: "images/img-2.jpg", title: "image_2" },
  { url: "images/img-3.jpg", title: "image_3" },
  { url: "images/img-4.jpg", title: "image_4" },
  { url: "images/img-5.jpg", title: "image_5" },
];

const containerStyles = {
  width: "100%",
  height: "749px",
  margin: "10.5rem auto 0 auto",
};

export const Skywalker = () => {
  return (
    <>
      <NavbarSkywalker />

      <div style={containerStyles}>
        <SkyHeroSection slides={slides} />
      </div>

      <div className="category__section">
        <div className="items__container">
          <div className="item">
            <div className="item__img_box">image</div>
            <div className="info__box">
              <h5 className="item__desc">22 ARTESIAN</h5>
              <p className="item__post">2 PRODUCTS</p>
            </div>
          </div>

          <div className="item">
            <div className="item__img_box">image</div>
            <div className="info__box">
              <h5 className="item__desc">22 ARTESIAN</h5>
              <p className="item__post">2 PRODUCTS</p>
            </div>
          </div>

          <div className="item">
            <div className="item__img_box">image</div>
            <div className="info__box">
              <h5 className="item__desc">22 ARTESIAN</h5>
              <p className="item__post">2 PRODUCTS</p>
            </div>
          </div>

          {/* <div className="item">
          <div className="item__img_box">
            image
          </div>
          <div className="info__box">
            <h5 className="item__desc">22 ARTESIAN</h5>
            <p className="item__post">2 PRODUCTS</p>
          </div>
        </div> */}
        </div>

        <div className="notice__board_container">
          <h1>
            Why Drink just any Water when you can drink <span>Pure,</span> &{" "}
            <span>Clean</span> instead
          </h1>

          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sit perspiciatis rem, ducimus hic impedit quibusdam omnis cum a,
            officia quo deleniti voluptate repellendus dolores? Voluptate fugiat
            adipisci temporibus atque.
          </h3>

          <Button>READ MORE</Button>
          <Button>READ MORE</Button>
        </div>
      </div>
    </>
  );
};
