import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/CartSlice";
import { useNavigate } from "react-router-dom";
import {fetchProductsDetails } from '../../store/productDetailsSlice';


const Cards = (props) => {
  
  const dispatch = useDispatch();
  const isProductInCart = useSelector((state) =>
    state.cart.some((item) => item.id === props.products.id)
  );
  const buttonClass = isProductInCart ? "btn2-remove" : "btn2-add";

  const toggleCart = (data) => {
    if (isProductInCart) {
      dispatch(remove(data.id)); // Remove the product from the cart
    } else {
      dispatch(add(data)); // Add the product to the cart
    }
  };

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/ProductDetails/${props.products.id}`);
    dispatch(fetchProductsDetails(props.products.id));
    
   
  }
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="card_left" onClick={ handleNavigate}>
            <img src={props.imagesrc} className="card_img" alt={props.title} />
            <div className="card_info">
              <h4 className="card_title">{props.title}</h4>
              <h3 className="card_price">₹{props.price}</h3>
              <span>onwards</span>
              <div className="delivery">
                <p>Free Delivery</p>
              </div>
            </div>
          </div>

          <div>
            <button className="btn1">
              {props.rating} <i class="fa-sharp fa-solid fa-star" />
            </button>
            <button
              className={`btn2 ${buttonClass}`}
              onClick={() => toggleCart(props.products)}
            >
              {isProductInCart ? "Remove Item" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
