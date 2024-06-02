// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./Views/LandingPage/LandingPage";
import HomePage from "./Views/HomePage/HomePage";
import Details from "./Views/Details/Details";
import Form from "./Views/Form/Form";
import NavBar from "./Components/NavBar/NavBar";
// import axios from "axios";
// import Cards from "./Components/Cards/Cards";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";



function App() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   const data = async ()=> {
  //     await dispa
  //   }
  // })
  // const [drivers, setDrivers] = useState([]);
  // function onSearch(forename){
  //   console.log('Buscando driver con forename:', forename);
  //   axios
  //   .get(`http://localhost:5000/drivers?name.forename=${forename}`)
  //   .then(({ data }) => {
  //     if(data.forename) {
  //       setDrivers((oldDrivers) => [...oldDrivers, data]);
  //     } else {
  //       window.alert("No hay corredor con ese Nombre");
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error al buscar el corredor:', error);
  //     window.alert("¡Ocurrió un error al buscar el corredor!");
  //   });
  // }
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
