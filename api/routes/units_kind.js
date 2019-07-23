const router = require("express").Router();
const { generate: generateId } = require("shortid");
const Myschema = require("../model/mySchema");

router.get("/", async (req, res, next) => {
  const status = 200;
  console.log(req.query);
  Myschema.find(req.query).then(response => {
    res.json({ status, response });
    console.log("kkkkkkkkkkkkkkkkkkk");
  });
});
module.exports = router;
