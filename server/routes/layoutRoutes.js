const express = require("express");
const { getLayout, saveLayout } = require("../controllers/layoutController");

const router = express.Router();

router.get("/", getLayout);
router.post("/", saveLayout);

module.exports = router;