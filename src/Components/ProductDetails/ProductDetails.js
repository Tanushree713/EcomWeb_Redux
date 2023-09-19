import { fetchProductsDetails} from '../../store/productDetailsSlice' ;
import { useDispatch, useSelector } from "react-redux";
import React ,{ useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import Footer from '../../Pages/Footer/Footer';

function ProductDetails() {
    const [numTickets, setNumTickets] = useState(1);

   const { id: productId } = useParams();
    const dispatch = useDispatch() ;
    
  const {data : datas , status} = useSelector(state => state.productDetails);
  console.log("productdata" ,datas) ;

  useEffect(() => {
    fetchDataDetails();

  }, []);

  const fetchDataDetails = () => {
    
        dispatch(fetchProductsDetails(productId)) ;
        
  };
  if (!datas) {
    return <h1>Loading.....</h1>
  }
  return (
    <>
      <h1 id="head1">Product-Details</h1>
      <div className="maindiv">
      <div className="leftmaindiv">
        <div className="firstmainImg">
          <img src={datas.image} className="cardDetails_img" alt={datas.title} />
        </div>
        <div className="secondmainImg">
          <div className="childs">
            <img id='ImageSlices' src={datas.image}/>
          </div>
          <div className="childs">
          <img  id='ImageSlices' src={datas.image}/>
          </div>
          <div className="childs">
          <img  id='ImageSlices'src={datas.image}/>
          </div>
          <div className="childs">
          <img  id='ImageSlices' src={datas.image}/>
          </div>
        </div>
      </div>
      <div className="rightmaindiv">
        <h4 className="cardDetails_title">{datas.title}</h4>
     
          <button className="btn1">
            {datas.rating?.rate} <i class="fa-sharp fa-solid fa-star" />
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
          </div>              
    
      </div>
      </div>
   
    </>
  );
}

export default ProductDetails;
