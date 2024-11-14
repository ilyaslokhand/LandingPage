import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
// import App from "./App.jsx";
import Header from "./Components/Header/Header";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page1/Page2";
import Page3 from "./Components/Page1/Page3";
import Page4 from "./Components/Page1/Page4";
import Page5 from "./Components/Page1/Page5";
import Page6 from "./Components/Page1/Page6";
import Footer from "./Components/Page1/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Footer />
  </StrictMode>
);
