const { MONGO_DB, NODE_ENV, PORT } = process.env;
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

if (MONGO_DB) {
  const options = { useFindAndModify: false, useNewUrlParser: true };
  mongoose.connect(MONGO_DB, options);
  console.log("Connected to database!");
} else {
  console.log("MONGO_DB is not provided");
}

// Application-level Middleware
if (NODE_ENV === "development") app.use(morgan("dev"));
app.use(require("body-parser").json());

/************************************************************************* */
// Routes
app.use("/api/v1/units", require("./api/routes/units"));
app.use("/api/v1/units/:unitId/company", require("./api/routes/company"));

/************************************************************************* */
app.use(
  ({ status = 500, message = "Something went wrong" }, req, res, next) => {
    res.status(status).json({ status, message });
  }
);

const listener = () => console.log(`Listening to port ${PORT}!`);
app.listen(PORT, listener);
