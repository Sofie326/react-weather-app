import React from "react";
import './App.css';
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Search city="New York" />
      <Forecast  />
      <Footer />
     </div>
    </div>
  );
}
