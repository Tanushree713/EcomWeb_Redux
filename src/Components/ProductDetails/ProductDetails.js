import { fetchProductsDetails} from '../../store/productDetailsSlice' ;
import { useDispatch, useSelector } from "react-redux";
import React ,{ useState , useEffect} from "react";

function ProductDetails() {
    const [numTickets, setNumTickets] = useState(1);

    const dispatch = useDispatch() ;
  const {data : datas , status} = useSelector(state => state.productDetails);
  console.log("productdata" ,data) ;

  useEffect(() => {
    fetchDataDetails();
  }, [productId]);

  const fetchDataDetails = () => {
    
        dispatch(fetchProductsDetails(productId)) ;
        
  };
  return (
    <>
      <h1 className="head1">Product-Details</h1>
      <div className="maindiv">
      <div className="leftmaindiv">
        <div className="firstmainImg">
          <img src={datas.image} className="card_img" alt={datas.title} />
        </div>
        <div className="secondmainImg">
          <div className="childs">
            <img id='ImageSlices' src='https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-short-sleeved-chambray-shirt--HPS73WARS900_PM2_Front%20view.png?wid=490&hei=490'/>
          </div>
          <div className="childs">
          <img  id='ImageSlices' src='https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-short-sleeved-chambray-shirt--HPS73WARS900_PM2_Front%20view.png?wid=490&hei=490'/>
          </div>
          <div className="childs">
          <img  id='ImageSlices'src='https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-short-sleeved-chambray-shirt--HPS73WARS900_PM2_Front%20view.png?wid=490&hei=490'/>
          </div>
          <div className="childs">
          <img  id='ImageSlices' src='https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-short-sleeved-chambray-shirt--HPS73WARS900_PM2_Front%20view.png?wid=490&hei=490'/>
          </div>
        </div>
      </div>
      <div className="rightmaindiv">
        <h4 className="card_title">{datas.title}</h4>
     
          <button className="btn1">
            {datas.rating} <i class="fa-sharp fa-solid fa-star" />
          </button>
          <div className="delivery">
                <p>Free Delivery</p>
            </div>
      
        <h3 className="card_price">₹{datas.price}</h3>
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
          </div>              
    
      </div>
      </div>
    </>
  );
}

export default ProductDetails;
