var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const machineName = process.env.HOSTNAME;
  const options = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }
  const currentTime = new Date().toLocaleTimeString("en-US", options);
  res.send(JSON.stringify({ machineName, currentTime }));
});

module.exports = router;
