const router = require("express").Router();
const { generate: generateId } = require("shortid");
const Myschema = require("../model/mySchema");

router.get("/", async (req, res, next) => {
  const status = 200;

  Myschema.find(req.query).then(response => {
    console.log("qqqqqqqqqqqqqq");
    res.json({ status, response });
  });
});
/******************************************************** */
router.patch("/:id", async (req, res, next) => {
  const status = 200;
  try {
    x = await Myschema.findById(req.params.id);

    Object.assign(x, req.body);
    await x.save();
    res.json({ status, x });
  } catch (error) {
    //res.json({ 404,  });
    res.json({
      status: 404,
      message: "somthing went wrong. couldn't find the id"
    });
  }
});

module.exports = router;
