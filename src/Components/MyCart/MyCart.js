import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

function MyCart() {
  const CartProducts = useSelector((state) => state.cart);
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
  ));

  return (
    <>
      <h1 className="head1">My Cart</h1>
      <div className="Gallery">
        {productsdata.length > 0 
        ? productsdata 
        : (<>
        <div>
        <h1 className="heading1" > Your Cart is Empty </h1>
           <Link to='/'>
           <button className="btn4">Go To Home</button>
           </Link>
        </div>
           </>
           )}
      </div>
    </>
  );
}
export default MyCart;
