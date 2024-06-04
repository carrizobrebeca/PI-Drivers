import React from "react";
import Card from "../Card/Card";
import style from './cards.module.css'


export default function Cards({ allDrivers }) {
  
 
  return (
    <div className={style.container}>
      {allDrivers.map((driver)=>(
        <Card key={driver.id} driver={driver}/>
      ))}
    </div>
  );
}                              