import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductData from "../src/Components/ProductData/ProductData";
import Navbar from '../src/Components/Navbar/Navbar';
import MyCart from "./Components/MyCart/MyCart";
import { Provider } from "react-redux";
import store from "./store/Store";



function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductData />} />
        <Route path="/cart" element={<MyCart />} />


        <Route path="*" element={<ProductData />} />
      </Routes>
      </Provider>
    </div>
    
  );
}

export default App;

