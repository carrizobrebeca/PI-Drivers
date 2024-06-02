/*
dispatch(
    {
        type: FILTERDRIVER,
        payload: data
    } lo que recibe el reducer en action
)
*/
import axios from 'axios';
import { GET_DRIVERS } from './actions-types';

const getDrivers=()=>{

    return async(dispatch)=>{
        try {
            const allDrivers = await axios('http://localhost:5000/drivers');
            dispatch({
                type: GET_DRIVERS,
                payload: allDrivers.data
            })
        } catch (error) {
            console.log("error");
            
        }
    }
}
export {getDrivers}
// import { GET_DRIVERS, ORDER_DRIVERS, SEARCH_DRIVER } from "./actions-types";

// export function searchDriver(name) {
//   const endpoint = `http://localhost:5000/drivers?name.forename=${name}`;
//   return (dispatch) => {
//     axios.get(endpoint, name).then(({ data }) => {
//       console.log('Driver data:', data);
//       return dispatch({
//         type: SEARCH_DRIVER,
//         payload: data,
//       });
//     })
//     .catch((error) => {
//       console.error('Error fetching driver:', error); // Agrega esto para manejar errores
//     });
//   };
// }

// export function searchDriver(forename) {
//   return function (dispatch) {
//     axios.get(`http://localhost:5000/drivers?name.forename=${forename}`)
//       .then(response => {
//         dispatch({
//           type: SEARCH_DRIVER,
//           payload: response.data
//         });
//       })
//       .catch(error => {
//         console.error('Error al buscar el corredor:', error);
//         window.alert("¡Ocurrió un error al buscar el corredor!");
//       });
//   };
// }
// export function getDrivers(driver){
//     const { id, forename, surname, nationality, image, description, dob, team } = query.body;
//     return async function(dispatch){
//         try {
//             const response = await axios.get('http://localhost:5000/drivers?name.forename=${name}');
//             dispatch({
//                 type: GET_DRIVERS,
//                 payload: response.data
//             })

//         } catch (error) {
//             console.log("error");
//         }
//     }
// }

// export function orderDrivers(order) {
//   return {
//     type: ORDER_DRIVERS,
//     payload: order,
//   };
// }
