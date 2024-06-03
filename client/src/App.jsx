// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./Views/LandingPage/LandingPage";
import HomePage from "./Views/HomePage/HomePage";
import Form from "./Views/Form/Form";
import NavBar from "./Components/NavBar/NavBar";
import Detail from "./Components/Detail/Detail";

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
                  <HomePage/>
                </>
              }
            />
            <Route
              path="/details"
              element={
                <>
                  <NavBar />
                  <Detail />
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
