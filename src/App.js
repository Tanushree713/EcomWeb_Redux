import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductData from "../src/Components/ProductData/ProductData";
import MyCart from "./Components/MyCart/MyCart";
import { Provider } from "react-redux";
import store from "./store/Store";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import HomeLayout from "./Pages/HomeLayout/HomeLayout";




function App() {
  return (
   <>
      <Provider store={store}>
        <HomeLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={< ProductData/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/cart" element={<MyCart />} />

        <Route exact path="/ProductDetails/:id" element={<ProductDetails/>} />


        <Route path="*" element={<HomePage />} />
      </Routes>
      </Provider>
      </>
    
  );
}

export default App;

