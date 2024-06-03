import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import NavBar from "../../Components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, paginate, orderDrivers, orderBorn} from "../../Redux/Actions/actions";

const HomePage = () => {
  const dispatch = useDispatch();

  //estado global de Redux
  //definir a que estado estamos suscriptos
  const allDrivers = useSelector((state) => state.allDrivers);
  const paginatedDrivers = useSelector((state) => state.paginatedDrivers);
  const currentPage = useSelector((state) => state.currentPage);

  //para que se ejecute cuando la pagina se carga al inicio
  useEffect(() => {
    dispatch(getDrivers());
   
  }, [dispatch]);

  const handleNextPage = () => {
    if ((currentPage + 1) * 5 < allDrivers.length) {
      dispatch(paginate(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      dispatch(paginate(currentPage - 1));
    }
  };
 

  const handleOrder = (e) => {
    dispatch(orderDrivers(e.target.value));
  };

  const handleOrderBorn = (e) => {
    dispatch(orderBorn(e.target.value));
  };

  
  const handleFilterByTeam = (e) => {
    dispatch(filterByTeaM(e.target.value));
  };
  return (
    <div>
      <>
      <NavBar />
      </>
      
      <>
      <select>
        <option value="ALL">TEAMS</option>
        {/* {teams.map((team, index) => (
          <option key={index} value={team}>{team}</option>
        ))} */}
      </select>

      <select onChange={handleOrder}>
        <option value="A">Ordenar nombre A-Z</option>
        <option value="D">Ordenar nombre Z-A</option>
      </select>
      <select onChange={handleOrderBorn}>
        <option value="DESC">Orden Nacimiento 1990-1913</option>
        <option value="ASC">Orden Nacimiento 1913-1990</option>
      </select>
      <select>
        <option value="DB">Base de Datos</option>
        <option value="API">API</option>
      </select>
      </>
      <>
      <button onClick={handlePrevPage} disabled={currentPage === 0}>Previous</button>
      <button onClick={handleNextPage} disabled={(currentPage + 1) * 5 >= allDrivers.length}>Next</button>
      </>
      <Cards allDrivers={paginatedDrivers} />
    
    </div>
  );
};

export default HomePage;
