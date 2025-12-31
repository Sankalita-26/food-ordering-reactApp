import { useEffect, useState ,lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";


import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"





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

  const [userName,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:" "
    };
    setUserName(data.name)
  },[]);


  
  return(
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedIUser: userName,setUserName}}>
    <div className="app">
      <Header/>
      <Outlet/>

    </div>
    </UserContext.Provider>


    </Provider>

    

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
    },
    {
      path:"/cart",
      element:<Cart/>,
    },

    ],
    errorElement:<Error/>,
  },

  




]);
//Rendering the JSX element to the DOM

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


