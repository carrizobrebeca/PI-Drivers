const { Team } = require("../db");
const axios = require("axios");


exports.getTeams = async (req, res) => {

    try {

        const countTeams = await Team.count();
        let teams = [];

        if(!countTeams) {
            const resp = await axios('http://localhost:5000/drivers');
            const drivers = resp.data.drivers;
            
            drivers.forEach(driver => {
                const driverTeams = driver.teams ? driver.teams.split(",").map(team => team.trim()) : [];
                teams.push(...driverTeams);
            });
            
            teams = [...new Set(teams)];

            const promises = teams.map(name => Team.findOrCreate({
                where: { name },
                defaults: {
                    image: 'https://img.freepik.com/fotos-premium/retrato-piloto-f1-casco-piloto-formula-pie-pista-carreras-despues-competencia_983424-6256.jpg',
                }
            }));

            await Promise.all(promises);

        }else{
            teams = await Team.findAll();
        }

        return teams;

    } catch (error) {

        throw new Error("Something went wrong, try again later")

    }
}


