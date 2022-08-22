import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Basket from "./components/pages/Basket"
import SignIn from "./components/pages/SignIn";
import Product from "./components/product/Product";
import Signup from "./components/pages/Signup";
import Buy from "./components/pages/Buy";
import {useState} from 'react'

function App() {
  const [thema, setThema] = useState("white");

  return (
    <div className="App" style={{backgroundColor : `${thema}`}}>
          
        <div>
        
          <Navbar></Navbar>
          <div style={{textAlign : 'end'}}>
            <button onClick={() => setThema(thema === "white" ? "black" : "white")} style={{margin: "1%"}}>Change Background Thema</button>
          </div>
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
