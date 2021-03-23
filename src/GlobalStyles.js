import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100%;
  }
  
  html {
    font-family: "Lato", sans-serif;
    font-size: 10px;
    text-align: center;
  }
  
  button {
    border: none;
    background: none;
    text-decoration: none;
    cursor: pointer;
  }
  
  p {
    font-size: 1.4rem;
    padding: 1rem;
  }
  
  h3 {
    font-weight: 300;
    letter-spacing: 2rem;
    font-size: 2.5rem;
    padding: 20px;
    outline: none;
  }
  
  h4 {
    font-weight: 300;
    letter-spacing: 0.5rem;
    font-size: 1.7rem;
    padding: 20px;
  }
  
  ul {
    list-style-type: none;
  }
  
  li {
    padding: 20px;
  }
  
  a {
    text-decoration: none;
  }
  
  a:-webkit-any-link {
    color: black;
  }
  
  a:hover {
    color: gray;
  }
  
  .wrapper {
    position: relative;
  }
  
  ::selection {
    background: none;
  }

`;

export default GlobalStyle;
