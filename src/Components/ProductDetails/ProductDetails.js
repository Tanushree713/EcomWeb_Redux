import { fetchProductsDetails } from "../../store/productDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { add, remove } from "../../store/CartSlice";

function ProductDetails() {
  const { id: productId } = useParams();
  const { data: datas, status } = useSelector((state) => state.productDetails);
  const isProductInCart = useSelector((state) =>
  state.cart.some((item) => item.id === productId ));
  const buttonClass = isProductInCart ? "btn2-remove" : "btn2-add";
  const [numTickets, setNumTickets] = useState(1);
  const dispatch = useDispatch();

  console.log("productdata", datas);

  useEffect(() => {
    fetchDataDetails();
  }, []);

  const fetchDataDetails = () => {
    dispatch(fetchProductsDetails(productId));
  };
 

  const toggleCart = () => {
    if (isProductInCart) {
      dispatch(remove(productId)); // Remove the product from the cart
    } else {
      dispatch(add(datas)); // Add the product to the cart
    }
  };

  if (!datas) {
    return <h1>Loading.....</h1>;
  }
  return (
    <>
      <h1 id="head1">Product-Details</h1>
      <div className="maindiv">
        <div className="leftmaindiv">
          <div className="firstmainImg">
            <img
              src={datas.image}
              className="cardDetails_img"
              alt={datas.title}
            />
          </div>
          <div className="secondmainImg">
            <div className="childs">
              <img id="ImageSlices" src={datas.image} />
            </div>
            <div className="childs">
              <img id="ImageSlices" src={datas.image} />
            </div>
            <div className="childs">
              <img id="ImageSlices" src={datas.image} />
            </div>
            <div className="childs">
              <img id="ImageSlices" src={datas.image} />
            </div>
          </div>
        </div>
        <div className="rightmaindiv">
          <h4 className="cardDetails_title">{datas.title}</h4>

          <button className="btn1">
            {datas.rating?.rate} <i class="fa-sharp fa-solid fa-star" />
          </button>
          <button
            className={`btn2 ${buttonClass}`}
            onClick={toggleCart}
          >
            {isProductInCart ? "Remove Item" : "Add to Cart"}
          </button>

          <div className="delivery">
            <p>Free Delivery</p>
          </div>

          <h3 className="cardDetails_price">₹{datas.price}</h3>
          <span>onwards</span>

          <div className="details">
            <p>{datas.description}</p>
          </div>

          <div>
            <br />
            <br />
            <label htmlFor="numTickets">Quantity:</label>
            <input
              type="number"
              id="numTickets"
              value={numTickets}
              min={1}
              max={10}
              onChange={(e) => setNumTickets(parseInt(e.target.value))}
              required
            />
            <Link to="/">
              <button>Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
