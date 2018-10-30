const express = require("express");
const router = express.Router();

const staticController = require("../controllers/staticController");


router.get("/", staticController.index);
router.post("/posts/create", staticController.create);

module.exports = router;
