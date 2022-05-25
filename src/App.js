import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css"
import Cart from "./components/cart/Cart";
import Header from "./components/global/Header";
import Home from "./components/home/Home";
import Notfound from "./components/notFound/Notfound";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Header />
        <Routes>
          <Route path="/product" exact element={<Product/>}/>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/cart/:id" exact element={<Cart />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/" exact element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
