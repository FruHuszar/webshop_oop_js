const express = require("express");
const router = express.Router();

const termekController = require("../controllers/termekController");

router.get("/", termekController.getAllTermek);
router.delete("/:id", termekController.deleteTermek);

module.exports = router;
