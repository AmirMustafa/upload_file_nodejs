var express = require("express");
var router = express.Router();

const upload = require("../common");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/single_upload", upload.single("image"), (req, res, next) => {
  console.log(req.file);
  res.send("uploaded successfully");
});

module.exports = router;
