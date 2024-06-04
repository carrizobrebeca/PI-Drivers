const axios = require("axios");
const { Driver, Team } = require('../db');

const getDriverId = async (id, origin) => {
    let driver;
  
    if (origin === "api") {
      // Obtener conductor desde la API y mapear los datos
      const apiDriver = (
        await axios.get(`http://localhost:5000/drivers/${id}`)
      ).data;
  
      driver = {
        id: apiDriver.id,
        forename: apiDriver.name.forename,
        surname: apiDriver.name.surname,
        description: apiDriver.description,
        image: apiDriver.image.url,
        nationality: apiDriver.nationality,
        dob: apiDriver.dob,
        team: apiDriver.teams,
        created: false,
      };
  
      if (apiDriver.image && apiDriver.image.url) {
        driver.image = apiDriver.image.url;
      } else {
        driver.image = 'https://img.freepik.com/fotos-premium/retrato-piloto-f1-casco-piloto-formula-pie-pista-carreras-despues-competencia_983424-6256.jpg';
      }
    } else {
      // Obtener conductor desde la base de datos
      driver = await Driver.findByPk(id, {
        include: [
          {
            model: Team,
            through: {
              attributes: [],
            },
          },
        ],
      });
  
      if (driver) {
        // Mapear los datos del conductor y sus equipos
        const team = driver.Teams.map((t) => t.name).join(", ");
        driver = {
          id: driver.id,
          forename: driver.forename,
          surname: driver.surname,
          description: driver.description,
          image: driver.image,
          nationality: driver.nationality,
          dob: driver.dob,
          team: team,
          created: false,
        };
      }
    }
  
    return driver;
  };