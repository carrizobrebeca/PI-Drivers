import React from "react";
import Card from "../Card/Card";
import style from './cards.module.css'

export default function Cards({ allDrivers }) {
  const driversList = allDrivers;
  return (
    <div className={style.container}>
      {driversList?.map((driver)=>(
        <Card driver={driver}/>
      ))}
    </div>
  );
}                              