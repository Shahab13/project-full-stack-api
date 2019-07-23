const router = require("express").Router({ mergeParams: true });
const { generate: generateId } = require("shortid");
const Myschema = require("../model/mySchema");

router.get("/", async (req, res, next) => {
  const status = 200;
  // console.log(req.query);
  Myschema.find(req.query).then(response => {
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
    res.json({
      status: 404,
      message: "somthing went wrong. couldn't find the id"
    });
  }
});
/******************************************************** */
// router.post("/", async (req, res, next) => {
//   const status = 201;
//   try {
//     Myschema.create(req.body).then(response => {
//       res.json({ status, response });
//     });
//   } catch (error) {
//     console.error(error);
//     const e = new Error("Somthing went wrong");

//     e.status = 400;
//     next(e);
//   }
// });

// /******************************************************** */
// router.get("/:id", async (req, res, next) => {
//   const status = 200;
//   Myschema.findById(req.params.id)
//     .select("title  start_year season_count -_id")
//     .then(response => {
//       res.json({ status, response });
//     });
// });

// router.put("/:id", async (req, res, next) => {
//   const status = 200;
//   const response = await Myschema.findOneAndUpdate(
//     { _id: req.params.id },
//     { title: req.body.title },
//     { new: true }
//   ).select("title  start_year season_count -_id");

//   res.json({ status, response });
// });

// router.delete("/:id", async (req, res, next) => {
//   const status = 200;
//   const response = await Myschema.findOneAndDelete({
//     _id: req.params.id
//   }).select("title  start_year season_count -_id");

//   res.json({ status, response });
// });

module.exports = router;
