import React from "react";
import './App.css';
import Search from "./Search";
import City from "./City";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Search />
      <City city="New York" />
      <Forecast  />
      <Footer />
     </div>
    </div>
  );
}
