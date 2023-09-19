import { React } from "react";
import {
  ProductSliderArray,
  ProductSliderArrayForWomen,
  ProductSliderArrayForMen,
} from "../../Components/CreateProductArray/ProductArray";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Footer/Footer";


function HomePage() {
  return (
    <>
  
      <div className="poster_main">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          transitionTime={0.3}
          infiniteLoop={true}
          showStatus={true}
        >
          {ProductSliderArray.map((product) => (
            <div
              style={{ marginTop: "1.4rem", cursor: "pointer", height: "500px" }}
            >
              <img
                className="ArrayImage"
                alt={product}
                src={product.image}
                style={{ height: "100%" }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="poster_main">
        <h1 className="arrayHead">MEDAL WORTHY BRANDS TO BAG</h1>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          transitionTime={0.2}
          infiniteLoop={true}
          showStatus={true}
        >
          {ProductSliderArrayForWomen.map((product) => (
            <div
              style={{ marginTop: "2rem", cursor: "pointer", height: "500px" }}
            >
              <img
                className="ArrayImage"
                alt={product}
                src={product.image}
                style={{ height: "100%" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="poster_main">
        <h1 className="arrayHead">GRAND GLOBAL BRANDS</h1>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          transitionTime={0.3}
          infiniteLoop={true}
          showStatus={true}
        >
          {ProductSliderArrayForMen.map((product) => (
            <div
              style={{ marginTop: "3rem", cursor: "pointer", height: "500px" }}
            >
              <img
                className="ArrayImage"
                alt={product}
                src={product.image}
                style={{ height: "100%" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <Footer/>
 
    </>
  );
}

export default HomePage;
