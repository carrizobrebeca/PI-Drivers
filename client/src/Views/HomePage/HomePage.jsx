import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import NavBar from "../../Components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../Redux/Actions/actions";


const HomePage = () => {
 const dispatch = useDispatch();
 //estado global de Redux
 //definir a que estado estamos suscriptos
 const allDrivers =useSelector((state)=>state.allDrivers);
 //para que se ejecute cuando la pagina se carga al inicio
 useEffect(()=>{
  dispatch(getDrivers());

 }, [dispatch]);
 
  
  return (
    <div>
      <select>
        <option value="ALL">Todos</option>
      </select>
       
        <select>
        <option value="A">Ordenar nombre A-Z</option>
        <option value="D">Ordenar nombre Z-A</option>
      </select>
      <select>
        <option value="MENOR">Orden Nacimiento 1990-1913</option>
        <option value="MAYOR">Orden Nacimiento 1913-1990</option>
      </select>
      <select>
        <option value="DB">Base de Datos</option>
        <option value="API">API</option>
      </select>
      <NavBar/>
      <Cards allDrivers={allDrivers}/>
    </div>
  );
};

export default HomePage;
