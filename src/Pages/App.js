import React from "react";
import "../CSS/App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Homepage from "../Components/Homepage";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
