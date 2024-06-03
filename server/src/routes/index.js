const { Router } = require("express");
const { getDriver, getTeams } = require("../Controllers/getDriver");

const router = Router();
router.get("/drivers", getDriver);
// router.get("/drivers/:teams", getTeams); // Esta es la ruta que debería manejar las solicitudes para obtener los equipos
module.exports = router;
