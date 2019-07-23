const router = require("express").Router({ mergeParams: true });
const { generate: generateId } = require("shortid");
const Myschema = require("../model/mySchema");

/******************************************************** */
router.patch("/", async (req, res, next) => {
  const status = 200;
  try {
    x = await Myschema.findById(req.params.unitId);

    x.name = req.body.name;
    //Object.assign(x.name, req.body.name);
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
router.delete("/", async (req, res, next) => {
  const status = 200;
  try {
    x = await Myschema.findById(req.params.unitId);

    x.remove();
    //Object.assign(x.name, req.body.name);
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

module.exports = router;
