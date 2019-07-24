const router = require("express").Router({ mergeParams: true });
const { generate: generateId } = require("shortid");
const Myschema = require("../model/mySchema");

router.get("/", async (req, res, next) => {
  const status = 200;
  x = await Myschema.findById(req.params.unitId);
  //console.log(req.params.unitId);
  //   y = await Myschema.find({ name: x.name });//why await can find just one instance?
  //   console.log({ name: x.name });
  //   res.json({ status, x });

  Myschema.find({ name: x.name }).then(response => {
    res.json({ status, response });
  });
});
/******************************************************** */
router.get("/:id", async (req, res, next) => {
  const status = 200;

  try {
    x = await Myschema.findById(req.params.unitId);

    y = x.Employee.id(req.params.id);

    res.json({ status, y });
  } catch (error) {
    res.json({
      status: 404,
      message: "somthing went wrong. couldn't find the id"
    });
  }
});
/******************************************************** */
router.post("/", async (req, res, next) => {
  const status = 201;
  try {
    Myschema.create(req.body).then(response => {
      res.json({ status, response });
    });
  } catch (error) {
    console.error(error);
    const e = new Error("Somthing went wrong");

    e.status = 400;
    next(e);
  }
});

/******************************************************** */
router.patch("/:id", async (req, res, next) => {
  const status = 200;
  try {
    x = await Myschema.findById(req.params.unitId);
    y = x.Employee.id(req.params.id);

    Object.assign(x, req.body);
    await x.save();
    res.json({ status, x });
  } catch (error) {
    res.json({
      status: 404,
      message: "somthing went wrong. couldn't find the id"
    });
  }
});
/******************************************************** */
router.delete("/:id", async (req, res, next) => {
  const status = 200;
  //console.log("ddddddddddddddddddd");
  const response = await Myschema.findOneAndDelete({
    _id: req.params.id
  });

  res.json({ status, response });
});

module.exports = router;
/********************* */
