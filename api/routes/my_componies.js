const router = require("express").Router({ mergeParams: true });
const { generate: generateId } = require("shortid");
const Myschema = require("../model/mySchema");

router.get("/", async (req, res, next) => {
  const status = 200;
  //let regex = new RegExp("/" + req.query.name + "/i");

  //string.replace(regex, "replacement");

  //const z = req.query.name;
  // console.log({ name: `/` + req.query.name + `/i` });
  //console.log({ name: "/" + req.query.name + "/i" });
  //const g = { name: "/" + req.query.name + "/i" };
  //Myschema.find({ name: /b/i })
  Myschema.find(req.qury)
    .select("-special_monthly_offer -floor -kind -__v")
    .then(response => {
      res.json({ status, response });
    });
});
/******************************************************** */

router.get("/", async (req, res, next) => {
  const status = 200;
  // console.log(req.query);
  Myschema.find(req.query).then(response => {
    res.json({ status, response });
  });
});
/******************************************************** */

module.exports = router;
/********************* */
