/*
dispatch(
    {
        type: FILTERDRIVER,
        payload: data
    } lo que recibe el reducer en action
)
*/
import axios from 'axios';
import { GET_DRIVERS, PAGINATE, ORDER_DRIVERS, ORDER_BORN } from './actions-types';

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
  
 
  
export {getDrivers, paginate, orderDrivers, orderBorn}

