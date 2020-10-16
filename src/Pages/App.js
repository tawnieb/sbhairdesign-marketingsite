import React from "react";
import "../CSS/App.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Main from "../Components/Main";

function App() {
  return (
    <div className="App" id="home">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
