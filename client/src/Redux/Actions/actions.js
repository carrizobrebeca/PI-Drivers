/*
dispatch(
    {
        type: FILTERDRIVER,
        payload: data
    } lo que recibe el reducer en action
)
*/
import axios from 'axios';
import { GET_DRIVERS, GET_DRIVER_ID, CLEAR, PAGINATE, ORDER_DRIVERS, ORDER_BORN } from './actions-types';


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
const getDriverById= (id) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:5000/drivers/${id}`);
      
        const data = Array.isArray(response.data) ? response.data[0] : response.data; // Asegúrate de obtener un objeto
        dispatch({
          type: GET_DRIVER_ID,
          payload: data,
        });
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };
  }; 
  const clear = () => {
    return {
      type: CLEAR,
    };
  };
    
const paginate = (page) => ({
    type: PAGINATE,
    payload: { page }
  });

  const orderDrivers = (order) =>{
    return{
        type: ORDER_DRIVERS,
        payload: order,

    }
  }

  const orderBorn =(order)=>{
    return{
        type: ORDER_BORN,
        payload: order
    }
  }
  
 
  
export {getDrivers, getDriverById, clear, paginate, orderDrivers, orderBorn}

