import React from "react";
import {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

//***Plan***
//Header
// - Logo
// - Nav Items
// Body
// - Search
// - Restaurant Container
// - Restaurant Card
// - Dish Name
// - Image
// - Restaurant Name
// - Rating
// - Cuisines
// - Time to Deliver
// Footer
// - Copyright
// - Links
// - Address
// - Contact

const Grocery=lazy(()=>import ("./components/Grocery"));
const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Outlet/>

    </div>

  );
};


const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
    path:"/",
    element:<Body />,
      },
      {
    path:"/about",
    element:<About />,
      },

   

    {
    path:"/grocery",
    element:<Suspense fallback={<h1>loading.....</h1>}><Grocery /></Suspense>,
    },

    {
    path:"/restaurants/:resId",
    element:<RestaurantMenu />,
    }, 

    {
      path:"/contact",
      element:<Contact/>,
    }

    ],
    errorElement:<Error/>,
  },

  




]);
//Rendering the JSX element to the DOM

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


