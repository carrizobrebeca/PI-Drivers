import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getDriverById, clear } from "../../Redux/Actions/actions";
import style from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDriverById(id));
    return () => {
      dispatch(clear())
  }   
  }, [dispatch, id]);

  const driverId = useSelector((state) => state.driverId);
  console.log(driverId);
  // const { forename, surname } = driverId.name;
  // const { url } = driverId.image;
  
  return (
    <div className={style.pageCenter}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img src={driverId.image} alt={`${driverId.forename} ${driverId.surname}`} />

          <h2 className={style.name}>
            <h2 className={style.name}>
              Name | {driverId.forename}, {driverId.surname}
            </h2>
          </h2>
        </div>

        <div className={style.description}>
          <h2>
            Date of Born | <span>{driverId.dob}</span>
          </h2>
          <h2>
            Nationality | <span>{driverId.nationality}</span>
          </h2>
          <h2>
            Description | <span>{driverId.description}</span>
          </h2>

          <h2>{driverId.teams} |</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
