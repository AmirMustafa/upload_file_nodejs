var express = require("express");
var router = express.Router();

const upload = require("../common");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send({
    status: "success",
    message: "File uploaded successfully",
    data: req.file,
  });
});

router.post("/multiple", upload.array("images"), (req, res) => {
  console.log(req.files);
  res.send({
    status: "success",
    message: "Files uploaded successfully",
    data: req.files,
  });
});

module.exports = router;
