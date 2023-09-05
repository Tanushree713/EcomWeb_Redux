import { useSelector } from "react-redux";
import Cards from '../Cards/Cards';

function MyCart(){

 const CartProducts = useSelector( state => state.cart) ; 
 const productsdata = CartProducts.map((data) => (
     <Cards
       products={data}
       key={data.id}
       id={data.id}
       imagesrc={data.image}
       title={data.title}
       description={data.description}
       price={data.price} 
       rating={data.rating.rate}
     />
   ))
 

    return(
        <>
        <h2>My Cart</h2>
        <div className="Gallery">
          {productsdata}
        </div>
       
        </>
    )

    }
export default MyCart ;