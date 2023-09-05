import React from 'react';
import { Link } from 'react-router-dom';
import SearchData from '../SearchData/SearchData';
import { useSelector } from 'react-redux';

function Navbar() {

  const cartProducts = useSelector( state => state.cart)
  return (
    <>
    <div className="topnav">
    <span className="active">LOGO</span>
   <Link className="active1" to='/'>Home</Link>
   
   <SearchData/>
   <Link to='/cart'>
   <button className='btn3'>My Cart {cartProducts.length}</button>
   </Link>
   
   </div>

  </>
  );
}

export default Navbar;

