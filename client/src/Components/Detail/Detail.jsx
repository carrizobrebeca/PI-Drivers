import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import style from "./detail.module.css";

const Detail = ({ driver }) => {
  const { name, image, team, dob, nationality, description } = driver;

  return !driver ? (
    <div>Cargando...</div>
  ) : (
    <div className={style.pageCenter}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img src={image.url} alt={`${name.forename} ${name.surname}`} />
          <h2 className={style.name}>Name | {name}</h2>
        </div>

        <div className={style.description}>
          <h2>
            Date of Born | <span>{dob}</span>
          </h2>
          <h2>
            Nationality | <span>{nationality}</span>
          </h2>
          <h2>
            Description | <span>{description}</span>
          </h2>
   
          <h2>{team} |</h2>
          <div>
            
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default Detail;
