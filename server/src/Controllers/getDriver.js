const axios = require("axios");
const { Driver, Team } = require('../db');

exports.getDriver = async (req, res) => {
    try {
        // Obtener conductores desde la API 
        const apiResponse = await axios.get("http://localhost:5000/drivers");
        const apiDrivers = apiResponse.data.drivers;

        const defaultDriversImage = apiDrivers.map(apiDriver => {
            if (!apiDriver.image || !apiDriver.team) {
                return {
                    id: apiDriver.id,
                    name: {
                        forename: apiDriver.forename,
                        surname: apiDriver.surname
                    },
                    image: {
                        url: 'https://img.freepik.com/fotos-premium/retrato-piloto-f1-casco-piloto-formula-pie-pista-carreras-despues-competencia_983424-6256.jpg'
                    },
                    dob: apiDriver.dob,
                    nationality: apiDriver.nationality,
                    team: apiDriver.team.map(team => team.name).join(', '),
                    description: apiDriver.description,
                };
              }
              return defaultDriversImage;
            });
        // Obtener conductores desde la base de datos 
        const dbDrivers = await Driver.findAll();

        // Obtener equipos de conductores desde la base de datos 
        const driversTeamsDB = await Promise.all(dbDrivers.map(async (driver) => {
            // const team = await driver.getTeam();
            return {
                id: driver.id,
                name: {
                    forename: driver.forename,
                    surname: driver.surname
                },
                image: {
                    url: 'https://img.freepik.com/fotos-premium/retrato-piloto-f1-casco-piloto-formula-pie-pista-carreras-despues-competencia_983424-6256.jpg'
                },
                dob: driver.dob,
                nationality: driver.nationality,
                team: Team.map(team => team.name).join(', '),
                description: driver.description,
            };
        }));

        // Combinar conductores de la API y conductores de la base de datos
        const allDrivers = [...defaultDriversImage, ...driversTeamsDB];

        return res.json(allDrivers);
    } catch (error) {
        // Manejar errores
        console.error("Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}; 

