import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Navbar from "./Components/Navbar";

const router= createBrowserRouter(
  [
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/about",
      element: <><Navbar/><About/></>
    },
    {
      path:"/contactus",
      element:<><Navbar/><ContactUs/></>
    }
  ]
)
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
