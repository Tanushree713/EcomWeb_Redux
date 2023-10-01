import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeLayout = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const cartProducts = useSelector((state) => state.cart);
  const wishlistProducts = useSelector((state) => state.cart )
  const showMenu = () => {
    setToggle(!toggle);
  };
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    
      navigate("/products");
      setSearch("");
    
  }

  return (
    <>
      <div className="bigHeader">
        <div className="header">
          <span className="logo">ECOMmerce</span>
          <div className="header-left">
            <Link to="/">
              {" "}
              <span> Home </span>{" "}
            </Link>
            <Link to="/products">
              {" "}
              <span>Products </span>
            </Link>

            <Link to="/contact">
              {" "}
              <span> ContactUs </span>{" "}
            </Link>
          </div>
          <div className="header-right">
            <div>
            <Link to="/wishlist">
              {" "}
              <span>wishLists</span>{" "}
              <p className="count"> {wishlistProducts.length} </p>
            </Link>
            </div>
           
             <div>
             <Link to="/cart">
              {" "}
              <span>MyCart</span>{" "}
              <p className="count"> {cartProducts.length} </p>
            </Link>
             </div>
              
             <div className="buttons">
            <Link to="/signup">
              <button className="btn6">signup</button>
            </Link>

            <Link to="/login">
            {" "}
              <button className="btn6">Login</button>{" "}
            </Link>
            </div>
          </div>
           
        </div>
        <div className="searchTop">
          <div className="search">
            <input
              type="text"
              placeholder="Search Products here..."
              name="input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
             
            />
          </div>
          <div>
            <button className="btn4" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="res_header">
        <span className="logo">ECOMmerce</span>

        <div className="menu" onClick={showMenu}>
          <i className="fa-solid fa-bars"></i>

          {toggle && (
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/">
                    {" "}
                    <span> Home </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    {" "}
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    {" "}
                    <span> Contact Us </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="res_count">
                    {" "}
                    <span> wishLists</span>
                    <p className="count"> {wishlistProducts.length} </p>
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="res_count">
                    {" "}
                    <span> MyCart</span>
                    <p className="count"> {cartProducts.length} </p>
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="btn6" >
                    {" "}
                    <button> Signup</button>
                   
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="btn6">
                    {" "}
                    <button>Login</button>
                  
                  </Link>
                </li>

              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
