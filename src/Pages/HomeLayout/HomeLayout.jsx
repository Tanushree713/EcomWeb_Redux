import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeLayout = () => {
  const [toggle, setToggle] = useState(false);
  const cartProducts = useSelector((state) => state.cart);
  const showMenu = () => {
    setToggle(!toggle);
  };

  const [userInputsearch, setUserInputsearch] = useState();
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    {
      navigate("/products");
      setUserInputsearch("");
    }
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
              <span> Contact Us </span>{" "}
            </Link>
          </div>

          <div className="header-right">
            <Link to="/cart">
              {" "}
              <span>MyCart</span>{" "}
              <p className="count"> {cartProducts.length} </p>
            </Link>
          </div>
        </div>
        <div className="searchTop">
          <div className="search">
            <input
              type="text"
              placeholder="Search Products here..."
              name="input"
              value={userInputsearch}
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
                  <Link to="/cart" className="res_count">
                    {" "}
                    <span> MyCart</span>
                    <p className="count"> {cartProducts.length} </p>
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
