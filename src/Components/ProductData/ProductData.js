import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import axios from "axios";


function ProductData() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <h1 className="head1">Products</h1>
      <div className="Gallery">
        {datas.length > 0 ? (
          datas.map((data) => (
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
        ) : (
          <h1>Oops!! Not Found..</h1>
        )}
      </div>
      
    </>
  );
}

export default ProductData;
