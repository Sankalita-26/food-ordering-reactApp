import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";

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


// header





const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Body/>

    </div>
  );
};

//Rendering the JSX element to the DOM

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/ >);
