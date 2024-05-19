/*
dispatch(
    {
        type: FILTERDRIVER,
        payload: data
    } lo que recibe el reducer en action
)
*/

import { GET_DRIVERS } from "./actions-types";

export function getDrivers(){
    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:5000/drivers');
            dispatch({
                type: GET_DRIVERS,
                payload: response.data
            })
            
        } catch (error) {
            console.log("error");
        }
    }
}