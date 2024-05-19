import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Views/LandingPage/LandingPage";
import HomePage from "./Views/HomePage/HomePage";
import Details from "./Views/Details/Details";
import Form from "./Views/Form/Form";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <>
                  <NavBar />
                  <HomePage />
                </>
              }
            />
            <Route
              path="/details"
              element={
                <>
                  <NavBar />
                  <Details />
                </>
              }
            />
            <Route
              path="/form"
              element={
                <>
                  <NavBar />
                  <Form />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
