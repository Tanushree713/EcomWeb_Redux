import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux'

function Navbar() {

  const cartProducts = useSelector( state => state.cart)
  return (
    <>
    <div className="topnav">
    <span className="active">ECOMmerce</span>
   <Link className="active1" to='/'>Home</Link>
   <div className="search">
          <input
            type="text"
            placeholder="Search Products here..."
            name="input"
          />
        </div>
   <Link to='/cart'>
   <button className='btn3'>My Cart {cartProducts.length}</button>
   </Link>
   
   </div>

  </>
  );
}

export default Navbar;

