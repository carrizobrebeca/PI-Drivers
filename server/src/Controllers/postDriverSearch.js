const { Team, Driver } = require("../db.js");

exports.postDriverSearch = async (req, res) => {
  const { forename, surname, nationality, image, description, dob, team } = req.body.driver;

  try {
    if (!forename || !surname || !nationality || !image || !description || !dob || !team)
      return res.status(400).json({ error: "Faltan Datos" });

    // Controlar que no se agregue dos veces
    const [driverPost, created] = await Driver.findOrCreate({
      where: { forename },
      defaults: { surname, nationality, image, description, dob }
    });

    if (!created) {
      return res.status(409).json({ error: "Driver ya creado" });
    }

    // Asociar equipo si se proporcionó
    if (team.length > 0) {
      const DBTeam = await Team.findAll({
        where: {
          name: team,
        }
      });

      if (DBTeam.length > 0) {
        await driverPost.addTeam(DBTeam[0]); // Agrega el primer equipo encontrado
      }
    }

    // Traer todos los datos del driver creado
    const fullDriverPost = await Driver.findOne({
      where: { forename },
      include: [Team] // Incluir asociaciones de equipo si existen
    });

    return res.status(200).json(fullDriverPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};