const { Router } = require("express");
const { getDriver } = require("../Controllers/getDriver");


const router = Router();
router.get("/drivers", getDriver)
router.get("/trams")
module.exports = router;
