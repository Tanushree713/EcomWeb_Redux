import React, { useEffect , useState} from "react";
import Cards from "../Cards/Cards";
import { useDispatch , useSelector } from "react-redux";
import {fetchProducts} from '../../store/apiCallSlice';



function ProductData() {
  const dispatch = useDispatch() ;
  const {data : datas , status} = useSelector(state => state.apiCall)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((response) => {
    //     setDatas(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });

        dispatch(fetchProducts()) ;
        
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
        )   
        : (
          <h1>Oops!! Data Not Found..<br/>!! Plz wait !!</h1>
        )}
        
      </div>
      
    </>
  );
}

export default ProductData;
