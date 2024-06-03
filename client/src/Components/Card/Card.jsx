import React from "react";
import style from "./card.module.css";
import { Link } from 'react-router-dom';

const Card = ({ driver }) => {
  const { id, name, image, team } = driver;

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
          {team ? (
            team.map((teamName, index) => (
              <span key={index}>{teamName}</span>
            ))
          ) : (
            <span>No team</span>
          )}
        </h2>
      </div>
    </div>
  );
};
export default Card;