var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema(
  {
    kind: String,
    floor: String,
    special_monthly_offer: Number,

    name: String,
    contact_email: String,

    first_name: String,
    last_name: String,
    preferred_name: String,
    position: String,
    birthday: String,
    email: String
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

module.exports = mongoose.model("Myschema", schema);
