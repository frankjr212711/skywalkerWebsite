import "./SkyCategorySection.css";
import "./Skywalker.css";
import { Button } from "../Button";

export const SkyCategorySection = () => {
  return (
    <>
      <div className="category__section">
        
        <div className="items__container">
          <div className="item">
            <div className="item__img_box">
              <div className="img_box">
                <img src="/images/sky-img-11.png" alt="" />
              </div>
            </div>
            <div className="info__box">
              <h5 className="item__desc">DISPENSER BOTTLES</h5>
              <p className="item__post">CHANGE ON REQUEST</p>
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
