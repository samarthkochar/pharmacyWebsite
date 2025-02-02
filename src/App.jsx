import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart"
import Navbar from "./Components/Navbar";
import GlobalStyle from "./Styles/GlobalStyles";
import Products from "./Components/Products";
import SearchBar from "./Components/SearchBar";
import ProductDetail from "./Components/ProductDetail";
import SearchItem from "./Components/SearchItem";
import { items } from "./Components/Database";
import { useState } from "react";
import Profile from "./Components/Profile";
import Offers from "./Components/Offers";

function App() {
  const [data, setData]= useState([...items])
  const[cart,setCart]= useState([])
  const router= createBrowserRouter(
    [
      {
        path:"/",
        element: <Home cart={cart} setCart={setCart}/>
      },
      {
        path:"/about",
        element: <><Navbar cart={cart}/><About/></>
      },
      {
        path:"/contactus",
        element:<><Navbar cart={cart}/><Contact/></>
      },
      {
        path:"/cart",
        element:<><Navbar cart={cart}/>  <Cart cart={cart} setCart={setCart}/></>
      },
      {
        path:"/products",
        element:<><Navbar cart={cart}/><SearchBar/><Products cart={cart} setCart={setCart} items={data}/></>
      },
      {
        path:"/products/productdetail/:id",
        element:<><Navbar cart={cart}/><SearchBar/><ProductDetail cart={cart} setCart={setCart}/></>
      },
      {
        path:"/products/search/:item",
        element:<><Navbar cart={cart}/><SearchBar/><SearchItem/></>
      },
      {
        path:"/offers",
        element:<><Navbar cart={cart}/><Offers/></>
      },
      {
        path:"/profile",
        element:<><Navbar cart={cart}/><Profile/></>
      },
    ]
  );
  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
