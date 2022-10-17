const express = require("express");
const { callVelibAction } = require("../controllers/velibController.js");

const router = express.Router();

router.get('/velib', (req, res) => {
    callVelibAction(req, res);
  }
)

module.exports = router;