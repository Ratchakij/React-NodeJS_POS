const express = require("express");
const packageController = require("../controllers/PackageController");
const router = express.Router();

router.get("/list", packageController.list);

module.exports = router;
