const axios = require('axios');

const getTeams= async (req, res) =>{
    const apiResponse = await axios("http://localhost:5000/drivers");
    const drivers= apiResponse.data.drivers;
    
    try {
        
    } catch (error) {
        
    }
}