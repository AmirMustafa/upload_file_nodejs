var express = require("express");
var router = express.Router();

const upload = require("../common");
const { uploadFile, getFileStream } = require("../s3");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/images/:key", (req, res) => {
  const key = req.params.key;
  console.log(req.params.key);
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

router.post("/single", upload.single("image"), async (req, res) => {
  console.log(req.file);

  // uploading to AWS S3
  const result = await uploadFile(req.file);
  console.log("S3 response", result);

  // You may apply filter, resize image before sending to client

  // Deleting from local if uploaded in S3 bucket
  await unlinkFile(req.file.path);

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
