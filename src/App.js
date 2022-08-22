import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Basket from "./components/pages/Basket"
import SignIn from "./components/pages/SignIn";
import Product from "./components/product/Product";
import Signup from "./components/pages/Signup";
import Buy from "./components/pages/Buy";

function App() {
  return (
    <div className="App">
          
        <div>
        
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Products/>}></Route>
            <Route path="/basket" element={<Basket/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/products/:id" element={<Product/>}></Route>
            <Route path="/signup"  element={<Signup/>}></Route>
            <Route path="/buy" element={<Buy/>}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
