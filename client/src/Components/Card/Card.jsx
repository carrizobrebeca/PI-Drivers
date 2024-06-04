import React from "react";
import style from "./card.module.css";
import { Link } from 'react-router-dom';

const Card = ({ driver }) => {
  const { id, name, image, teams } = driver;

  if(!driver.image.url){
    return image.url= 'https://img.freepik.com/fotos-premium/retrato-piloto-f1-casco-piloto-formula-pie-pista-carreras-despues-competencia_983424-6256.jpg';
  }
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={image.url} alt={`${name.forename} ${name.surname}`} />
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>
            {name.forename} | {name.surname}
          </h2>
        </Link>
      </div>

      <div className={style.description}>
        <h2>
          {teams}
        </h2>
      </div>
    </div>
  );
};
export default Card;