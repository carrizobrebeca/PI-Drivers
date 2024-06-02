import React, { useState } from "react";
import style from "./card.module.css";
// import { connect } from "react-redux";
// import {searchDriver} from '../../Redux/Actions/actions';
// function Card({
//   id,
//   forename,
//   surname,
//   nationality,
//   image,
//   description,
//   dob,
//   team,
// }) {
  

//   return (
//     <div>
//       <div className={style.imgContainer}>
//         <img src={image} alt="" />
//         {/* <Link to={`/detail/${id}`}> */}
//         <h2 className={style.name}>
//           {forename} | {surname}
//         </h2>
//         {/* </Link> */}
//       </div>

//       <div className={style.description}>
//         <h2>
//           <span>{team}</span>
//         </h2>
//       </div>
//     </div>
//   );
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     searchDriver: (driver) => {
//       dispatch(searchDriver(driver));
//     }
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     allDrivers: state.allDrivers,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { getDrivers} from "../../Redux/Actions/actions";

const Card = ({driver}) => {
const {name, image, team} = driver;

  return (
    <div>
      <div className={style.imgContainer}>
        <img src={image} alt="" />
        <h2 className={style.name}>
          {name.forename} | {name.surname}
        </h2>
      </div>

      <div className={style.description}>
        <h2>
          <span>{team}</span>
        </h2>
      </div>
    </div>
  );
};
export default Card;
// const mapStateToProps = (state) => {
//   return {
//     driver: state.allDrivers.length > 0 ? state.allDrivers[state.allDrivers.length - 1] : null,
//   };
// };

// export default connect(mapStateToProps)(Card);